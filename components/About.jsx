import React from "react";
import data from "../utils/data.json";

function About() {
  return (
    <>
      <div className="text-white mt-32" id="about">
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
      </div>
      <div className="overflow-hidden">
        <h2 className="text-center text-white font-extrabold text-2xl mt-10">
          Achievements
        </h2>
        <ul className="relative text-white ml-10 text-lg flex flex-col justify-center items-center">
          {data?.map((item, index) => {
            return (
              <div
                key={index}
                className="max-w-md relative pb-10 mb-10 cursor-pointer shadow-xl rounded-lg hover:bg-indigo-800 transition-all duration- overflow-visible"
              >
                <svg
                  width="42"
                  height="400"
                  viewBox="0 0 43 629"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -left-10 overflow-visible"
                >
                  <rect x="20" y="43" width="4" height="1034" fill="white" />
                  <circle
                    cx="21.5"
                    cy="21.5"
                    r="20"
                    fill="#27187E"
                    stroke="#00FFD1"
                    strokeWidth="3"
                  />
                  <circle cx="21.5" cy="21.5" r="13.5" fill="#00FFD1" />
                </svg>
                <span className="font-semibold">{item?.date}: </span>
                {item?.brief}
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default About;
