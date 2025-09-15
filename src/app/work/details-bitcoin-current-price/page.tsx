import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import {
  SiTailwindcss,
  SiHtml5,
  SiSass,
  SiCss3,
  SiJavascript,
  SiReact,
  SiFigma,
  SiAstro,
  // SiNextdotjs,
  // SiNetlify,
  SiGithub,
  SiCloudflare,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export const metadata: Metadata = {
  title: "details-bitcoin-current-price",
  description: "Super cool web engineer / developer",
};

export default function detailsbitcoincurrentprice() {
  return (
    <>
      
        <h1 className='text-4xl font-medium text-right mt-4 mb-4 uppercase'>
          details-bitcoin-current-price
        </h1>
        <hr className='border border-primary mb-4' />

        <section>
          <div className='text-gray-800 dark:text-white font-sans'>
            <div className='mx-auto p-0 grid gap-6'>
              {/* <!-- Header Section --> */}
              <div className='grid md:grid-cols-3 gap-4 place-items-start'>
                <div className='md:col-span-1 md:sticky top-24'>
                  <p className='text-sm text-gray-500'>Client</p>

                  <h1 className='text-3xl font-bold'>Bitcoin Current Price</h1>

                  <p className='mt-1 text-sm text-gray-500'>2020-2025</p>

                  <p className='mt-4'>
                    website:{" "}
                    <Link
                      href='https://bitcoin-current-price.com/'
                      aria-label='view my work'
                      target='_blank'
                    >
                      bitcoin-current-price.com
                    </Link>
                  </p>

                  {/* <!-- Description Copy --> */}
                  <div className='py-4 space-y-1'>
                    <h2 className='text-2xl font-bold'>Details</h2>

                    <p>
                      Full site development: coding, design, hosting, DNS setup,
                      testing, and deployment across all devices and
                      environments. Fast page load speeds.
                    </p>
                  </div>

                  {/* Tools used */}
                  <div>
                    <h2 className='py-1 font-bold text-sm text-gray-600'>
                      Tools Used
                    </h2>
                    <ul className='list-disc list-inside text-sm text-gray-700'>
                      <li>HTML</li>
                      <li>Tailwind CSS</li>
                      <li>JavaScript</li>
                      <li>Astro</li>
                      <li>React.js</li>
                      <li>Cloudflare</li>
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
                          tailwindcss
                        </span>
                        <SiTailwindcss
                          className='tailwindcss'
                          title='tailwindcss'
                        />
                      </div>
                      <div className='has-tooltip'>
                        <span className='tooltip rounded shadow-lg p-1 bg-gray-100 text-primary -mt-8'>
                          react
                        </span>
                        <SiReact className='tailwindcss' title='react' />
                      </div>
                      <div className='has-tooltip'>
                        <span className='tooltip rounded shadow-lg p-1 bg-gray-100 text-primary -mt-8'>
                          SiAstro
                        </span>
                        <SiAstro title='astro' />
                      </div>
                      <div className='has-tooltip'>
                        <span className='tooltip rounded shadow-lg p-1 bg-gray-100 text-primary -mt-8'>
                          cloudflare
                        </span>
                        <SiCloudflare
                          className='text-orange-400'
                          title='cloudflare'
                        />
                      </div>
                      <div className='has-tooltip'>
                        <span className='tooltip rounded shadow-lg p-1 bg-gray-100 text-primary -mt-8'>
                          figma
                        </span>
                        <SiFigma className='text-purple-400' title='figma' />
                      </div>
                      <div className='has-tooltip'>
                        <span className='tooltip rounded shadow-lg p-1 bg-gray-100 text-primary -mt-8'>
                          vscode
                        </span>
                        <VscVscode className='text-blue-500' title='figma' />
                      </div>
                      <div className='has-tooltip'>
                        <span className='tooltip rounded shadow-lg p-1 bg-gray-100 text-primary -mt-8'>
                          github
                        </span>
                        <SiGithub className='text-black' title='github' />
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
                      src='/images/details/bitcoin-current-price/Screen-Shot-1.jpg'
                      alt=''
                      className='w-full mb-4 rounded-lg shadow-md'
                      width={800}
                      height={1200}
                      priority={true}
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
