import React, { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import NavbarButtons from "../Navbar/NavbarButtons";
import Link from "next/link";
import ToggleDarkMode from "./ToggleDarkMode";
import { useRouter } from "next/router";

function Navbar() {
  const [isOpened, setIsOpened] = useState(false);

  const router = useRouter();

  return (
    <div className="fixed bg-white dark:bg-primary top-0 left-0 px-10 z-20 w-full">
      <nav className="dark:text-white md:flex md:justify-between md:items-center transform transition-all top-0 z-10 flex justify-between relative pt-3">
        <div className="p-3 text-xl">
          {router.pathname.includes("/achievement") ? (
            <Link href="/">
              <a>
                Ra<span className="text-secondary">wand</span>
              </a>
            </Link>
          ) : (
            <a href="#home">
              Ra<span className="text-secondary">wand</span>
            </a>
          )}
        </div>
        <div>
          <ul className="md:flex md:justify-between md:w-96 text-xl hidden items-center">
            {router.pathname.includes("/achievement") ? (
              <>
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
              </>
            ) : (
              <>
                <li className="hover:text-secondary">
                  <a href="#home">Home</a>
                </li>
                <li className="hover:text-secondary">
                  <a href="#work">Work</a>
                </li>
                <li className="hover:text-secondary">
                  <a href="#about">About</a>
                </li>
                <li className="hover:text-secondary">
                  <a href="#contact">Contact</a>
                </li>
              </>
            )}
            <ToggleDarkMode />
          </ul>
        </div>
        <NavbarButtons isOpened={isOpened} setIsOpened={setIsOpened} />
      </nav>
      <MobileNavbar isOpened={isOpened} setIsOpened={setIsOpened} />
    </div>
  );
}

export default Navbar;
