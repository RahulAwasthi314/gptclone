'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export type ChatState = {
  errors?: {
    // id?: string[],
    chatTitle?: string[],
    authorId?: string[],
  };
  message?: string | null;
}

const chatSchema = z.object({
  chatTitle: z.string({
    invalid_type_error: 'Enter text as input',
  })
  .max(100, {message: 'Please limit your query within 1000 words'}),
  authorId: z.string({
    required_error: 'AuthorId is required',
    // invalid_type_error: 'Invalid author. Check if you are loggedIn?',
  }),
})

const CreateChat = chatSchema.omit({
  // id: true, 
  // authorId: true,
});

export async function createChat(prevState: ChatState, formData: FormData) {
  const validatedFields = CreateChat.safeParse({
    // id: formData.get('id'),
    chatTitle: formData.get('chatTitle'),
    authorId: formData.get('authorId'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create New Chat.',
    };
  }
  
  const { chatTitle, authorId } = validatedFields.data;
  console.log(`chatTitle: ${chatTitle}`);
 
  try {
    await sql`
      INSERT INTO chats (chattitle, authorid)
      VALUES (${chatTitle}, ${authorId})
    `;
  } catch (error) {
    console.log("ERROR: find ME", error);
    return {
      message: 'Database Error: Failed to Create Chat.',
    };
  }

  revalidatePath('/dashboard/chats');
  redirect('/dashboard/chats');
}


export type MsgState = {
  errors?: {
    msgId?: string[],
    // versionId?: string[],
    chatId?: string[],
    content?: string[],
    response?: string[],
  };
  message?: string | null;
}

const msgSchema = z.object({
  msgId: z.string({
    required_error: 'msgId required',
  }),
  versionId: z.string({
    required_error: 'versionId required',
  }),
  chatId: z.string({
    required_error: 'chatId required',
  }),
  content: z.string({
    required_error: 'content required',
  }),
  response: z.string({
    required_error: 'response required',
  }),
})

const UpdateMessageVersion = msgSchema.omit({
  // id: true, 
    // versionId: true,
  // authorId: true,
});

export async function updateMessageVersion(prevState: MsgState, formData: FormData) {
  const validatedFields = UpdateMessageVersion.safeParse({
    msgId: formData.get('msgId'),
    // versionId: formData.get('versionId'),
    chatId: formData.get('chatId'),
    content: formData.get('content'),
    response: formData.get('response'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create New Chat.',
    };
  }
  
  const { msgId, chatId, content, response } = validatedFields.data;
  // console.log(`chatTitle: ${chatTitle}`);
 
  try {
    await sql`
      INSERT INTO messages (msgId, chatId, content, response)
      VALUES (${msgId}, ${chatId}, ${content}, ${response})
    `;
  } catch (error) {
    console.log("ERROR: find ME", error);
    return {
      message: 'Database Error: Failed to Create Message.',
    };
  }

  revalidatePath('/dashboard/chats');
  redirect('/dashboard/chats');
}

export async function deleteChatById(chatId: string) {
  // Start a transaction to ensure both deletions happen together
  try {
    await sql`BEGIN;`;

    // Delete messages associated with the chatId
    await sql`
      DELETE FROM messages WHERE chatId = ${chatId};
    `;

    // Delete the chat with the given chatId
    await sql`
      DELETE FROM chats WHERE id = ${chatId};
    `;

    // Commit the transaction
    await sql`COMMIT;`;
    
    console.log(`Chat and its associated messages deleted successfully.`);
    revalidatePath('/dashboard/chats');
    redirect('/dashboard/chats');
  } catch (error) {
    // If something goes wrong, rollback the transaction
    await sql`ROLLBACK;`;
    console.error(`Error deleting chat and messages: `, error);
  }
}