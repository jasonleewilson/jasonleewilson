import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "/components/navbar";
import Footer from "/components/footer";
import styles from "../styles/Work.module.scss";

import { FaLink } from "react-icons/fa";

export default function Work() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Work-jasonleewilson.com</title>
        <meta
          name='description'
          content='I offer a complete solution ranging from website creation, design and maintenance for internet-based clients worldwide. By Jason Wilson. Founder. Jason Lee Wilson'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='container'>
        <div className='grid-home'>
          <div>
            {/* Page Heading */}
            <h1 className='my-4'>Work</h1>
          </div>

          {/* Page Content */}

          <div className='row'>
            <div className='col-lg-6 col-md-12 col-sm-12 mb-4'>
              <div className='card h-100'>
                <a
                  href='https://www.pfchangs.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image
                    className='card-img-top'
                    src={require("../src/images/project-pfchangs.jpg")}
                    alt=''
                    width={700}
                    height={400}
                  />
                </a>
                <div className='card-body'>
                  <h4 className='card-title'>
                    <a
                      href='https://www.pfchangs.com'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      P.F. Changs
                    </a>
                  </h4>
                  {/* <p className='card-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    viverra euismod odio, gravida pellentesque urna varius
                    vitae.
                  </p> */}

                  <a
                    href='https://www.pfchangs.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    pfchangs.com <FaLink />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12 mb-4'>
              <div className='card h-100'>
                <a
                  href='http://lunarnewyear.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image
                    className='card-img-top'
                    src={require("../src/images/project-lunar-new-year.jpg")}
                    alt=''
                    width={700}
                    height={400}
                  />
                </a>
                <div className='card-body'>
                  <h4 className='card-title'>
                    <a
                      href='http://lunarnewyear.com'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Lunar New Year
                    </a>
                  </h4>
                  {/* <p className='card-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    viverra euismod odio, gravida pellentesque urna varius
                    vitae.
                  </p> */}

                  <a
                    href='http://lunarnewyear.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    lunarnewyear.com <FaLink />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12 mb-4'>
              <div className='card h-100'>
                <a
                  href='https://www.pagodaasiangrill.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image
                    className='card-img-top'
                    src={require("../src/images/pagoda-asian-grill.jpg")}
                    alt=''
                    width={700}
                    height={400}
                  />
                </a>
                <div className='card-body'>
                  <h4 className='card-title'>
                    <a
                      href='https://www.pagodaasiangrill.com'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Pagoda Asian Grill
                    </a>
                  </h4>
                  {/* <p className='card-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    viverra euismod odio, gravida pellentesque urna varius
                    vitae.
                  </p> */}
                  <a
                    href='https://www.pagodaasiangrill.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    pagodaasiangrill.com <FaLink />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12 mb-4'>
              <div className='card h-100'>
                <a
                  href='https://eptexas.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image
                    className='card-img-top'
                    src={require("../src/images/project-eptexas.jpg")}
                    alt=''
                    width={700}
                    height={400}
                  />
                </a>
                <div className='card-body'>
                  <h4 className='card-title'>
                    <a
                      href='https://eptexas.com'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      EPTex
                    </a>
                  </h4>
                  {/* <p className='card-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    viverra euismod odio, gravida pellentesque urna varius
                    vitae.
                  </p> */}
                  <a
                    href='https://eptexas.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    eptexas.com <FaLink />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12 mb-4'>
              <div className='card h-100'>
                <a
                  href='https://bitcoin-current-price.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image
                    className='card-img-top'
                    src={require("../src/images/project-bitcoin-current-price.jpg")}
                    alt=''
                    width={700}
                    height={400}
                  />
                </a>
                <div className='card-body'>
                  <h4 className='card-title'>
                    <a
                      href='https://bitcoin-current-price.com'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Bitcoin Current Price
                    </a>
                  </h4>
                  {/* <p className='card-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    viverra euismod odio, gravida pellentesque urna varius
                    vitae.
                  </p> */}
                  <a
                    href='https://bitcoin-current-price.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    bitcoin-current-price.com <FaLink />
                  </a>
                  <a
                    href='https://github.com/jasonleewilson/bitcoin-current-price'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    &nbsp;|&nbsp;repo <FaLink />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12 mb-4'>
              <div className='card h-100'>
                <a
                  href='https://www.current-price.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image
                    className='card-img-top'
                    src={require("../src/images/project-current-price.jpg")}
                    alt=''
                    width={700}
                    height={400}
                  />
                </a>
                <div className='card-body'>
                  <h4 className='card-title'>
                    <a
                      href='https://www.current-price.com'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Current Price
                    </a>
                  </h4>
                  {/* <p className='card-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    viverra euismod odio, gravida pellentesque urna varius
                    vitae.
                  </p> */}
                  <a
                    href='https://www.current-price.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    current-price.com <FaLink />
                  </a>
                  <a
                    href='https://github.com/jasonleewilson/current-price.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    &nbsp;|&nbsp;repo <FaLink />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12 mb-4'>
              <div className='card h-100'>
                <a
                  href='https://luckycatfund.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image
                    className='card-img-top'
                    src={require("../src/images/project-lucky-cat.jpg")}
                    alt=''
                    width={700}
                    height={400}
                  />
                </a>
                <div className='card-body'>
                  <h4 className='card-title'>
                    <a
                      href='https://luckycatfund.com'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Luckycat
                    </a>
                  </h4>
                  {/* <p className='card-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    viverra euismod odio, gravida pellentesque urna varius
                    vitae.
                  </p> */}
                  <a
                    href='https://luckycatfund.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    luckycatfund.com <FaLink />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12 mb-4'>
              <div className='card h-100'>
                <a
                  href='https://www.helloworldpro.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image
                    className='card-img-top'
                    src={require("../src/images/project-helloworldpro.jpg")}
                    alt=''
                    width={700}
                    height={400}
                  />
                </a>
                <div className='card-body'>
                  <h4 className='card-title'>
                    <a
                      href='https://www.helloworldpro.com'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Hello World Pro
                    </a>
                  </h4>
                  {/* <p className='card-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    viverra euismod odio, gravida pellentesque urna varius
                    vitae.
                  </p> */}
                  <a
                    href='https://www.helloworldpro.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    helloworldpro.com <FaLink />
                  </a>
                  <a
                    href='https://github.com/jasonleewilson/helloworldpro'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    &nbsp;|&nbsp;repo <FaLink />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12 mb-4'>
              <div className='card h-100'>
                <a
                  href='https://jasonleewilson.github.io'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image
                    className='card-img-top'
                    src={require("../src/images/project-github-jasonleewilson.jpg")}
                    alt=''
                    width={700}
                    height={400}
                  />
                </a>
                <div className='card-body'>
                  <h4 className='card-title'>
                    <a
                      href='https://jasonleewilson.github.io'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Jason Lee Wilson Github.io
                    </a>
                  </h4>
                  {/* <p className='card-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    viverra euismod odio, gravida pellentesque urna varius
                    vitae.
                  </p> */}
                  <a
                    href='https://jasonleewilson.github.io'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    jasonleewilson.github.io <FaLink />
                  </a>
                  <a
                    href='https://github.com/jasonleewilson/jasonleewilson.github.io'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    &nbsp;|&nbsp;repo <FaLink />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </main>
    </div>
  );
}
