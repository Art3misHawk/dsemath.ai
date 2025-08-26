'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SettingsPagesType {
  name: string;
  href: string;
}

const settingsPages: SettingsPagesType[] = [
  { name: 'Notifications', href: 'notification' },
  { name: 'Privacy', href: 'privacy' },
  { name: 'Account', href: 'account' },
  { name: 'Security', href: 'security' },
]

export default function Sidebar() {
  return (
    <nav className="bg-blue-100 text-gray-500 w-64 min-h-screen p-6 flex flex-col">
      <h2 className="text-xl font-semibold mb-6">Settings</h2>
      <ul className="flex flex-col space-y-2">
        {settingsPages.map((page) => 
          <li>
            <SidebarItem
              key={page.href}
              name={page.name}
              href={page.href}
            />
          </li>
        )}
      </ul>
    </nav>
  );
}

function SidebarItem({ name, href }: SettingsPagesType) {
  const pathname = usePathname();

  return (
    <Link
      href= {`/settings/${href}`}
      className={`block py-2 px-4 rounded-md transition-colors ${
        pathname === `/settings/${href}` || name === 'Notifications' && pathname === '/settings'
          ? 'bg-blue-200 text-gray-700 font-medium'
          : 'hover:bg-blue-200 hover:text-gray-700'
      }`}
    >
      {name}
    </Link>
  )
}
