import React from "react";
import { useRouter } from "next/router";
import ToggleDarkMode from "./ToggleDarkMode";
import Link from "next/link";

function MobileNavbar({ isOpened }) {
  const router = useRouter();

  return (
    <>
      {isOpened && router.pathname.includes("/achievement") ? (
        <ul className="md:hidden flex flex-col dark:text-white text-xl">
          <li className="hover:text-secondary">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="hover:text-secondary">
            <Link href="/">
              <a>Work</a>
            </Link>
          </li>
          <li className="hover:text-secondary">
            <Link href="/">
              <a>About</a>
            </Link>
          </li>
          <li className="hover:text-secondary">
            <Link href="/">
              <a>Contact</a>
            </Link>
          </li>
          <ToggleDarkMode />
        </ul>
      ) : isOpened && !router.pathname.includes("/achievement") ? (
        <ul className="md:hidden flex flex-col dark:text-white text-xl">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <ToggleDarkMode />
        </ul>
      ) : null}
    </>
  );
}

export default MobileNavbar;
