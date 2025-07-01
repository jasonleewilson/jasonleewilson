import type { Metadata } from "next";
import Link from "next/link";
import { preload } from "react-dom";
import Icons from "./components/Icons";
import HeroText from "./components/HeroText";
import Bug from "./components/Bug";
// import Image from "next/image";

export const metadata: Metadata = {
  title: "jasonleewilson.com - Super cool web engineer / developer in Texas",
  description:
    "Super cool web engineer / developer. I offer a complete solution ranging from website creation, design and maintenance for internet-based clients worldwide.",
};

import { RiArrowRightUpLine } from "react-icons/ri";

export default function Home() {
  {
    /* ALTERNATIVE TO <link rel="preload" fetchpriority="high" as="image" href="/images/me-close.webp" type="image/webp" /> */
  }
  const background = "/images/me-close.webp";
  preload(background, { as: "image", fetchPriority: "high" });

  return (
    <main className='flex-grow container-fluid mt-20 bg-gray-100 dark:bg-black'>
      <section className="grid h-full place-items-center md:bg-[url('/images/me-close.webp')] bg-no-repeat  bg-contain bg-right-bottom">
        <div className='mx-auto max-w-screen-xl px-2'>
          <div className='mx-auto max-w-xl text-center'>
            <HeroText />

            <div className='mt-8 flex flex-wrap justify-center gap-4'>
              <Link
                className='block w-full rounded bg-primary hover:bg-transparent hover:text-primary hover:outline hover:outline-2 hover:outline-primary px-12 py-3 text-xl md:text-sm uppercase font-normal text-white focus:outline-none focus:ring active:bg-primary sm:w-auto'
                href='/work'
              >
                View my work{" "}
                <RiArrowRightUpLine
                  className='inline'
                  aria-label='arrow goto page'
                  tabIndex={0}
                />
              </Link>

              <Link
                className='block w-full rounded px-12 py-3 text-xl md:text-sm uppercase font-normal text-primary outline outline-2 outline-primary hover:text-primary focus:outline-2 focus:ring active:text-primary sm:w-auto'
                href='/about'
              >
                About me{" "}
                <RiArrowRightUpLine
                  className='inline'
                  aria-label='arrow goto page'
                  tabIndex={0}
                />
              </Link>
            </div>
            <Icons />
          </div>
        </div>
      </section>
    </main>
  );
}
