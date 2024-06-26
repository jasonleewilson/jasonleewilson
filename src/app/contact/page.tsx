// "use client";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "contact",
  description: "Super cool web engineer / developer",
};

export default function Contact() {
  return (
    <>
      <main className='flex-grow container-fluid px-4 lg:px-4 bg-gray-100 dark:bg-black'>
        <h1 className='text-4xl font-medium text-right mb-4 uppercase'>
          Contact
        </h1>
        <hr className='border border-primary mb-8' />
        <div className='grid sm:grid-cols-1 sm:grid-rows-1 lg:grid-cols-3 lg:grid-rows-5 gap-4 w-full'>
          <div className='row-span-3 text-center'>
            <h1 className='text-2xl font-medium'>jasonleewilson</h1>
            <p className='mt-3'>
              Email:{" "}
              <a href='mailto:info@jasonleewilson.com'>
                info@jasonleewilson.com
              </a>
            </p>
          </div>
          <div className='col-span-2 row-span-3'>
            <form
              name='contactjasonleewilson'
              method='POST'
              action='/thankyou'
              className='mt-10'
              netlify-honeypot='bot-field'
              data-netlify='true'
            >
              <input
                type='hidden'
                name='form-name'
                value='contactjasonleewilson'
              />

              <p className='hidden'>
                <label>
                  Don&lsquo;t fill this out if you&lsquo;re human:{" "}
                  <input name='bot-field' />
                </label>
              </p>

              <div className='grid gap-6 sm:grid-cols-2'>
                <div className='relative z-0'>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    aria-label='name'
                    className='peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 dark:text-white focus:border-primary focus:outline-none focus:ring-0'
                    placeholder=' '
                    required
                  />
                  <label
                    htmlFor='email'
                    className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 dark:text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:dark:text-primary'
                  >
                    Your name
                  </label>
                </div>
                <div className='relative z-0'>
                  <input
                    type='text'
                    name='email'
                    id='email'
                    aria-label='email'
                    className='peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 dark:text-white focus:border-primary focus:outline-none focus:ring-0'
                    placeholder=' '
                    required
                  />
                  <label
                    htmlFor='email'
                    className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 dark:text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:dark:text-primary'
                  >
                    Your email
                  </label>
                </div>
                <div className='relative z-0 col-span-2'>
                  <textarea
                    name='message'
                    id='message'
                    aria-label='message'
                    className='peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 dark:text-white focus:border-primary focus:outline-none focus:ring-0'
                    placeholder=' '
                    required
                  ></textarea>
                  <label
                    htmlFor='message'
                    className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 dark:text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:dark:text-primary'
                  >
                    Your message
                  </label>
                </div>
              </div>
              <button
                type='submit'
                className='mt-5 rounded-md bg-primary px-10 py-2 text-white dark:text-white'
                value='Submit Message'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
