'use client';

import { Message } from '@/app/lib/definitions';
import {
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { useActionState } from 'react';
import { MsgState, updateMessageVersion } from '@/app/lib/actions';

export default function EditMsgForm({
  message
}: {
  message: Message
}) {
  
  const initialState: MsgState = { message: null, errors: {} };
  const [state, msgAction] = useActionState(updateMessageVersion, initialState);
  // const initialState: MsgState = { message: null, errors: {}};
  // // const addMessageWithId = updateMessageVersion.bind(null, message.msgId);
  // const [state, formAction] = useActionState(updateMessageVersion, initialState);
  return (
    <form action={msgAction}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        

        {/* Chat ID */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Chat ID
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="chatId"
                name="chatId"
                type="text"
                defaultValue={message.chatId}
                placeholder="Chat Id"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby='chatId-error'
                readOnly
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            <div id="chatId-error" aria-live="polite" aria-atomic="true">
              {state.errors?.chatId &&
                state.errors.chatId.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
        </div>


        {/* message ID */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Message ID
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="msgId"
                name="msgId"
                type="text"
                defaultValue={message.msgId}
                placeholder="Message Id"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby='msgId-error'
                readOnly
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            <div id="msgId-error" aria-live="polite" aria-atomic="true">
              {state.errors?.msgId &&
                state.errors.msgId.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Query 
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="content"
                name="content"
                type="text"
                defaultValue={message.content}
                placeholder="Query"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby='content-error'
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            <div id="content-error" aria-live="polite" aria-atomic="true">
              {state.errors?.content &&
                state.errors.content.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
        </div>

        {/* Response */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Response
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="response"
                name="response"
                type="text"
                defaultValue={message.response}
                placeholder="Response"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby='response-error'
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            <div id="response-error" aria-live="polite" aria-atomic="true">
              {state.errors?.response &&
                state.errors.response.map((error: string) => (
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
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Edit Invoice</Button>
      </div>
    </form>
  );
}
