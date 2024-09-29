import { deleteChatById } from "@/app/lib/actions";
import { Message } from "@/app/lib/definitions";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export function CreateChat() {
  return (
    <Link
      href="/dashboard/chats/new-chat"
      className="flex h-10 items-center justify-between rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">New Chat</span>{" "}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function EditPrompt({message}: {message: Message}) {
  return (
    <Link href={`/edit-msg/${message.versionId}`}
      // className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteChat({ id }: { id: string }) {
  const deleteChatWithId = deleteChatById.bind(null, id);
  return (
    <form action={deleteChatWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}