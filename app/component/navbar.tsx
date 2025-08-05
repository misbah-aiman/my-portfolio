'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 sticky top-0 z-40">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <Link href="/" className="text-xl font-bold">
          My Portfolio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link href="/projects" className="hover:text-gray-400">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 p-4 space-y-4">
          <Link 
            href="/" 
            className="block hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="block hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/projects" 
            className="block hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link 
            href="/contact" 
            className="block hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;