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
    <nav className="flex justify-center space-x-6 mt-8 text-white">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`text-sm uppercase tracking-wide hover:text-green-400 ${
            pathname === item.href ? 'text-green-400 font-semibold' : ''
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}