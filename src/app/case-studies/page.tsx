// "use client";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case studies",
  description: "Super cool web engineer / developer",
};

export default function CaseStudies() {
  return (
    <>
      <main className='flex-grow container-fluid px-4 lg:px-4 bg-gray-100 dark:bg-black'>
        <h1 className='text-4xl font-medium text-right mb-4 uppercase'>
          Case Studies
        </h1>
        <hr className='border border-primary mb-8' />
        <div className='w-full'>
          <div className=''>
            <div className='grid grid-cols-2 grid-rows-3 md:grid-rows-4 md:grid-cols-4 gap-2 md:gap-4 h-screen'>
              <Link
                className='bg-indigo-100 col-span-1 md:col-span-2'
                href='/case-studies/pfchangs'
                aria-label='view case study'
              >
                <div className="bg-[url('/images/project-pfchangs.jpg')] bg-no-repeat bg-cover bg-center h-full">
                  <span className='text-white'>
                    01 - <p>case studies paragraph here</p>
                    P.F. Chang&apos;s
                  </span>
                </div>
              </Link>
              <Link
                className='bg-fuchsia-100 col-span-1 md:col-span-2 row-span-1 md:row-span-2'
                href='/case-studies/pfchangs'
                aria-label='view case study'
              >
                <div className="bg-[url('/images/project-pfchangs.jpg')] bg-no-repeat bg-cover bg-center h-full">
                  <span className='text-white'>02</span>
                </div>
              </Link>
              <div className='bg-purple-100 col-span-1 md:col-span-2'>
                <span>03</span>
              </div>
              <div className='bg-violet-100'>
                <span>04</span>
              </div>
              <div className='bg-sky-100'>
                <span>05</span>
              </div>
              <div className='bg-emerald-100 col-span-1 md:col-span-2'>
                <span>06{/* 06 - <Icons /> */}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
