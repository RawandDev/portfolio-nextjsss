import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/images/logo.svg";
import MobileNavbar from "./MobileNavbar";
import NavbarButtons from "./NavbarButtons";

function Navbar() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div>
      <div className="text-white md:flex md:justify-between md:items-center transform transition-all top-0 z-10 flex justify-between relative">
        <div>
          <Image src={Logo} alt="logo" />
        </div>
        <div>
          <ul className="md:flex md:justify-between md:w-96 text-xl hidden">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/work">
              <a>Work</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </ul>
        </div>
        <NavbarButtons isOpened={isOpened} setIsOpened={setIsOpened} />
      </div>
      <MobileNavbar isOpened={isOpened} setIsOpened={setIsOpened} />
    </div>
  );
}

export default Navbar;
