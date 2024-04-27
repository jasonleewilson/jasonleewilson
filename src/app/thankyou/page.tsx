import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "jasonleewilson.com - about",
  description: "Super cool web engineer / developer",
};

export default function Thankyou() {
  return (
    <>
      <main className='flex-grow container-fluid px-4 lg:px-4 mt-16 md:mt-20'>
        <h1 className='text-4xl font-medium text-right mr-2 mb-4'>Thank you</h1>
        <hr className='border border-primary mb-4' />
        <p className='block'>I appreciate you submitting the contact form.</p>
      </main>
    </>
  );
}
