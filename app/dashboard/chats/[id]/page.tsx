import { getMessagesByChatId } from "@/app/lib/data"
import { Message, } from "@/app/lib/definitions"
import { EditPrompt } from "@/app/ui/chats/buttons";

export default async function Page() {
    // get all messages of chatId: and segregate them into same message id, and their respective version id
    // then show the messages
    // const url: 
    // const messages: Message[] = await getMessagesByChatId('c234abcd-4001-4271-9855-fec4b6a6442a');

    const messages: Message[] = await getMessagesByChatId('c1cd1234-4001-4271-9855-fec4b6a6442a');
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