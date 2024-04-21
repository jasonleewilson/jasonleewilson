"use client";
import styles from "../styles/Navbar.module.css";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// OLD MENU

// styles for all links
const linkStyle =
  "grid no-underline uppercase hover:text-white duration-300 py-2";

// styles for active and non-active links
const activeStyle = linkStyle + " border-primary text-white text-center py-2";

const nonActiveStyle = linkStyle + " text-black";

// NEW MENU
// const menuLinks = [
//   { path: "/", label: "Home", extra: "blahblah" },
//   { path: "/work", label: "Work" },
//   { path: "/about", label: "About" },
//   { path: "/contact", label: "Contact" },
// ];

const Navbar = () => {
  const currentRoute = usePathname();
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tl = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  const pathname = usePathname();

  return (
    <>
      <div className='menu-container' ref={container}>
        <div className='menu-bar flex justify-between'>
          <div className='logo'>
            <Link href='/'>
              <Image
                src='/logo.svg'
                alt='jasonleewilson - Logo'
                width='0'
                height='0'
                sizes='100vw'
                className='inline-block w-[32px] h-[32px]'
                priority={true}
              />
              <p className='inline-block uppercase ml-4' tabIndex={0}>
                jasonleewilson
              </p>
            </Link>
          </div>

          <nav className='hidden lg:block' aria-label='Main Navigation'>
            <ul className='flex flex-wrap items-center justify-center'>
              <li className='mx-4'>
                <div
                  className={
                    toggleMenu === false
                      ? styles.navmenu
                      : styles.navmenu + " " + styles.active
                  }
                >
                  <Link href='/' className='flipanimate'>
                    <p
                      className={
                        (toggleMenu === false
                          ? styles.navlink
                          : styles.navlink + " " + styles.active,
                        currentRoute === "/" ? activeStyle : nonActiveStyle)
                      }
                    >
                      <span
                        className='text-black'
                        data-hover='Home'
                        tabIndex={0}
                      >
                        Home
                      </span>
                    </p>
                  </Link>
                </div>
              </li>

              <li className='mx-4'>
                <div
                  className={
                    toggleMenu === false
                      ? styles.navmenu
                      : styles.navmenu + " " + styles.active
                  }
                >
                  <Link href='/about' className='flipanimate'>
                    <p
                      className={
                        (toggleMenu === false
                          ? styles.navlink
                          : styles.navlink + " " + styles.active,
                        currentRoute === "/about"
                          ? activeStyle
                          : nonActiveStyle)
                      }
                    >
                      <span
                        className='text-black'
                        data-hover='About'
                        tabIndex={0}
                      >
                        About
                      </span>
                    </p>
                  </Link>
                </div>
              </li>

              <li className='mx-4'>
                <div
                  className={
                    toggleMenu === false
                      ? styles.navmenu
                      : styles.navmenu + " " + styles.active
                  }
                >
                  <Link href='/skills' className='flipanimate'>
                    <p
                      className={
                        (toggleMenu === false
                          ? styles.navlink
                          : styles.navlink + " " + styles.active,
                        currentRoute === "/skills"
                          ? activeStyle
                          : nonActiveStyle)
                      }
                    >
                      <span
                        className='text-black'
                        data-hover='Skills'
                        tabIndex={0}
                      >
                        Skills
                      </span>
                    </p>
                  </Link>
                </div>
              </li>

              <li className='mx-4'>
                <div
                  className={
                    toggleMenu === false
                      ? styles.navmenu
                      : styles.navmenu + " " + styles.active
                  }
                >
                  <Link href='/work' className='flipanimate'>
                    <p
                      className={
                        (toggleMenu === false
                          ? styles.navlink
                          : styles.navlink + " " + styles.active,
                        currentRoute === "/work" ? activeStyle : nonActiveStyle)
                      }
                    >
                      <span
                        className='text-black'
                        data-hover='Work'
                        tabIndex={0}
                      >
                        Work
                      </span>
                    </p>
                  </Link>
                </div>
              </li>

              <li className='mx-4'>
                <div
                  className={
                    toggleMenu === false
                      ? styles.navmenu
                      : styles.navmenu + " " + styles.active
                  }
                >
                  <Link href='/faq' className='flipanimate'>
                    <p
                      className={
                        (toggleMenu === false
                          ? styles.navlink
                          : styles.navlink + " " + styles.active,
                        currentRoute === "/faq" ? activeStyle : nonActiveStyle)
                      }
                    >
                      <span
                        className='text-black'
                        data-hover='FAQ'
                        tabIndex={0}
                      >
                        FAQ
                      </span>
                    </p>
                  </Link>
                </div>
              </li>

              <li className='mx-4'>
                <div
                  className={
                    toggleMenu === false
                      ? styles.navmenu
                      : styles.navmenu + " " + styles.active
                  }
                >
                  <Link href='/contact' className='flipanimate'>
                    <p
                      className={
                        (toggleMenu === false
                          ? styles.navlink
                          : styles.navlink + " " + styles.active,
                        currentRoute === "/contact"
                          ? activeStyle
                          : nonActiveStyle)
                      }
                    >
                      <span
                        className='text-black'
                        data-hover='Contact'
                        tabIndex={0}
                      >
                        Contact
                      </span>
                    </p>
                  </Link>
                </div>
              </li>
            </ul>
          </nav>

          {/* MOBILE HAMBURGER MENU */}
          <div className='menu-open lg:hidden' onClick={toggleMenu}>
            <button
              className={
                toggleMenu === false
                  ? styles.hamburger
                  : styles.hamburger + " " + styles.active
              }
              onClick={toggleMenu}
              aria-label='Menu'
            >
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div className='menu-overlay'>
          <div className='menu-overlay-bar flex justify-between'>
            <div className='menu-logo'>
              {/* <Link href='/'>jasonleewilson</Link> */}
            </div>
            <div className='menu-close-icon' onClick={toggleMenu}>
              <p>&#x2715;</p>
            </div>
          </div>

          <div className='menu-copy mx-auto w-1/2'>
            <div className='menu-links mb-6 text-center '>
              <div className='menu-link-item mx-auto'>
                <div className='menu-link-item-holder' onClick={toggleMenu}>
                  <div
                    className={
                      toggleMenu === false
                        ? styles.navmenu
                        : styles.navmenu + " " + styles.active
                    }
                  >
                    <Link href='/' className='flipanimate'>
                      <p
                        className={
                          (toggleMenu === false
                            ? styles.navlink
                            : styles.navlink + " " + styles.active,
                          currentRoute === "/" ? activeStyle : nonActiveStyle)
                        }
                      >
                        <span data-hover='Home'>Home</span>
                      </p>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='menu-link-item mx-auto'>
                <div className='menu-link-item-holder' onClick={toggleMenu}>
                  <div
                    className={
                      toggleMenu === false
                        ? styles.navmenu
                        : styles.navmenu + " " + styles.active
                    }
                  >
                    <Link href='/about' className='flipanimate'>
                      <p
                        className={
                          (toggleMenu === false
                            ? styles.navlink
                            : styles.navlink + " " + styles.active,
                          currentRoute === "/about"
                            ? activeStyle
                            : nonActiveStyle)
                        }
                      >
                        <span data-hover='About'>About</span>
                      </p>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='menu-link-item mx-auto'>
                <div className='menu-link-item-holder' onClick={toggleMenu}>
                  <div
                    className={
                      toggleMenu === false
                        ? styles.navmenu
                        : styles.navmenu + " " + styles.active
                    }
                  >
                    <Link href='/skills' className='flipanimate'>
                      <p
                        className={
                          (toggleMenu === false
                            ? styles.navlink
                            : styles.navlink + " " + styles.active,
                          currentRoute === "/skills"
                            ? activeStyle
                            : nonActiveStyle)
                        }
                      >
                        <span data-hover='Skills'>Skills</span>
                      </p>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='menu-link-item mx-auto'>
                <div className='menu-link-item-holder' onClick={toggleMenu}>
                  <div
                    className={
                      toggleMenu === false
                        ? styles.navmenu
                        : styles.navmenu + " " + styles.active
                    }
                  >
                    <Link href='/work' className='flipanimate'>
                      <p
                        className={
                          (toggleMenu === false
                            ? styles.navlink
                            : styles.navlink + " " + styles.active,
                          currentRoute === "/work"
                            ? activeStyle
                            : nonActiveStyle)
                        }
                      >
                        <span data-hover='Work'>Work</span>
                      </p>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='menu-link-item mx-auto'>
                <div className='menu-link-item-holder' onClick={toggleMenu}>
                  <div
                    className={
                      toggleMenu === false
                        ? styles.navmenu
                        : styles.navmenu + " " + styles.active
                    }
                  >
                    <Link href='/faq' className='flipanimate'>
                      <p
                        className={
                          (toggleMenu === false
                            ? styles.navlink
                            : styles.navlink + " " + styles.active,
                          currentRoute === "/faq"
                            ? activeStyle
                            : nonActiveStyle)
                        }
                      >
                        <span data-hover='FAQ'>FAQ</span>
                      </p>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='menu-link-item mx-auto'>
                <div className='menu-link-item-holder' onClick={toggleMenu}>
                  <div
                    className={
                      toggleMenu === false
                        ? styles.navmenu
                        : styles.navmenu + " " + styles.active
                    }
                  >
                    <Link href='/contact' className='flipanimate'>
                      <p
                        className={
                          (toggleMenu === false
                            ? styles.navlink
                            : styles.navlink + " " + styles.active,
                          currentRoute === "/contact"
                            ? activeStyle
                            : nonActiveStyle)
                        }
                      >
                        <span data-hover='Contact'>Contact</span>
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className='menu-info'>
              <div className='menu-info-col'>
                <a href='#'>X &#8599;</a>
                <a href='#'>Instgram &#8599;</a>
                <a href='#'>LinkedIn &#8599;</a>
                <a href='#'>Behance &#8599;</a>
                <a href='#'>Dribble &#8599;</a>
              </div>
              <div className='menu-info-col'>
                <p>info@jasonleewilson.com</p>
                <p>480.430.0286</p>
              </div>
            </div> */}
          </div>
          {/* <div className='menu-preview'>
            <p>View Showreel</p>
          </div> */}
          {/* <div className='menu-close' onClick={toggleMenu}>
            <p>Close</p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
