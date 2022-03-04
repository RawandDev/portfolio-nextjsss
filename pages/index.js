import { useState, useEffect } from "react";
import Image from "next/image";
import Work from "../components/Work/Work";
import About from "../components/About";
import Contact from "../components/Contact";
import Techs from "../components/Techs";
import glass from "../public/images/glass.svg";
import cig from "../public/images/cig.png";
// import resume from "../public/images/RawandKamal.pdf";

export default function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const [isImageShown, setIsImageShown] = useState(false);

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

  function handleShowGlass() {
    setIsImageShown((prev) => !prev);
  }

  return (
    <>
      <section
        className="flex flex-col justify-center items-center lg:flex lg:justify-around lg:flex-row mt-20"
        style={{
          transform: `translateY(${offsetY * -0.3}px)`,
        }}
      >
        <div className="dark:text-white text-3xl sm:max-w-2xl sm:flex sm:flex-col sm:items-left mb-4 lg:w-2/4">
          <div>
            <p>
              Hello there<span className="text-secondary">.</span>
            </p>
            <p>
              I’m <span className="font-bold">Rawand</span>, a passionate web
              developer who enjoys trying new things and challenges
              <span className="text-secondary">.</span>
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
              href="images/RawandKamal.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:bg-black border-2 dark:text-white dark:hover:bg-white dark:hover:text-black bg-white text-black hover:bg-black hover:text-white font-medium py-1 px-4 hover-transition duration-300 rounded-sm w-36 mt-4 text-2xl"
            >
              Resume
            </a>
          </div>
        </div>
        <div>
          <div className="relative">
            <div className="absolute right-20 top-16 mt-1 z-20 sm:mt-3 sm:mr-2">
              {isImageShown && (
                <Image
                  src={glass}
                  alt="glass"
                  className="transform -rotate-6 transition-all duration-300 ease-in-out hover:rotate-360"
                  width={45}
                  height={45}
                />
              )}
            </div>
            <div className="absolute right-20 top-28 z-30 sm:mt-2 sm:mr-7">
              {isImageShown && (
                <Image
                  src={cig}
                  alt="cig"
                  className="transform -rotate-6 transition-all duration-300 ease-in-out hover:rotate-360"
                  width={25}
                  height={25}
                />
              )}
            </div>
            <div>
              <Image
                src="https://i.imgur.com/tRjYq6t.jpeg"
                alt="avatar"
                className="rounded-full z-10 cursor-pointer mt-10"
                width={400}
                height={400}
                objectFit="cover"
                onClick={handleShowGlass}
              />
            </div>
          </div>
        </div>
      </section>
      <Techs offsetY={offsetY} />
      <Work />
      <About />
      <Contact />
    </>
  );
}
