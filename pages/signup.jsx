import Link from 'next/link';
import Form from '../components/SignupForm';

function SignpPage() {
  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          {/* 
          Company Logo:-
          <img
            className="mx-auto h-12 w-auto"
            src=""
            alt="Your Company"
          /> */}
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900  dark:text-[white]">
            Sign  up
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-[#286bb8] ">
            Or{' '}
            <Link
              href={'/login'}
              className="font-medium text-[#286bb8] hover:text-[#286bb8] dark:text-[white]"
            >
              Login to your account
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <Form />
        </div>
      </div>
    </>
  );
}

export default SignpPage;
