import { getAllChats } from "@/app/lib/data";
import { Chat } from "@/app/lib/definitions";
import ChatListWrapper from "@/app/ui/chats/chatlist-wrapper";

export default async function Page() {
    const chats: Chat[] = await getAllChats();
    return <ChatListWrapper chats={chats} />
}