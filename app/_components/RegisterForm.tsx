'use client';
import React, { ChangeEventHandler, FormEvent, useState } from 'react';
import coverImage from '@/public/assets/images/illustration-sign-up-mobile.svg';
import Image from 'next/image';
import Descriptions from './Descriptions';
import Textfield from './Textfield';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
  const [email, setEmail] = useState('test');
  const [error, setError] = useState(false);
  const router = useRouter();

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setError(false);
  };

  const handleSubmit = () => {
    // Regular expression for email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      setError(true);
      return;
    }
    router.push('/subscribed');
    router.refresh();
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className='h-screen overflow-auto'>
      <Image
        src={coverImage}
        alt='Cover Image'
        priority
        width='0'
        height='0'
        sizes='100vw'
        className='md:hidden sm:block w-full h-auto p-0 m-auto'
      />
      <div className='px-6 py-8 space-y-6 '>
        <h1 className='text-4xl text-neutralDarkSlateGrey font-bold'>
          Stay updated!
        </h1>
        <h5 className='text-neutralDarkSlateGrey'>
          Join 60,000+ product managers receiving monthly updates on:
        </h5>
        <div className='flex flex-col space-y-[-5px]'>
          <Descriptions description='Product discovery and building what matters' />
          <Descriptions description='Measuring to ensure updates are a success' />
          <Descriptions description='And much more!' />
        </div>
        <Textfield
          label='Email address'
          placeholder='email@company.com'
          error={error}
          onChange={emailChangeHandler}
          onKeyDown={handleKeyPress}
        />
        <button
          onClick={handleSubmit}
          className='bg-neutralDarkSlateGrey p-4 h-full w-full text-neutralWhite rounded-lg font-bold spacing tracking-normal mt-6 hover:bg-gradient-to-r from-pink-600 to-primaryTomato active:bg-gradient-to-r from-pink-600 to-primaryTomato'
        >
          Subscribe to monthly newsletter
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
