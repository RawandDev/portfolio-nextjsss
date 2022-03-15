import React from "react";
import Achievements from "../pages/achievement";

function About() {
  return (
    <>
      <section className="dark:text-white mt-32" id="about">
        <h1 className="text-7xl sm:text-8xl md:text-10xl font-extrabold opacity-30">
          <span className="text-secondary">.</span>About
        </h1>
        <div className="text-xl font-semibold md:max-w-xl">
          <p>
            I’m a self-taught programmer and an undergraduate student currently
            studying Software Engineering at Koya University.
          </p>
          <p>
            I'm always looking for new challenges and opportunities to learn new
            things and improve my skills.
          </p>
        </div>
      </section>
      <div className="overflow-hidden">
        <h2 className="text-center dark:text-white font-extrabold text-2xl mt-10">
          Achievements
        </h2>
        <ul className="relative dark:text-white ml-10 text-lg flex flex-col justify-center items-center">
          <Achievements />
        </ul>
      </div>
    </>
  );
}

export default About;
