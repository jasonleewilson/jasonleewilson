// import { getImageUrl } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { FaLink, FaGithub } from "react-icons/fa";

interface CardProps {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  siteUrl: string;
  repoUrl: string;
}

const Card: React.FC<CardProps> = ({
  id,
  name,
  description,
  imageUrl,
  siteUrl,
  repoUrl,
}) => {
  return (
    <>
      {/* <Link href={`/work/${name}`}> */}
      <div className='rounded-sm overflow-hidden h-full flex flex-col justify-between'>
        <div className='shadow'>
          <Link
            href={siteUrl}
            target='_blank'
            rel='noopener noreferrer'
            className=''
          >
            <div className='relative h-96 bg-center '>
              <Image
                src={imageUrl}
                alt={name}
                fill={true}
                className='rounded-t cursor transition duration-300 ease-in-out hover:scale-105 hover:bg-primary hover:opacity-50'
                // width={700}
                // height={400}
                sizes='700 400 100vw'
                priority={true}
                style={{
                  objectFit: "cover",
                }}
              />
              <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 transition duration-500 ease-in-out hover:bg-primary hover:opacity-100'>
                <div className='flex-row text-center'>
                  <h1 className='text-gray-50 text-lg'>{name}</h1>
                  <p className='text-gray-200 font-medium text-sm'>{siteUrl}</p>
                  {/* <small className='text-xs font-light text-gray-300'>
                    {description}
                  </small> */}
                </div>
              </div>
            </div>
          </Link>

          <div className='px-6 py-4 border-2 border-t-0'>
            <div className='text-2xl mb-2 uppercase line-clamp-2'>{name}</div>
            {/* <p className='text-gray-700 text-base truncate uppercase'>
              {description}
            </p> */}
            <a
              href={siteUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='block h-8'
            >
              <FaLink className='inline' /> {siteUrl}
            </a>
            <a
              href={repoUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='block h-8'
            >
              <FaGithub className='inline' /> {repoUrl}
            </a>
          </div>
        </div>
        {/* <div className='px-6 py-2'>
          <span className='inline-block text-2xl text-gray-952 mr-2'>
            {repoUrl}
          </span>
        </div> */}
      </div>
      {/* </Link> */}
    </>
  );
};

export default Card;
