'use client';

import { Chat } from "@/app/lib/definitions";
import clsx from "clsx";
import { DeleteChat } from "./buttons";

export default function ChatListWrapper({
    chats,
  }: {
    chats: Chat[];
  }
) {
  return (
    <>
    <h1 className=" text-xl font-medium items-center">Chat Messages</h1>
      {chats.map((chat) => {
        return (
          <div
            key={chat.id}
            className={clsx(
              'flex h-[48px] grow items-center justify-between gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
            )}
          >
            <p>{chat.id}</p><br />
            <p>{chat.chatTitle}</p>
            <DeleteChat id={chat.id}/>
          </div>
        );
      })}
    </>
  );
}
