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
      <div className=' md:bg-neutralWhite md:w-[55dvw] md:rounded-3xl md:flex md:flex-row md:justify-center md:items-stretch md:p-5'>
        <Image
          src={coverImageMobile}
          alt='Cover Image Mobile'
          priority
          width='0'
          height='0'
          sizes='100vw'
          className='block md:hidden w-full h-auto p-0 m-auto'
        />
        <div className='px-6 py-8 space-y-6 flex-1 flex flex-col items-start justify-center md:py-16 md:px-12 '>
          <h1 className='text-4xl text-neutralDarkSlateGrey font-bold md:text-5xl'>
            Stay updated!
          </h1>
          <h5 className='text-neutralDarkSlateGrey text-pretty'>
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
            className='group relative transition duration-500  bg-neutralDarkSlateGrey p-4 h-fit w-full md:h-14 text-neutralWhite rounded-lg font-bold spacing tracking-normal sm:text-base md:p-2 md:text-sm xl:text-base  mt-6 hover:shadow-2xl'
          >
            Subscribe to monthly newsletter
            <div className=' p-4 md:h-14   font-bold spacing tracking-normal  opacity-0 hover:opacity-100 transition duration-500 absolute  rounded-lg inset-0 h-full w-full bg-gradient-to-r from-pink-600 to-primaryTomato text-neutralWhite '>
              Subscribe to monthly newsletter
            </div>
          </button>
        </div>
        <div className='hidden md:relative md:flex md:flex-1 '>
          <Image
            src={coverImageDesktop}
            alt='Cover Image Desktop'
            fill
            className='md:w-full md:object-cover'
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
