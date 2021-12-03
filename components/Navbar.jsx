import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/images/logo.svg";
import MobileNavbar from "./MobileNavbar";
import NavbarButtons from "./NavbarButtons";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpened, setIsOpened] = useState(false);
  const [lastYPos, setLastYPos] = useState(0);
  const [showActions, setShowActions] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY;
      if (lastYPos > yPos) {
        setShowActions(true);
      } else {
        setShowActions(false);
      }
      setLastYPos(yPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showActions, lastYPos]);

  return (
    <div>
      <motion.div
        animate={{ opacity: showActions ? 1 : 0, y: showActions ? 0 : -100 }}
        className="text-white md:flex md:justify-between md:items-center transform transition-all top-0 z-10 flex justify-between fixed w-full left-0 bg-primary px-20"
      >
        <Link href="/">
          <a>
            <Image src={Logo} alt="logo" />
          </a>
        </Link>
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
      </motion.div>
      <MobileNavbar
        isOpened={isOpened}
        setIsOpened={setIsOpened}
        lastYPos={lastYPos}
        showActions={showActions}
      />
    </div>
  );
}

export default Navbar;
