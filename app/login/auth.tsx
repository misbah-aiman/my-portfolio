// pages/login.tsx
import { useState } from 'react'
// @ts-ignore
import { supabase } from '../supabase'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) alert(error.message)
    else window.location.href = '/admin'
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl mb-4">Login</h1>
      <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border p-2 mb-2 block" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="border p-2 mb-4 block" />
      <button onClick={handleLogin} className="bg-blue-500 text-white p-2 rounded">Login</button>
    </div>
  )
}