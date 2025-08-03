'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
// @ts-ignore
import { supabase } from '../supabase'

export default function Navbar() {
  const path = usePathname()
  const [session, setSession] = useState<any>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }: any) => {
      setSession(data.session)
    })
    supabase.auth.onAuthStateChange((_event: any, value: any) => {
      setSession(value.session)
    })
  }, [])

  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <div className="flex space-x-4">
        <Link href="/">
          <a className={path === '/' ? 'font-bold' : ''}>Home</a>
        </Link>
        {session && (
          <Link href="/admin">
            <a className={path === '/admin' ? 'font-bold' : ''}>Admin</a>
          </Link>
        )}
      </div>
      <div>
        {session ? (
          <button
            onClick={() => supabase.auth.signOut()}
            className="text-red-600"
          >
            Logout
          </button>
        ) : (
          <Link href="/login"><a className="text-blue-600">Login</a></Link>
        )}
      </div>
    </nav>
  )
}
