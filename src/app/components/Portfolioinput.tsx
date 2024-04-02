import Image from "next/image";
import Link from "next/link";

import { FaLink, FaGithub } from "react-icons/fa";

const Portfolioinput = (props: {
  title: string;
  description: string;
  websiteLink: string;
  repoLink: string;
  myImage: string;
}) => {
  const { title, description, websiteLink, repoLink, myImage } = props;

  {
    return (
      <div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
        <div className='card h-100'>
          <Link href={websiteLink} target='_blank' rel='noopener noreferrer'>
            <Image
              className='card-img-top'
              src={myImage}
              alt='web portfolio image'
              width={700}
              height={400}
              // loader={imageLoader}
              quality={80}
              priority={true}
            />
          </Link>
          <div className='card-body'>
            <h4 className='text-2xl font-medium py-2'>{title}</h4>
            {description}
            <a href={websiteLink} target='_blank' rel='noopener noreferrer'>
              <FaLink className='inline' /> {websiteLink}
            </a>
            <br />
            {repoLink}
          </div>
        </div>

        {/* /.row */}
      </div>
    );
  }
};
export default Portfolioinput;
