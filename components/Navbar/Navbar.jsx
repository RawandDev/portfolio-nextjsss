import React, { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import NavbarButtons from "../Navbar/NavbarButtons";
import Image from "next/image";
import ToggleDarkMode from "./ToggleDarkMode";

function Navbar() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div>
      <div className="dark:text-white md:flex md:justify-between md:items-center transform transition-all top-0 z-10 flex justify-between relative">
        <div className="p-3 text-xl">
          <a href="#home">
            Ra<span className="text-secondary">wand</span>
          </a>
        </div>
        <div>
          <ul className="md:flex md:justify-between md:w-96 text-xl hidden">
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
        </div>
        <NavbarButtons isOpened={isOpened} setIsOpened={setIsOpened} />
      </div>
      <MobileNavbar isOpened={isOpened} setIsOpened={setIsOpened} />
    </div>
  );
}

export default Navbar;
