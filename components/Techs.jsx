import React from "react";
import Image from "next/image";

function Techs() {
  const techs = [
    {
      name: "JavaScript",
      logo: "/images/javascript.svg",
    },
    {
      name: "Reactjs",
      logo: "/images/reactjs.svg",
    },
    {
      name: "Nextjs",
      logo: "/images/nextjs.svg",
    },
    {
      name: "Redux Toolkit",
      logo: "/images/redux.svg",
    },
    {
      name: "Nodejs",
      logo: "/images/nodejs.svg",
    },
    {
      name: "Expressjs",
      logo: "/images/expressjs.svg",
    },
    {
      name: "MongoDB",
      logo: "/images/mongodb.svg",
    },
    {
      name: "Git",
      logo: "/images/git.svg",
    },
    {
      name: "Github",
      logo: "/images/github.svg",
    },
    {
      name: "Firebase",
      logo: "/images/firebase.svg",
    },
    {
      name: "Tailwindcss",
      logo: "/images/tailwindcss.svg",
    },
    {
      name: "Figma",
      logo: "/images/figma.svg",
    },
  ];

  return (
    <div>
      <h2 className="text-center dark:text-white font-extrabold text-2xl mt-10 mb-2">
        Technical Skills
      </h2>
      <div className="text-lg grid grid-cols-2 md:grid-cols-4 gap-y-8 text-center">
        {techs.map((tech, index) => (
          <div key={index} className="grid">
            <Image src={tech.logo} width={65} height={65} alt={tech.name} />
            <span className="font-semibold text-sm ml-2 dark:text-white">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Techs;
