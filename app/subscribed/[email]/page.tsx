import { Metadata } from 'next';
import React from 'react';
import SubscribeForm from '../../_components/SubscribedForm';

export async function generateStaticParams() {
  return [{ email: 'test@gmail.com' }];
}
export const metadata: Metadata = {
  title: 'Newsletter Subscribed!',
  description: 'Newsletter Sign Up Challenge',
};

interface PageProps {
  params: {
    email: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}
const SubscribePage = ({ params, searchParams }: PageProps) => {
  const email = decodeURIComponent(params.email);

  return (
    <>
      <SubscribeForm email={email} />
    </>
  );
};

export default SubscribePage;
