// "use client";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case studies - P.F. Chang's",
  description: "Super cool web engineer / developer",
};

export default function CaseStudiesPFC() {
  return (
    <>
      <main className='flex-grow container-fluid px-4 lg:px-4 bg-gray-100 dark:bg-black'>
        <h1 className='text-4xl font-medium text-right mb-4 uppercase'>
          Case Studies-PFC
        </h1>
        <hr className='border border-primary mb-8' />
        <div className='grid sm:grid-cols-1 sm:grid-rows-1 lg:grid-cols-3 lg:grid-rows-5 gap-4 w-full'>
          <div className='row-span-3 text-center'>
            <h1 className='text-2xl font-medium'>Client: P.F. Chang&apos;s</h1>
            <p className='mt-3 text-xl font-medium'>
              Site:{" "}
              <a href='https://www.pfchangs.com' target='_blank' rel='noopener'>
                pfchangs.com
              </a>
            </p>
            <p className='my-4'>
              <Link
                href='/case-studies/'
                className='bg-transparent hover:bg-primary text-white font-semibold hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded'
                aria-label='Go back to Case Studies'
              >
                Go back to Case Studies
              </Link>
            </p>
          </div>
          <div className='col-span-2 row-span-3'>
            <p>case studies PFC paragraph here</p>
          </div>
        </div>
      </main>
    </>
  );
}
