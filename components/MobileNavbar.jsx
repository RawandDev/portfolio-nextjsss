import React from "react";
import Link from "next/link";

function MobileNavbar({ isOpened }) {
  return (
    <>
      {isOpened && (
        <ul className="md:hidden flex flex-col text-white text-xl">
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
      )}
    </>
  );
}

export default MobileNavbar;
