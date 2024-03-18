import React from 'react';
import checkIcon from '@/public/assets/images/icon-list.svg';
import Image from 'next/image';

type Props = {
  description: string;
};

const Descriptions = (props: Props) => {
  return (
    <div className={`flex space-x-4 items-start justify-start py-2 w-full`}>
      <Image src={checkIcon} alt='Check Icon' />
      <p className='text-neutralDarkSlateGrey '>{props.description}</p>
    </div>
  );
};

export default Descriptions;
