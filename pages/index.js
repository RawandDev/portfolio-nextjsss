import { useState, useEffect } from "react";
import Image from "next/image";
import Work from "../components/Work/Work";
import About from "../components/About";
import Contact from "../components/Contact";
import Techs from "../components/Techs";

export default function Home() {
  const [offsetY, setOffsetY] = useState(0);

  // create a parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section
        className="flex flex-col justify-center items-center lg:flex lg:justify-around lg:flex-row mt-20"
        style={{
          transform: `translateY(${offsetY * -0.3}px)`,
        }}
      >
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
          <div
            style={{
              transform: `translateY(${offsetY * -0.6}px)`,
              opacity: 0.3 + offsetY * 0.001,
              position: "absolute",
              left: "20%",
              top: "20%",
            }}
          >
            <Image
              src="/images/squares.svg"
              height={90}
              width={90}
              alt="squares"
            />
          </div>
          <div className="mt-4">
            <a
              href="#work"
              className="dark:bg-white border-2 dark:text-black dark:hover:bg-black dark:hover:text-white bg-black text-white hover:bg-white hover:text-black font-medium py-1 px-4 hover-transition duration-300 rounded-sm w-36 mt-4 text-2xl mr-4"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="dark:bg-black border-2 dark:text-white dark:hover:bg-white dark:hover:text-black bg-white text-black hover:bg-black hover:text-white font-medium py-1 px-4 hover-transition duration-300 rounded-sm w-36 mt-4 text-2xl"
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
      </section>
      <Techs offsetY={offsetY} />
      <Work />
      <About />
      <Contact />
    </>
  );
}
