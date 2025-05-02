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
    <nav className="flex justify-center space-x-6 mt-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`text-sm uppercase tracking-wide px-4 py-2 rounded-md transition-colors ${
            pathname === item.href 
              ? 'bg-white text-black font-semibold' 
              : 'bg-white/10 text-white hover:bg-white hover:text-black'
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}