import React from "react";
import Image from "next/image";

function Techs({ offsetY }) {
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
      <h2 className="text-center dark:text-white font-extrabold text-2xl mt-10 mb-2 relative">
        Technical Skills
      </h2>
      <div className="text-lg grid grid-cols-2 md:grid-cols-4 gap-y-8 text-center">
        {techs.map((tech, index) => (
          <div
            key={index}
            className="grid mx-10 lg:mx-20 shadow cursor-pointer ring-gray-800 dark:ring-white hover:ring-2 bg-gray-200 dark:bg-gray-800 rounded-md"
          >
            <Image
              src={tech.logo}
              width={65}
              height={65}
              alt={tech.name}
              className=""
            />
            <span className="font-semibold text-sm ml-2 dark:text-white">
              {tech.name}
            </span>
          </div>
        ))}
        <div
          style={{
            transform: `translateY(${offsetY * -0.3}px)`,
            opacity: 0.3 + offsetY * 0.001,
            position: "absolute",
          }}
        >
          <Image src="/images/circle.svg" height={90} width={90} alt="circle" />
        </div>
      </div>
    </div>
  );
}

export default Techs;
