'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (res?.ok) {
      router.push('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='bg-black'>
      EMAIL <input type="email" onChange={(e) => setEmail(e.target.value)} className='p-4 bg-white m-8' />
      <br />
      PASSWORD <input type="password" onChange={(e) => setPassword(e.target.value)} className='p-4 bg-white m-8' />
      <br />

      <button type="submit" className='bg-red-400 p-4 m-6'>Sign In</button>
      <br />
      <button type="button" onClick={() => signIn('google')} className='bg-red-500 p-4 m-8'>Sign In with Google</button>
    </form>
  );
}
