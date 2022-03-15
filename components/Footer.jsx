import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <>
      <footer className="border-t-2 border-opacity-30 p-4 md:flex md:justify-between md:items-center text-white">
        <ul className="flex justify-around items-center mb-4 sm:mb-0">
          <li>
            <a
              href="https://www.github.com/RawandDev"
              target="_blank"
              rel="noopener noreferrer"
              className="md:mr-4"
            >
              <Image
                src="/images/github.svg"
                alt="github"
                width={30}
                height={30}
                className="transform hover:rotate-6 transition-transform duration-200 bg-black rounded-sm dark:bg-transparent"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/rawand-kamal"
              target="_blank"
              rel="noopener noreferrer"
              className="md:mr-4"
            >
              <Image
                src="/images/linkedin.svg"
                alt="linkedin"
                width={30}
                height={30}
                className="transform hover:rotate-6 transition-transform duration-200"
              />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/ErFyDev"
              target="_blank"
              rel="noopener noreferrer"
              className="md:mr-4"
            >
              <Image
                src="/images/twitter.svg"
                alt="twitter"
                width={30}
                height={30}
                className="transform hover:rotate-6 transition-transform duration-200 bg-black rounded-sm dark:bg-transparent"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/rawand._.kamal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/instagram.svg"
                alt="instagram"
                width={30}
                height={30}
                className="transform hover:rotate-6 transition-transform duration-200 bg-black rounded-sm dark:bg-transparent"
              />
            </a>
          </li>
        </ul>
        <div>
          <p className="text-center text-xs mb-4 sm:mb-0 text-black dark:text-white">
            © 2022 Rawand Kamal
          </p>
        </div>
        <div>
          <p className="text-center text-xs hover:text-gray-300 text-black dark:text-white">
            <a href="mailto:rawand.200091384037@gmail.com">
              rawand.200091384037@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
