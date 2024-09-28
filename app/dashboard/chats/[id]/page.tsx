import { getMessagesByChatId } from "@/app/lib/data";
import { Message } from "@/app/lib/definitions";
import MessageListWrapper from "@/app/ui/chats/messagelist-wrapper";

export default async function Page() {
    // get all messages of chatId: and segregate them into same message id, and their respective version id
    // then show the messages
    // get current chat Id
    // get all messages from chatId // sorted by version Id
    const chatId: string ='c1cd1234-4001-4271-9855-fec4b6a6442a';
    const messages: Message[] = await getMessagesByChatId(chatId);
    // 
    return <div>
        chat id page to show msg of chat id[id]
        <MessageListWrapper messages={messages}/>
    </div>
}