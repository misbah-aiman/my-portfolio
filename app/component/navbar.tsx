'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/work' },
    { label: 'Resume', href: '/resume' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="flex justify-center gap-4 mt-8">
      {navItems.map(({ label, href }) => (
        <Link
          key={href}
          href={href}
          className={`px-4 py-2 rounded-md text-sm font-semibold transition duration-200 border
            ${pathname === href 
              ? 'bg-green-400 text-black border-green-400' 
              : 'text-white border-white hover:bg-green-400 hover:text-black'}`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
