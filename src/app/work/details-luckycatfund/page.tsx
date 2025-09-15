import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import {
  // SiTailwindcss,
  SiHtml5,
  // SiSass,
  SiCss3,
  SiJavascript,
  // SiReact,
  // SiFigma,
  // SiNextdotjs,
  // SiNetlify,
  // SiGithub,
  // SiCloudflare,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export const metadata: Metadata = {
  title: "details-luckycatfund",
  description: "Super cool web engineer / developer",
};

export default function detailsLuckycatfund() {
  return (
    <>
      
        <h1 className='text-4xl font-medium text-right mt-4 mb-4 uppercase'>
          details-luckycatfund
        </h1>
        <hr className='border border-primary mb-4' />

        <section>
          <div className='text-gray-800 dark:text-white font-sans'>
            <div className='mx-auto p-0 grid gap-6'>
              {/* <!-- Header Section --> */}
              <div className='grid md:grid-cols-3 gap-4 place-items-start'>
                <div className='md:col-span-1 md:sticky top-24'>
                  <p className='text-sm text-gray-500'>Client</p>

                  <h1 className='text-3xl font-bold'>Lucky Cat Fund</h1>

                  <p className='mt-1 text-sm text-gray-500'>Year: 2023</p>
                  <p className='mt-4'>
                    website:{" "}
                    <Link
                      href='https://luckycatfund.com/'
                      aria-label='view my work'
                      target='_blank'
                    >
                      luckycatfund.com
                    </Link>
                  </p>

                  {/* <!-- Description Copy --> */}
                  <div className='py-4 space-y-1'>
                    <h2 className='text-2xl font-bold'>Details</h2>

                    <p>
                      Designed, coded, tested, and deployed a donation platform
                      to support charitable causes and assist those in need.
                    </p>
                  </div>

                  {/* Tools used */}
                  <div>
                    <h2 className='py-1 font-bold text-sm text-gray-600'>
                      Tools Used
                    </h2>
                    <ul className='list-disc list-inside text-sm text-gray-700'>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>jQuery</li>
                      <li>Adobe XD</li>
                    </ul>

                    {/* icons */}
                    <div className='icons py-4 flex justify-start'>
                      <div className='has-tooltip'>
                        <span className='tooltip rounded shadow-lg p-1 bg-gray-100 text-primary -mt-8'>
                          html5
                        </span>
                        <SiHtml5 className='html5' title='html5' />
                      </div>
                      <div className='has-tooltip'>
                        <span className='tooltip rounded shadow-lg p-1 bg-gray-100 text-primary -mt-8'>
                          css3
                        </span>
                        <SiCss3 className='css3' title='css3' />
                      </div>
                      <div className='has-tooltip'>
                        <span className='tooltip rounded shadow-lg p-1 bg-gray-100 text-primary -mt-8'>
                          js
                        </span>
                        <SiJavascript className='js' title='js' />
                      </div>
                      {/* <div className='has-tooltip'>
                                      <span className='tooltip rounded shadow-lg p-1 bg-gray-100 text-primary -mt-8'>
                                        sass
                                      </span>
                                      <SiSass className='sass' title='sass' />
                                    </div> */}

                      <div className='has-tooltip'>
                        <span className='tooltip rounded shadow-lg p-1 bg-gray-100 text-primary -mt-8'>
                          vscode
                        </span>
                        <VscVscode className='text-blue-500' title='figma' />
                      </div>
                    </div>

                    {/* return to work */}
                    <Link
                      href='/work/'
                      aria-label='view my work'
                      target='_self'
                      className='underline text-red-600'
                    >
                      Return to work
                    </Link>
                  </div>
                </div>
                <div className='md:col-span-2'>
                  {/* <!-- Hero Image --> */}
                  <div className='w-full'>
                    <Image
                      src='/images/details/luckycatfund/Screen-Shot-1.jpg'
                      alt=''
                      // fill={true}
                      className='w-full rounded-lg shadow-md'
                      width={700}
                      height={400}
                      // sizes='800 400 100vw'
                      priority={true}
                      // style={{
                      //   objectFit: "cover",
                      // }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

    </>
  );
}
