import type { Metadata } from "next";
import Link from "next/link";
import Icons from "../components/Icons";
// import Link from "next/link";
// import Image from "next/image";
// import profilePic from "/src/app/images/photo-1053x700.jpeg";

export const metadata: Metadata = {
  title: "skills",
  description: "Super cool web engineer / developer",
};

export default function Skills() {
  return (
    <>
      
        <h1 className='text-4xl font-medium text-right mt-4 mb-4 uppercase'>
          Skills
        </h1>
        <hr className='border border-primary mb-4' />
        {/* <div className='grid grid-cols-2 grid-rows-3 md:grid-rows-4 md:grid-cols-4 gap-2 md:gap-4 h-screen'>
          <div className='bg-indigo-100 col-span-1 md:col-span-2'>
            <span>01</span>
          </div>
          <div className='bg-fuchsia-100 col-span-1 md:col-span-2 row-span-1 md:row-span-2'>
            <span>02</span>
          </div>
          <div className='bg-purple-100 col-span-1 md:col-span-2'>
            <span>03</span>
          </div>
          <div className='bg-violet-100'>
            <span>04</span>
          </div>
          <div className='bg-sky-100'>
            <span>05</span>
          </div>
          <div className='bg-emerald-100 col-span-1 md:col-span-2'>
            <span>
              06 - <Icons />
            </span>
          </div>
        </div> */}

        <div className='grid grid-cols-3 grid-rows-1 gap-4'>
          <section id='skills' className='pb-4 xl:sticky lg:static top-20'>
            <ul>
              <Link href='#proficiency-in-programming-languages'>
                <li className='bg-gray-200 hover:bg-gray-300 p-2 my-1 dark:bg-gray-900 dark:hover:bg-gray-800'>
                  Proficiency in Programming Languages
                </li>
              </Link>
              <Link href='#frameworks-and-libraries'>
                <li className='bg-gray-200 hover:bg-gray-300 p-2 my-1 dark:bg-gray-900 dark:hover:bg-gray-800'>
                  Frameworks and Libraries
                </li>
              </Link>
              <Link href='#responsive-web-design'>
                <li className='bg-gray-200 hover:bg-gray-300 p-2 my-1 dark:bg-gray-900 dark:hover:bg-gray-800'>
                  Responsive Web Design
                </li>
              </Link>
              <Link href='#version-control-systems'>
                <li className='bg-gray-200 hover:bg-gray-300 p-2 my-1 dark:bg-gray-900 dark:hover:bg-gray-800'>
                  Version Control Systems
                </li>
              </Link>
              <Link href='#database-management'>
                <li className='bg-gray-200 hover:bg-gray-300 p-2 my-1 dark:bg-gray-900 dark:hover:bg-gray-800'>
                  Database Management
                </li>
              </Link>
              <Link href='#api-integration'>
                <li className='bg-gray-200 hover:bg-gray-300 p-2 my-1 dark:bg-gray-900 dark:hover:bg-gray-800'>
                  API Integration
                </li>
              </Link>
              <Link href='#security'>
                <li className='bg-gray-200 hover:bg-gray-300 p-2 my-1 dark:bg-gray-900 dark:hover:bg-gray-800'>
                  Security - old Cross-Browser Compatibility
                </li>
              </Link>
              <Link href='#performance-optimization'>
                <li className='bg-gray-200 hover:bg-gray-300 p-2 my-1 dark:bg-gray-900 dark:hover:bg-gray-800'>
                  Performance Optimization
                </li>
              </Link>
              <Link href='#testing-and-debugging'>
                <li className='bg-gray-200 hover:bg-gray-300 p-2 my-1 dark:bg-gray-900 dark:hover:bg-gray-800'>
                  Testing and Debugging
                </li>
              </Link>
              <Link href='#ci-cd'>
                <li className='bg-gray-200 hover:bg-gray-300 p-2 my-1 dark:bg-gray-900 dark:hover:bg-gray-800'>
                  Continuous Integration and Deployment (CI/CD)
                </li>
              </Link>
              <Link href='#soft-skills'>
                <li className='bg-gray-200 hover:bg-gray-300 p-2 my-1 dark:bg-gray-900 dark:hover:bg-gray-800'>
                  Soft Skills
                </li>
              </Link>
              <Link href='#knowledge-of-emerging-technologies'>
                <li className='bg-gray-200 hover:bg-gray-300 p-2 my-1 dark:bg-gray-900 dark:hover:bg-gray-800'>
                  Knowledge of Emerging Technologies
                </li>
              </Link>
            </ul>
          </section>

          <div className='col-span-2 text-2xl'>
            <div
              id='proficiency-in-programming-languages'
              className='border border-primary p-4'
            >
              <span className='mb-4 p-2 bg-primary text-white block text-center'>
                Proficiency in Programming Languages
              </span>
              <ul className='list-disc ml-6'>
                <li className='pb-4'>
                  JavaScript: Remains crucial for client-side scripting and
                  server-side development.
                </li>
                <li className='pb-4'>
                  PHP: Depending on the project requirements and backend
                  technology stack.
                </li>
                <li className='pb-4'>
                  TypeScript: Growing in popularity due to its static typing
                  capabilities for JavaScript.
                </li>
              </ul>
            </div>
            <div
              id='frameworks-and-libraries'
              className='border border-primary p-4'
            >
              <span className='mb-4 p-2 bg-primary text-white block text-center'>
                Frameworks and Libraries
              </span>
              <ul className='list-disc ml-6'>
                <li className='pb-4'>
                  React.js, Angular, or Vue.js: Frontend frameworks for building
                  interactive user interfaces.
                </li>
                <li className='pb-4'>
                  Node.js: For server-side JavaScript execution and building
                  scalable network applications.
                </li>
                <li className='pb-4'>
                  Backend frameworks for building web applications and APIs.
                </li>
              </ul>
            </div>
            <div
              id='responsive-web-design'
              className='border border-primary p-4'
            >
              <span className='mb-4 p-2 bg-primary text-white block text-center'>
                Responsive Web Design
              </span>
              <ul className='list-disc ml-6'>
                <li className='pb-4'>Proficiency in HTML5 and CSS3.</li>
                <li className='pb-4'>
                  Knowledge of CSS preprocessors like SASS or LESS.
                </li>
                <li className='pb-4'>
                  Understanding of responsive design principles and frameworks
                  like Bootstrap, Foundation or TailwindCSS.
                </li>
              </ul>
            </div>
            <div
              id='version-control-systems'
              className='border border-primary p-4'
            >
              <span className='mb-4 p-2 bg-primary text-white block text-center'>
                Version Control Systems
              </span>
              <ul className='list-disc ml-6'>
                <li className='pb-4'>
                  Git: Proficiency in version control, branching, merging, and
                  collaboration using platforms like GitHub or GitLab.
                </li>
              </ul>
            </div>
            <div id='database-management' className='border border-primary p-4'>
              <span className='mb-4 p-2 bg-primary text-white block text-center'>
                Database Management
              </span>
              <ul className='list-disc ml-6'>
                <li className='pb-4'>
                  SQL: Fundamental knowledge of database management systems like
                  MySQL, PostgreSQL, or SQLite.
                </li>
                <li className='pb-4'>
                  NoSQL databases like MongoDB, or Firebase for flexible data
                  storage.
                </li>
              </ul>
            </div>
            <div id='api-integration' className='border border-primary p-4'>
              <span className='mb-4 p-2 bg-primary text-white block text-center'>
                API Integration
              </span>
              <ul className='list-disc ml-6'>
                <li className='pb-4'>Understanding of RESTful APIs.</li>
                <li className='pb-4'>
                  Experience with consuming and integrating third-party APIs
                  (e.g., Google Maps API, Twitter API).
                </li>
              </ul>
            </div>
            <div id='security' className='border border-primary p-4'>
              <span className='mb-4 p-2 bg-primary text-white block text-center'>
                Security
              </span>
              <ul className='list-disc ml-6'>
                <li className='pb-4'>
                  Awareness of common web security vulnerabilities (e.g., XSS,
                  CSRF, SQL injection) and best practices for mitigation.
                </li>
                <li className='pb-4'>
                  Knowledge of HTTPS, CORS, and security headers.
                </li>
                <li className='pb-4'>
                  Experience with authentication and authorization mechanisms
                  like JWT or OAuth.
                </li>
              </ul>
            </div>
            <div
              id='performance-optimization'
              className='border border-primary p-4'
            >
              <span className='mb-4 p-2 bg-primary text-white block text-center'>
                Performance Optimization
              </span>
              <ul className='list-disc ml-6'>
                <li className='pb-4'>
                  Profiling and debugging web applications for performance
                  bottlenecks.
                </li>
                <li className='pb-4'>
                  Techniques for optimizing loading times, minimizing resource
                  usage, and improving responsiveness.
                </li>
              </ul>
            </div>
            <div
              id='testing-and-debugging'
              className='border border-primary p-4'
            >
              <span className='mb-4 p-2 bg-primary text-white block text-center'>
                Testing and Debugging
              </span>
              <ul className='list-disc ml-6'>
                <li className='pb-4'>
                  Unit testing with frameworks like Jest, Mocha, or Jasmine.
                </li>
                {/* <li className='pb-4'>
                End-to-end testing using tools like Selenium or Cypress.
              </li> */}
                <li className='pb-4'>
                  Familiarity with debugging tools in browsers and development
                  environments.
                </li>
              </ul>
            </div>
            <div id='ci-cd' className='border border-primary p-4'>
              <span className='mb-4 p-2 bg-primary text-white block text-center'>
                Continuous Integration and Deployment (CI/CD)
              </span>
              <ul className='list-disc ml-6'>
                <li className='pb-4'>
                  Experience with CI/CD pipelines using tools like GitHub or
                  GitLab CI/CD.
                </li>
                <li className='pb-4'>
                  Automating deployment processes and maintaining build
                  pipelines.
                </li>
              </ul>
            </div>
            <div id='soft-skills' className='border border-primary p-4'>
              <span className='mb-4 p-2 bg-primary text-white block text-center'>
                Soft Skills
              </span>
              <ul className='list-disc ml-6'>
                <li className='pb-4'>
                  Effective communication and collaboration within development
                  teams.
                </li>
                <li className='pb-4'>
                  Problem-solving skills and adaptability to new technologies
                  and methodologies.
                </li>
                <li className='pb-4'>
                  Time management and ability to work efficiently under
                  pressure.
                </li>
              </ul>
            </div>
            <div
              id='knowledge-of-emerging-technologies'
              className='border border-primary p-4'
            >
              <span className='mb-4 p-2 bg-primary text-white block text-center'>
                Knowledge of Emerging Technologies
              </span>
              <ul className='list-disc ml-6'>
                <li className='pb-4'>
                  Awareness of emerging trends such as Progressive Web Apps
                  (PWAs), and serverless architecture.
                </li>
                <li className='pb-4'>
                  Ability to learn and adapt to new technologies and paradigms
                  in the rapidly evolving web development landscape.
                </li>
              </ul>
            </div>
          </div>
        </div>
    </>
  );
}
