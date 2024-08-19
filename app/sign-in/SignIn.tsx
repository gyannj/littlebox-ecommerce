"use client";
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

type Props = {};

const buttonStyle =
  'flex flex-row bg-dark-3 justify-center items-center py-3 px-4 size-fit rounded-lg hover:cursor-pointer hover:bg-slate-700';
const placeholderStyle =
  'flex bg-dark-3 outline-none text-searchBoxColor font-medium w-96 p-2 rounded-xl';

const SignIn = (props: Props) => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const login = async () => {
    setError(null); // Reset error state
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setError(result.error);
      } else {
        console.log('User details:', result);
        router.push('/');
        // Optionally reset the form
        setEmail('');
        setPassword('');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className='flex flex-col bg-dark-1 justify-center items-center text-textColor py-24'>
      <div className={buttonStyle}>
        <Image
          src='/google.png'
          width={18}
          height={18}
          alt='Google logo'
          className='flex flex-col ml-2 mr-3'
        />
        <p className='font-medium'>Sign In With Google</p>
      </div>

      <div className='text-hrLineColor my-8'>or</div>

      <div className='flex flex-col gap-6 items-center'>
        <div className='flex flex-col gap-2'>
          <p className='flex'>Enter Username or Email ID</p>
          <input
            type='text'
            placeholder='Username or Email ID'
            className={placeholderStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='flex flex-col gap-2'>
          <p className='flex'>Enter Password</p>
          <input
            type='password'
            placeholder='Password'
            className={placeholderStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className='flex items-end justify-end font-extralight text-xs hover:text-strikeThroughPriceColor hover:cursor-pointer'>
            Forgot Password
          </p>
        </div>

        {error && (
          <div className='text-red-500 mt-4'>
            {error}
          </div>
        )}
      </div>

      <div className='flex flex-col gap-4 mt-16 items-center'>
        <div className={buttonStyle}>
          <button onClick={login}>Sign in</button>
        </div>

        <div className={buttonStyle}>
          <Link href='/sign-up' className='font-medium'>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
