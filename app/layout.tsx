import './globals.css'; // make sure this path is correct

export const metadata = {
  title: 'Misbah Aiman',
  description: 'Portfolio site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
