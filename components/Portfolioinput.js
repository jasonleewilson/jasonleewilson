import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { FaLink } from "react-icons/fa";

const Portfolioinput = ({
  title,
  description,
  Websitelink,
  Repolink,
  Myimage,
}) => {
  return (
    <div className='col-lg-6 col-md-12 col-sm-12 mb-4'>
      <Head>
        <title>Work-jasonleewilson.com</title>
        <meta
          name='description'
          content='I offer a complete solution ranging from website creation, design and maintenance for internet-based clients worldwide. By Jason Wilson. Founder. Jason Lee Wilson'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='card h-100'>
        <a href={Websitelink} target='_blank' rel='noopener noreferrer'>
          <Image
            className='card-img-top'
            src={Myimage}
            alt='web portfolio image'
            width={700}
            height={400}
          />
        </a>
        <div className='card-body'>
          <h4 className='card-title'>{title}</h4>
          {description}
          <a href={Websitelink} target='_blank' rel='noopener noreferrer'>
            <FaLink /> {Websitelink}
          </a>
          <br />
          {Repolink}
        </div>
      </div>

      {/* /.row */}
    </div>
  );
};

export default Portfolioinput;
