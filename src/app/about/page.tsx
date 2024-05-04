import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
// import profilePic from "/src/app/images/photo-1053x700.jpeg";

export const metadata: Metadata = {
  title: "about",
  description: "Super cool web engineer / developer",
};

export default function About() {
  return (
    <>
      <main className='flex-grow container-fluid px-4 lg:px-4 mt-16 md:mt-20'>
        <h1 className='text-4xl font-medium text-right mb-4 uppercase'>
          about
        </h1>
        <hr className='border border-primary mb-4' />
        <div className='grid sm:grid-cols-1 sm:grid-rows-1 lg:grid-cols-3 gap-4 w-full'>
          <div className='col-span-2 md:col-span-1 text-center'>
            <Image
              src='./images/profile-jasonleewilson.jpg'
              alt='profile'
              width='0'
              height='0'
              sizes='100vw'
              className='inline-block w-40 h-40 rounded-full'
              priority={true}
            />
            <h1 className='text-2xl font-medium'>jasonleewilson</h1>

            <p className='mt-3'>
              Linkedin:{" "}
              <a
                href='https://www.linkedin.com/in/jasonleewilson/'
                target='_blank'
                rel='noopener noreferrer'
              >
                in/jasonleewilson
              </a>
              <br />
              GitHub:{" "}
              <a
                href='https://github.com/jasonleewilson'
                target='_blank'
                rel='noopener noreferrer'
              >
                @jasonleewilson
              </a>
              <br />
              CodePen{" "}
              <a
                href='https://codepen.io/jasonleewilson'
                target='_blank'
                rel='noopener noreferrer'
              >
                @jasonleewilson
              </a>
              <br />
              Pinterest{" "}
              <a
                href='https://www.pinterest.com/jasonleewilson/_saved/'
                target='_blank'
                rel='noopener noreferrer'
              >
                @jasonleewilson
              </a>
              <br />X{" "}
              <a
                href='https://twitter.com/jasonleewilson'
                target='_blank'
                rel='noopener noreferrer'
              >
                @jasonleewilson
              </a>
              <br />
              Email:{" "}
              <a href='mailto:info@jasonleewilson.com'>
                info@jasonleewilson.com
              </a>
            </p>
          </div>
          <div className='col-span-2 row-span-3'>
            <section className='text-gray-800'>
              <div className='container flex flex-col justify-center mx-auto text-2xl'>
                <p className='p-2'>
                  I&rsquo;m Jason Lee Wilson, a seasoned Front-End Developer and
                  Web Designer with 25 years of industry experience. Born and
                  raised in Texas, I currently reside just North of Dallas. My
                  journey began at the age of 4 with the Commodore 64, and
                  continued with a Bachelor&rsquo;s degree in Game Design from
                  Collins College, setting the stage for a dynamic career
                  trajectory.
                </p>

                <p className='p-2'>
                  Throughout my tenure, I&rsquo;ve had the privilege of
                  collaborating with an array of esteemed clients, ranging from
                  corporate giants like IBM and Microsoft to renowned brands
                  such as P.F. Chang&rsquo;s, Microchip, and Kellogg&rsquo;s.
                  From crafting captivating visuals for websites to delving into
                  intricate web development applications, my role encompasses a
                  spectrum of responsibilities aimed at delivering exceptional
                  online experiences.
                </p>

                <blockquote className='my-12 text-4xl font-bold leading-none text-center sm:text-5xl uppercase'>
                  &quot;The word&lsquo;s &quot;
                  <span className='text-primary line-through'>CAN&lsquo;T</span>
                  &quot;&nbsp;or&nbsp;&quot;
                  <span className='text-primary line-through'>TRY</span>
                  &quot;&nbsp;are NOT in my vocabulary.&quot;
                </blockquote>

                <div className='pb-12 mx-auto items-center text-center'>
                  <Link
                    className='rounded bg-primary px-12 py-3 text-sm uppercase font-normal text-white shadow hover:bg-primary focus:outline-none focus:ring active:bg-primary sm:w-auto'
                    href='/work'
                  >
                    View my work
                  </Link>
                </div>

                <p className='p-2'>
                  Driven by a profound passion for code, I continually strive to
                  infuse future technology / code into every project I
                  undertake. My skill set spans across graphic design, web
                  design, and web development, offering clients a comprehensive
                  suite of services tailored to their unique needs.
                </p>

                <p className='p-2'>
                  Whether it&rsquo;s conceptualizing visually striking websites
                  or ensuring seamless functionality across diverse platforms, I
                  approach each task with dedication and finesse. In
                  today&rsquo;s fast-paced digital landscape, I pride myself on
                  delivering holistic solutions that transcend expectations.
                </p>

                <p className='p-2'>
                  With an unwavering commitment to excellence, I stand ready to
                  bring your digital vision to life.
                </p>

                <p className='p-2'>
                  Are you ready to propel your online presence to unprecedented
                  heights? Look no further than a seasoned web developer with
                  over two decades of unparalleled experience. With a proven
                  track record of crafting visually stunning and highly
                  functional websites, I bring a wealth of knowledge and
                  innovation to every project. From sleek designs that captivate
                  audiences to robust backend solutions that ensure seamless
                  functionality, my expertise covers every aspect of web
                  development. With my extensive industry experience, your
                  website will not only stand out but also drive conversions and
                  propel your business forward. Let&rsquo;s collaborate to bring
                  your vision to life and create an online experience that
                  exceeds expectations.
                </p>

                <p className='p-2'>Warm regards, Jason Lee Wilson</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
