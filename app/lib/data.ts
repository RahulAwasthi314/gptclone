import { sql } from '@vercel/postgres';
import {
  Chat,
  ChatRow,
  Message,
  MessageRow,
} from './definitions';

// create chat
export async function createChat(chat: Chat) {
  try {
    await sql`
      INSERT INTO chats (chatTitle, authorId)
      VALUES (${chat.chatTitle}, ${chat.authorId});
    `;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to create new chat');
  }
}

export async function getAllChats() {
  try {
    const result = await sql<ChatRow>`
      SELECT * FROM chats`;
      console.log(result.rows);
      const chats = result.rows.map((row) => ({
        id: row.id,
        chatTitle: row.chattitle,
        authorId: row.authorid,
      }));
    return chats;
    
  } catch(error) {
    console.log(error);
    throw new Error("Error fetching chats");
  }
}

export async function getMessageByVersionId(versionId: string) {
  try {
    const result = await sql<MessageRow>`
      SELECT * FROM messages 
      WHERE versionId = ${versionId} 
      LIMIT 1;
    `;
    const messages = result.rows[0];
    const message = {
      msgId: messages.msgid,
      content: messages.content,
      chatId: messages.chatid,
      response: messages.response,
      versionId: messages.versionid,
    };
    // console.log(messages.rows);
    return message;

  } catch (error) {
    console.error(`Error retrieving message for versionId ${versionId}: `, error);
    throw new Error(`Error retrieving message for version ${versionId}`);
  }
}

export async function getMessagesByChatId(chatId: string) {
  try {
    const result = await sql<MessageRow>`
      SELECT * FROM messages WHERE chatId = ${chatId};
    `;
    const messages = result.rows.map((row) => ({
      msgId: row.msgid,
      content: row.content,
      chatId: row.chatid,
      response: row.response,
      versionId: row.versionid,
    }));
    // console.log(messages.rows);
    return messages;
  } catch (error) {
    console.error(`Error retrieving messages for chatId ${chatId}: `, error);
    throw new Error(`Error retrieving messages for chatId ${chatId}`);
  }
}

export async function getMsgVersionsByMessageId(msgId: string) {
  try {
    const messageVersions = await sql<Message[]>`
      SELECT * FROM messages WHERE msgId = ${msgId};
    `;
    console.log(messageVersions);
    return messageVersions;
  } catch (error) {
    console.error(`Error retrieving message versions for msgId ${msgId}: `, error);
    throw new Error(`Error retrieving message versions for msgId ${msgId}`);
  }
}

export async function getResponseByMsgVersionId(msgVersionId: string) {
  try {
    const result = await sql`
      SELECT response FROM messages WHERE versionId = ${msgVersionId};
    `;
    if (result === null) throw new Error("Response Does not found for this message.");
    console.log(result);
    return result;
  } catch (error) {
    console.error(`Error retrieving response for versionId ${msgVersionId}: `, error);
    throw new Error(`Error retrieving response for versionId ${msgVersionId}`);
  }
}

export async function postMsgByMsgId(message: Message) {
  const {msgId, versionId, content, response, chatId} = message;
  try {
     await sql`
      INSERT INTO messages (msgId, versionId, content, response, chatId)
      VALUES (${msgId}, ${versionId}, ${content}, ${response}, ${chatId});
    `;
  } catch (error) {
    console.error(`Error posting message with msgId ${message.msgId}: `, error);
    throw new Error(`Error posting message with msgId ${message.msgId}: ${error}`);
  }
}


export async function updateResponseByMsgVersionId(versionId: string, message: Message) {
  try {
    await sql`
    UPDATE messages
    SET response = ${message.response}
    WHERE versionId = ${versionId}
    `;
  } catch (error) {
    console.log(error);
    throw new Error("Error updating response");
  }
}


// place the delete messages by chatId logic here
export async function deleteMessageByMsgVersionId(msgId: string, versionId: string) {
  try {
    await sql`
    DELETE FROM messages
    WHERE msgId = ${msgId} and versionId = ${versionId}
    `;
  } catch(error) {
    console.log(error);
    throw new Error("Messaged deletion failed.");
  }
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
  } catch (error) {
    // If something goes wrong, rollback the transaction
    await sql`ROLLBACK;`;
    console.error(`Error deleting chat and messages: `, error);
  }
}


export async function getMessagesById(msgId: string) {
  try {
    const messages = await sql<Message[]>`
      SELECT * FROM messages WHERE msgId = ${msgId};
    `;
    console.log(messages);
    return messages;
  } catch(error) {
    console.log(error);
    throw new Error("Error getting the messages.");
  }
}