import React from "react";
import Link from "next/link";

function MobileNavbar({ isOpened }) {
  return (
    <>
      {isOpened && (
        <ul className="md:hidden flex flex-col text-white text-xl">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>{" "}
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      )}
    </>
  );
}

export default MobileNavbar;
