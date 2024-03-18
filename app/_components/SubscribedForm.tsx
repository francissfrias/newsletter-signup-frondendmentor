'use client';

import React, { useState } from 'react';
import checkImageLarge from '@/public/assets/images/icon-success.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface PageProps {
  email: string;
}

const SubscribeForm = ({ email }: PageProps) => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push('/');
    router.refresh();
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className='h-screen overflow-auto md:bg-neutralCharcoalGrey md:flex md:items-center md:justify-center'>
      <div className=' md:bg-neutralWhite  md:w-[40dvw]  rounded-3xl flex flex-col  px-8 py-16 h-full justify-between md:h-auto '>
        <div className='flex-1 flex flex-col items-stretch space-y-8 justify-center'>
          <Image src={checkImageLarge} alt='Success Image' priority />
          <h1 className='text-4xl text-neutralDarkSlateGrey font-bold md:text-5xl text-pretty'>
            Thanks for subscribing!
          </h1>
          <h5 className='text-neutralDarkSlateGrey text-pretty'>
            A confirmation email has been sent to
            <span className='font-bold'> {email}</span>. Please open it and lick
            the button inside to confirm your subscription.
          </h5>
        </div>

        <button
          onClick={handleSubmit}
          className='group relative transition duration-500  bg-neutralDarkSlateGrey p-4 h-fit w-full md:h-14 text-neutralWhite rounded-lg font-bold spacing tracking-normal sm:text-base md:p-2 md:text-sm xl:text-base  mt-6 hover:shadow-2xl'
        >
          Subscribe to monthly newsletter
          <div className=' flex-1 p-4 md:h-14   font-bold spacing tracking-normal  opacity-0 hover:opacity-100 transition duration-500 absolute  rounded-lg inset-0 h-full w-full bg-gradient-to-r from-pink-600 to-primaryTomato text-neutralWhite '>
            Subscribe to monthly newsletter
          </div>
        </button>
      </div>
    </div>
  );
};

export default SubscribeForm;
