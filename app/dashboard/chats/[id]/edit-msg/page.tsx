import { getMessageByVersionId } from '@/app/lib/data';
import EditMsgForm from '@/app/ui/messages/edit-msg';
 
export default async function Page({ params }: { params: { id: string } }) {
  const versionId = params.id;
  const message = await getMessageByVersionId(versionId);
  
  return (
    <main>
      <p>jo</p>
      <EditMsgForm message={message}/>
      {/* <Form message={message} /> */}
    </main>
  );
}