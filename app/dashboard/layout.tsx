import SideNav from '@/app/ui/dashboard/sidenav';
import { getAllChats } from '../lib/data';
import { Chat } from '../lib/definitions';

export const experimental_ppr = true;

export default async function Layout({ children }: { children: React.ReactNode }) {
  const chats: Chat[] = await getAllChats();
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav chats={chats}/>
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}