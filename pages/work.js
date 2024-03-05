import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import Navbar from "/components/navbar";
// import Footer from "/components/footer";
import Portfolioinput from "../components/Portfolioinput";
import styles from "../styles/Work.module.scss";

import { FaLink, FaGithub } from "react-icons/fa";

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
            <Portfolioinput
              title={"P.F. Chang's"}
              // description={"my cool description"}
              Websitelink={"https://www.pfchangs.com"}
              Myimage={"/src/images/project-pfchangs.jpg"}
            />

            <Portfolioinput
              title={"Luckycat"}
              // description={"my cool description"}
              Websitelink={"https://luckycatfund.com"}
              Myimage={"/src/images/project-luckycatfund.jpg"}
            />

            <Portfolioinput
              title={"Lunar New Year"}
              Websitelink={"http://lunarnewyear.com"}
              Myimage={"/src/images/project-lunar-new-year.jpg"}
            />

            <Portfolioinput
              title={"Pagoda Asian Grill"}
              // description={<p>my cool description</p>}
              Websitelink={"https://www.pagodaasiangrill.com"}
              Myimage={"/src/images/pagoda-asian-grill.jpg"}
            />

            <Portfolioinput
              title={"EPTex"}
              Websitelink={"https://eptexas.com"}
              Myimage={"/src/images/project-eptexas.jpg"}
            />

            <Portfolioinput
              title={"P.F. Chang's - Global"}
              Websitelink={"https://www.pfchangs.com/global"}
              Myimage={"/src/images/project-pfchangs-gbd.jpg"}
            />

            <Portfolioinput
              title={"Bitcoin Current Price"}
              Websitelink={"https://bitcoin-current-price.com"}
              Myimage={"/src/images/project-bitcoin-current-price.jpg"}
              Repolink={
                <a
                  href='https://github.com/jasonleewilson/bitcoin-current-price'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaGithub /> Github Repo
                </a>
              }
            />

            <Portfolioinput
              title={"Current Price"}
              Websitelink={"https://www.current-price.com"}
              Myimage={"/src/images/project-current-price.jpg"}
              Repolink={
                <a
                  href='https://github.com/jasonleewilson/current-price'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaGithub /> Github Repo
                </a>
              }
            />

            <Portfolioinput
              title={"Hello World Pro"}
              Websitelink={"https://www.helloworldpro.com"}
              Myimage={"/src/images/project-helloworldpro.jpg"}
              Repolink={
                <a
                  href='https://github.com/jasonleewilson/helloworldpro'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaGithub /> Github Repo
                </a>
              }
            />

            <Portfolioinput
              title={"Jason Lee Wilson Github.io"}
              Websitelink={"https://jasonleewilson.github.io"}
              Myimage={"/src/images/project-github-jasonleewilson.jpg"}
              Repolink={
                <a
                  href='https://github.com/jasonleewilson/jasonleewilson'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaGithub /> Github Repo
                </a>
              }
            />
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </main>
    </div>
  );
}
