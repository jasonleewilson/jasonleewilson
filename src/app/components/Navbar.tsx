"use client";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);

  const currentRoute = usePathname();
  // styles for all links
  const linkStyle =
    "flex items-center pl-[15px] pr-[15px] h-full no-underline uppercase hover:text-primary duration-300 py-2";

  // styles for active and non-active links
  const activeStyle =
    linkStyle +
    " bg-gray-200 hover:bg-gray-100 border-b-4 border-primary hover:border-gray-200 text-black text-center py-2 px-4 rounded";

  const nonActiveStyle = linkStyle + " text-black";
  return (
    <>
      <header className='bg-gray-50'>
        <nav className={styles.navbar}>
          <Link href='/'>
            <Image
              src='/logo.svg'
              alt='Logo'
              width='0'
              height='0'
              sizes='100vw'
              className='inline-block w-[32px] h-[32px]'
              priority={true}
            />
            <p className='inline-block uppercase ml-4'>jasonleewilson</p>
          </Link>
          <ul
            className={
              isOpen === false
                ? styles.navmenu
                : styles.navmenu + " " + styles.active
            }
          >
            <li className={styles.navitem}>
              <Link href='/'>
                <p
                  className={
                    (isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active,
                    currentRoute === "/" ? activeStyle : nonActiveStyle)
                  }
                  onClick={openMenu}
                >
                  Home
                </p>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href='/about'>
                <p
                  className={
                    (isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active,
                    currentRoute === "/about" ? activeStyle : nonActiveStyle)
                  }
                  onClick={openMenu}
                >
                  About
                </p>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href='/work'>
                <p
                  className={
                    (isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active,
                    currentRoute === "/work" ? activeStyle : nonActiveStyle)
                  }
                  onClick={openMenu}
                >
                  Work
                </p>
              </Link>
            </li>

            <li className={styles.navitem}>
              <Link href='/skills'>
                <p
                  className={
                    (isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active,
                    currentRoute === "/skills" ? activeStyle : nonActiveStyle)
                  }
                  onClick={openMenu}
                >
                  Skills
                </p>
              </Link>
            </li>

            <li className={styles.navitem}>
              <Link href='/faq'>
                <p
                  className={
                    (isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active,
                    currentRoute === "/faq" ? activeStyle : nonActiveStyle)
                  }
                  onClick={openMenu}
                >
                  FAQ
                </p>
              </Link>
            </li>

            <li className={styles.navitem}>
              <Link href='/contact'>
                <p
                  className={
                    (isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active,
                    currentRoute === "/contact" ? activeStyle : nonActiveStyle)
                  }
                  onClick={openMenu}
                >
                  Contact
                </p>
              </Link>
            </li>
          </ul>
          <button
            className={
              isOpen === false
                ? styles.hamburger
                : styles.hamburger + " " + styles.active
            }
            onClick={openMenu}
            aria-label='Menu'
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
