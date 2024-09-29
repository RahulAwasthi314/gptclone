import { getMessagesByChatId } from "@/app/lib/data"
import { Message, } from "@/app/lib/definitions"
import { EditPrompt } from "@/app/ui/chats/buttons";

export default async function Page({ 
  params
}: {
  params: { id: string }
}) {
    const messages: Message[] = await getMessagesByChatId(params.id);
    console.log("hello");
    console.log(JSON.stringify(messages));
    return (
      // {/* <MessageViewer messages={messages}/> */}
      <table border={1} style={{ width: '100%', borderCollapse: 'collapse', borderWidth: '1px' }}>
          <thead>
          <tr>
              <td>msgId</td>
              <td>versionId</td>
              <td>chatId</td>
              <td>content</td>
              <td>response</td>
              <td>Activity</td>
          </tr>
          </thead>
          <tbody>
          {messages.map((msgRow) => (
            
            <tr key={msgRow.versionId}>
              
              <td>{msgRow.msgId}</td>
              <td>{msgRow.versionId}</td>
              <td>{msgRow.chatId}</td>
              <td>{msgRow.content}</td>
              <td>{msgRow.response}</td>
              <td>
                  <EditPrompt message={msgRow}/>
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
    )
}