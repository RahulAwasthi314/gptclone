'use client';

import { Message } from "@/app/lib/definitions";
import clsx from "clsx";

export default function MessageListWrapper({
    messages,
  }: {
    messages: Message[];
  }
) {
    
  return (
    <>
    <p></p>
      <p>edit the message you want to see icon</p>
      {messages.map((message) => {
        return (
          <div
            key={message.msgId}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
            )}
          >

            <p>Query: {message.content}</p>
            <br />
            <p>Response: {message.response}</p>
            <br />
            <p>prev Version Icon</p> 
            <p>next Version Icon</p>
          </div>
        );
      })}
    </>
  );
}

