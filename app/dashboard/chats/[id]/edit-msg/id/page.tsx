import Form from '@/app/ui/messages/edit-msg';
import {getMessageByVersionId } from '@/app/lib/data';
 
export default async function Page({ params }: { params: { id: string } }) {
  const versionId = params.id;
  const message = await getMessageByVersionId(versionId);
  
  return (
    <main>
        <p>hi</p>
      <Form message={message} />
    </main>
  );
}