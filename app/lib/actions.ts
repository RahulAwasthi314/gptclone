'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const msgSchema = z.object({
  msgId: z.string({
    required_error: 'MessageId required',
  }),
  versionId: z.string(),
  content: z.string({
    required_error: "Content is required",
  }),
  response: z.string({
    required_error: 'Response is required',
  }),
  chatId: z.string({
    required_error: "chat Id is required",
  })
});
 

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

export type ChatState = {
  errors?: {
    // id?: string[],
    chatTitle?: string[],
    authorId?: string[],
  };
  message?: string | null;
}

export type MsgState = {
  errors?: {
    msgId?: string[];
    versionId?: string[];
    content?: string[];
    response?: string[];
    chatId?: string[];
  };
  message?: string | null;
}

const UpdateMessageVersion = msgSchema.omit({
  // versionId: true,
});

export async function updateMessageVersion(
  id: string,
  prevState: MsgState,
  formData: FormData
) {
  const validatedFields = UpdateMessageVersion.safeParse({
    msgId: formData.get('msgId'),
    versionId: formData.get('versionId'),
    content: formData.get('content'),
    chatId: formData.get('chatId'),
    response: formData.get('response'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to create a new version of message.'
    };
  }

  const { msgId, content, chatId, response} = validatedFields.data;

  try {
    await sql`
      INSERT INTO messages (msgId, content, chatId, response)
      VALUES(${msgId}, ${content}, ${chatId}, ${response})
    `;
  } catch (error) {
    console.log(error)
    console.error("New Version of messaged creation failed.");
    throw new Error("New Version of messaged creation failed.");
  }
}