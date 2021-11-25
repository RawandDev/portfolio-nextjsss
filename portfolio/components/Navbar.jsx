import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/images/logo.svg";

function Navbar() {
  return (
    <div className="text-white md:flex md:justify-around md:items-center">
      <div>
        <Image src={Logo} />
      </div>
      <div>
        <ul className="md:flex md:justify-between md:w-96 text-xl hidden">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="#work">
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
    </div>
  );
}

export default Navbar;
