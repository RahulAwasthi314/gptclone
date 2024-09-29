import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { users, chats, messages } from '../lib/placeholder-data';

const client = await db.connect();

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}

async function seedChats() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS chats (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      chatTitle VARCHAR(255) NOT NULL,
      authorId UUID,  -- Removed the invalid DEFAULT clause
      FOREIGN KEY (authorId) REFERENCES users(id)  -- Moved FOREIGN KEY constraint outside the column definition
);
  `;
  const insertedChats = await Promise.all(
    chats.map(
      (chat) => client.sql`
        INSERT INTO chats (id, chatTitle, authorId)
        VALUES (${chat.id}, ${chat.chatTitle}, ${chat.authorId})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );
  return insertedChats;
}

async function seedMessages() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS messages (
      msgId UUID NOT NULL,
      versionId UUID DEFAULT uuid_generate_v4(),
      content VARCHAR(255) NOT NULL,
      response VARCHAR(255),
      chatId UUID,
      PRIMARY KEY (msgId, versionId),
      FOREIGN KEY (chatId) REFERENCES chats(id)
    );
  `;
  const insertedMessages = await Promise.all(
    messages.map(
      (message) => client.sql`
        INSERT INTO messages (msgId, versionId, content, response, chatId)
        VALUES (${message.msgId}, ${message.versionId}, ${message.content}, ${message.response}, ${message.chatId})
      `,
    ),
  );
  return insertedMessages;
}


export async function GET() {
  // return Response.json({
  //   message:
  //     'Uncomment this file and remove this line. You can delete this file when you are finished.',
  // });
  try {
    await client.sql`BEGIN`;
    await seedUsers();
    await seedChats();
    await seedMessages();

    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    console.log(error)
    return Response.json({ error }, { status: 500 });
  }
}
