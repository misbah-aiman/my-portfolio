import './globals.css';
import NavBar from './component/navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Misbah Aiman Portfolio',
  description: 'Personal portfolio of Misbah Aiman',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
