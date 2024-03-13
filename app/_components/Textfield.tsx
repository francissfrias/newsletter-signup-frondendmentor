import React, { ChangeEvent, forwardRef } from 'react';
import { roboto } from '../layout';

interface ITextfield extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  error?: boolean;
}

const Textfield = forwardRef<HTMLInputElement, ITextfield>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div
        className={`${roboto.className} flex flex-col m-auto space-y-2 w-full`}
      >
        <div className='flex justify-between'>
          <h1 className='text-xs font-bold text-neutralDarkSlateGrey '>
            {label}
          </h1>
          <h1 className='text-xs font-bold text-red-500 '>
            {error && 'Valid email required'}
          </h1>
        </div>
        <input
          className={`text-sm font-medium ring-1 ring-neutralGrey rounded-lg pt-2 pb-3 px-4  w-full  focus:outline-none focus:ring-1 focus:ring-neutralDarkSlateGrey ${
            error && 'ring-red-600 bg-red-100'
          }`}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

Textfield.displayName = 'Textfield';

export default Textfield;
