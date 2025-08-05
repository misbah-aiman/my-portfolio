import './globals.css';
import { cookies } from 'next/headers';
import SupabaseProvider from './component/SupabaseProvider';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <body>
        <SupabaseProvider session={session}>
          {children}
        </SupabaseProvider>
      </body>
    </html>
  );
}