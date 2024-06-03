import type { Metadata } from "next";
import Link from "next/link";
// import Image from "next/image";
// import profilePic from "../images/photo-1053x700.jpeg";

import Portfolioinput from "../components/Portfolioinput";
import Card from "../components/Card";

import { FaLink, FaGithub } from "react-icons/fa";

export const metadata: Metadata = {
  title: "work",
  description: "Super cool web engineer / developer",
};

export default function Work() {
  const portfolioItems = [
    {
      id: 0,
      name: "P.F. Chang's",
      description: "Portfolio 1 - description",
      imageUrl: "/images/project-pfchangs.jpg",
      siteUrl: "https://www.pfchangs.com",
      repoUrl: "#",
      displayNone: "hidden",
    },
    {
      id: 1,
      name: "Luckycat",
      description: "Portfolio 2 - description",
      imageUrl: "/images/project-luckycatfund.jpg",
      siteUrl: "https://luckycatfund.com",
      repoUrl: "#",
      displayNone: "hidden",
    },
    {
      id: 2,
      name: "Lunar New Year",
      description: "Portfolio 3 - description",
      imageUrl: "/images/project-lunar-new-year.jpg",
      siteUrl: "http://lunarnewyear.com",
      repoUrl: "#",
      displayNone: "hidden",
    },
    {
      id: 3,
      name: "Pagoda Asian Grill",
      description: "Portfolio 4 - description",
      imageUrl: "/images/pagoda-asian-grill.jpg",
      siteUrl: "https://www.pagodaasiangrill.com",
      repoUrl: "#",
      displayNone: "hidden",
    },
    // {
    //   id: 4,
    //   name: "EPTex",
    //   description: "Portfolio 5 - description",
    //   imageUrl: "/images/project-eptexas.jpg",
    //   siteUrl: "https://eptexas.com",
    //   repoUrl: "#",
    //   displayNone: "hidden",
    // },
    {
      id: 4,
      name: "P.F. Chang's - Global",
      description: "Portfolio 6 - description",
      imageUrl: "/images/project-pfchangs-gbd.jpg",
      siteUrl: "https://www.pfchangs.com/global",
      repoUrl: "#",
      displayNone: "hidden",
    },
    {
      id: 5,
      name: "Bitcoin Current Price",
      description: "Portfolio 7 - description",
      imageUrl: "/images/project-bitcoin-current-price.jpg",
      siteUrl: "https://bitcoin-current-price.com",
      repoUrl: "https://github.com/jasonleewilson/bitcoin-current-price",
      displayNone: "",
    },
    {
      id: 6,
      name: "Current Price",
      description: "Portfolio 8 - description",
      imageUrl: "/images/project-current-price.jpg",
      siteUrl: "https://www.current-price.com",
      repoUrl: "https://github.com/jasonleewilson/current-price",
      displayNone: "",
    },
    {
      id: 7,
      name: "Hello World Pro",
      description: "Portfolio 9 - description",
      imageUrl: "/images/project-helloworldpro.jpg",
      siteUrl: "https://www.helloworldpro.com",
      repoUrl: "https://github.com/jasonleewilson/helloworldpro",
      displayNone: "",
    },
    {
      id: 8,
      name: "Jason Lee Wilson - Github.io",
      description: "Portfolio 10 - description",
      imageUrl: "/images/project-github-jasonleewilson.jpg",
      siteUrl: "https://jasonleewilson.github.io",
      repoUrl: "https://github.com/jasonleewilson/jasonleewilson.github.io",
      displayNone: "",
    },
    {
      id: 9,
      name: "Jason Lee Wilson - This website",
      description: "Portfolio 10 - description",
      imageUrl: "/images/project-jasonleewilson.jpg",
      siteUrl: "https://jasonleewilson.com",
      repoUrl: "https://github.com/jasonleewilson/",
      displayNone: "",
    },
  ];
  return (
    <main className='flex-grow container-fluid px-4 lg:px-4 bg-gray-100 dark:bg-black'>
      <div>
        <h1 className='text-4xl font-medium text-right mb-4 uppercase'>Work</h1>
        <hr className='border border-primary mb-4' />
        <div className='grid sm:grid-cols-1 sm:grid-rows-1 md:grid-cols-2 md:grid-rows-2 gap-4'>
          {portfolioItems.map((portfolioItem) => (
            <Card
              key={"${portfolioItem.name}-${portfolioItem.id}"}
              {...portfolioItem}
            />
          ))}
        </div>
      </div>
      <section className='w-full lg:w-1/3 mx-auto py-6'>
        <div className='container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between'>
          <h1 className='text-3xl text-center lg:text-left'>View my skills</h1>

          <Link
            href='/skills'
            className='px-8 py-3 text-lg rounded dark:bg-primary dark:text-gray-50'
          >
            Skills
          </Link>
        </div>
      </section>
    </main>
  );
}
