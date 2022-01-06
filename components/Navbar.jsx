import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/images/logo.svg";
import MobileNavbar from "./MobileNavbar";
import NavbarButtons from "./NavbarButtons";
import styles from "../styles/Home.module.css";

function Navbar() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div>
      <div className="text-white md:flex md:justify-between md:items-center transform transition-all top-0 z-10 flex justify-between relative">
        <div className={styles.nav}>
          <Link href="/">
            <a>
              <Image src={Logo} alt="logo" />
            </a>
          </Link>
        </div>
        <div>
          <ul className="md:flex md:justify-between md:w-96 text-xl hidden">
            <li className={styles.nav}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className={styles.nav}>
              <Link href="/work">
                <a>Work</a>
              </Link>
            </li>
            <li className={styles.nav}>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li className={styles.nav}>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        <NavbarButtons isOpened={isOpened} setIsOpened={setIsOpened} />
      </div>
      <MobileNavbar isOpened={isOpened} setIsOpened={setIsOpened} />
    </div>
  );
}

export default Navbar;
