import React from "react";
import ToggleDarkMode from "./ToggleDarkMode";

function MobileNavbar({ isOpened }) {
  return (
    <>
      {isOpened && (
        <ul className="md:hidden flex flex-col dark:text-white text-xl">
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
          <ToggleDarkMode />
        </ul>
      )}
    </>
  );
}

export default MobileNavbar;
