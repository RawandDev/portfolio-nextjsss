import { useState, useEffect } from "react";
import Image from "next/image";
import Work from "../components/Work/Work";
import About from "../components/About";
import Contact from "../components/Contact";
import Techs from "../components/Techs";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center lg:flex lg:justify-around lg:flex-row mt-20">
        <div className="dark:text-white text-3xl sm:max-w-2xl sm:flex sm:flex-col sm:items-left mb-4">
          <div>
            <p>
              Hello there<span className="text-secondary">.</span>
            </p>
            <p>
              I’m Rawand, a passionate web developer who enjoys trying new
              things and challenges<span className="text-secondary">.</span>
            </p>
          </div>
          <div className="mt-4">
            <a
              href="#work"
              className="dark:bg-white border-2 dark:text-black dark:hover:bg-black dark:hover:text-white font-medium py-1 px-4 hover-transition duration-300 rounded-sm w-36 mt-4 text-2xl mr-4"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="dark:bg-black border-2 dark:text-white dark:hover:bg-white dark:hover:text-black font-medium py-1 px-4 hover-transition duration-300 rounded-sm w-36 mt-4 text-2xl"
            >
              Contact
            </a>
          </div>
        </div>
        <div>
          <Image
            src="https://i.imgur.com/LhEB9x9.jpeg"
            alt="avatar"
            className="rounded-full z-10"
            width={400}
            height={400}
            objectFit="cover"
          />
        </div>
      </div>
      <Techs />
      <Work />
      <About />
      <Contact />
    </>
  );
}
