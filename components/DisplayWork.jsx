import React from "react";
import Image from "next/image";
import workData from "../utils/work.json";

function DisplayWork() {
  return (
    <>
      {workData.map((work, index) => {
        return (
          <div
            key={index}
            className="absolute top-20 flex flex-col lg:flex-row"
          >
            <a href={work.demo} target="_blank" rel="noopener noreferrer">
              <Image
                src={work.imageURL}
                height={440}
                width={600}
                alt="libvery"
                className="rounded-md"
              />
            </a>
            <div className="text-white text-center">
              <h1 className="text-2xl font-semibold">{work.title}</h1>
              <p>{work.description}</p>
              <p>
                <span className="font-bold">Techs:</span> {work.tech}
              </p>
              <div className="text-center">
                <a
                  href={work.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4"
                >
                  <button className="bg-white text-black hover:bg-gray-200 hover:text-black font-bold py-1 px-3 rounded-md">
                    Demo
                  </button>
                </a>
                <a href={work.github} target="_blank" rel="noopener noreferrer">
                  <button className="bg-white text-black hover:bg-gray-200 hover:text-black font-bold py-1 px-3 rounded-md">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default DisplayWork;
