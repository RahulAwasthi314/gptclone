'use client';

import Link from 'next/link';
import {
  ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createChat, ChatState } from '@/app/lib/actions';
import { useActionState } from 'react';

export default function ChatForm(
) {
    
  const initialState: ChatState = { message: null, errors: {} };
  const [state, chatAction] = useActionState(createChat, initialState);
  return (
    <form action={chatAction}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        
        {/* Chat Title */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Enter Chat Title
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="chatTitle"
                name="chatTitle"
                type="Text"
                placeholder="Sanvasa AI interview questions ;)"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby='chat-title-error'
              />
              <ChatBubbleBottomCenterTextIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            <div id="customer-error" aria-live="polite" aria-atomic="true">
              {state.errors?.chatTitle &&
                state.errors.chatTitle.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
        </div>

      {/* author Id  */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Author Id
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="authorId"
                name="authorId"
                type="Text"
                value="a20544b2-4001-4271-9855-bec566a6442a"
                placeholder="UUID lies here!"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue="a20544b2-4001-4271-9855-bec566a6442a"
                aria-describedby='authorid-error'
                readOnly
              />
              <ChatBubbleBottomCenterTextIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            <div id="authorid-error" aria-live="polite" aria-atomic="true">
              {state.errors?.authorId &&
                state.errors.authorId.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/chats"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Chat</Button>
      </div>
    </form>
  );
}
