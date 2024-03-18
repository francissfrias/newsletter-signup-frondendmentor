import { Metadata } from 'next';
import RegisterForm from './_components/RegisterForm';

export const metadata: Metadata = {
  title: 'Newsletter Sign Up',
  description: 'Newsletter Sign Up Challenge',
};

const Homepage = () => {
  return (
    <>
      <RegisterForm />
    </>
  );
};

export default Homepage;
