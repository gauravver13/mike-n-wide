'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) router.push('/login');
  };

  return (
    <form onSubmit={handleSubmit} className='bg-black flex flex-col'>
      EMAIL: <input type="email" onChange={(e) => setEmail(e.target.value)} className='bg-white p-2 m-4 inline-block'/>
      PASSWORD: <input type="password" onChange={(e) => setPassword(e.target.value)} className='bg-white p-2 m-4 inline-block'/>
      <button type="submit" className='bg-red-500 p-4 m-2'>Sign Up</button>
    </form>
  );
}
