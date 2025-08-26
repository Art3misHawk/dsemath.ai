import Link from 'next/link';

export default function Sidebar() {
  return (
      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex space-x-4">
          <li>
            <Link href="/setting/">Overview</Link>
          </li>
          <li>
            <Link href="/setting/notification">Notification</Link>
          </li>
          <li>
            <Link href="/setting/privacy">Privacy</Link>
          </li>
          <li>
            <Link href="/setting/security">Security</Link>
          </li>
        </ul>
      </nav>
  )
}