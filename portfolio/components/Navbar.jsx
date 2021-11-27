import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/images/logo.svg";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`text-white md:flex md:justify-between md:items-center transform transition-all top-0 z-10 ${
        isScrolled ? "bg-darkPrimary" : ""
      }`}
    >
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
