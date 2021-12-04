import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function MobileNavbar({ isOpened, showActions }) {
  return (
    <>
      {isOpened && (
        <motion.ul
          animate={{
            opacity: showActions ? 1 : 0,
          }}
          className="md:hidden flex flex-col text-white text-2xl mt-32 fixed left-0 pl-20 z-10 -top-9 bg-primary w-full"
        >
          <Link href="/">
            <a className="mb-2">Home</a>
          </Link>
          <Link href="/work">
            <a className="mb-2">Work</a>
          </Link>
          <Link href="/about">
            <a className="mb-2">About</a>
          </Link>
          <Link href="/contact">
            <a className="mb-2">Contact</a>
          </Link>
        </motion.ul>
      )}
    </>
  );
}

export default MobileNavbar;
