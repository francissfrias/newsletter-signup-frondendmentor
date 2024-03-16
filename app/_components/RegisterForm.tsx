'use client';
import React, { ChangeEventHandler, FormEvent, useState } from 'react';
import coverImageMobile from '@/public/assets/images/illustration-sign-up-mobile.svg';
import coverImageDesktop from '@/public/assets/images/illustration-sign-up-desktop.svg';
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
    <div className='h-screen overflow-auto md:bg-neutralCharcoalGrey md:flex md:items-center md:justify-center'>
      <div className='sm:hidden md:bg-neutralWhite md:w-[60vw] md:h-[60vh] md:relative md:overflow-hidden md:rounded-3xl md:flex md:flex-row  md:items-stretch md:gap-10 md:p-5'>
        <Image
          src={coverImageMobile}
          alt='Cover Image Mobile'
          priority
          width='0'
          height='0'
          sizes='100vw'
          className='block md:hidden w-full h-auto p-0 m-auto'
        />
        <div className='px-6 py-8 space-y-6 flex-1 '>
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
            className='transition ease-in-out delay-150 bg-neutralDarkSlateGrey p-4 h-full w-full md:h-fit text-neutralWhite rounded-lg font-bold spacing tracking-normal mt-6 hover:transition hover:ease-in-out hover:delay-150 hover:bg-gradient-to-r from-pink-600 to-primaryTomato active:bg-gradient-to-r from-pink-600 to-primaryTomato'
          >
            Subscribe to monthly newsletter
          </button>
        </div>
        <Image
          src={coverImageDesktop}
          alt='Cover Image Desktop'
          fill
          className='hidden md:flex md:flex-1 md:w-full'
        />
      </div>
    </div>
  );
};

export default RegisterForm;
