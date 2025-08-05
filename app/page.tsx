'use client';

import { useSupabase } from './component/SupabaseProvider';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type MenuItem = {
  name: string;
  href: string;
};

export default function Home() {
  const { supabase, session } = useSupabase();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { name: 'Admín', href: '/admin' },
    { name: 'Percas', href: '/projects' },
    { name: 'blog', href: '/blog' },
    { name: 'Resume', href: '/resume' },
    { name: 'Prople', href: '/people' },
  ];

  const handleAuth = async () => {
    if (session) {
      await supabase.auth.signOut();
      router.refresh();
    } else {
      await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: { redirectTo: `${location.origin}/auth/callback` }
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/background.jpeg"
          alt="Background"
          fill
          className="blur-sm opacity-60 object-cover"
          priority
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm p-4 flex justify-between items-center border-b border-gray-700">
        <div className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-700/50 transition-all"
            aria-expanded={isMenuOpen}
            aria-controls="dropdown-menu"
          >
            <span className="font-medium">Home</span>
            <svg 
              className={`w-4 h-4 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}
              aria-hidden="true"
            >
              <path stroke="currentColor" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isMenuOpen && (
            <div 
              id="dropdown-menu"
              className="absolute left-0 mt-2 w-56 bg-gray-800 rounded-lg shadow-xl border border-gray-700"
            >
              {menuItems.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href}
                  className="block px-6 py-3 hover:bg-gray-700 border-b border-gray-700 last:border-b-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={handleAuth}
          className="px-6 py-2 bg-primary hover:bg-primary-dark rounded-full transition-all shadow-md hover:shadow-lg"
          aria-label={session ? 'Sign out' : 'Sign in'}
        >
          {session ? 'Sign Out' : 'Sign In'}
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-screen px-4 pt-24 pb-16">
        <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl mb-8 group hover:scale-105 transition-transform duration-300">
          <Image
            src="/profile.png"
            alt="Misbah Aiman"
            fill
            className="object-cover group-hover:opacity-90 transition-opacity"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          MISBAH AIMAN
        </h1>
        <p className="text-lg md:text-xl text-green-400 uppercase tracking-[0.2em] mb-8">
          PROGRAMMED • GRAPHIC LEXIQUE
        </p>
      </main>
    </div>
  );
}