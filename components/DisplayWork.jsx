import React from "react";
import Image from "next/image";
import workData from "../utils/work.json";

function DisplayWork() {
  return (
    <>
      {workData.map((work, index) => {
        return (
          <div key={work.title}>
            <p className="font-extrabold text-9xl opacity-30 text-white">
              {work.no}
            </p>
            <div
              key={index}
              className={`flex flex-col justify-around ${
                work.isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
              } mb-32 -mt-10`}
            >
              <a
                href={work.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-opacity-20 rounded-md"
              >
                <Image
                  src={work.imageURL}
                  height={440}
                  width={600}
                  priority={true}
                  alt={work.title}
                  className="rounded-md object-contain"
                />
              </a>
              <div className="text-white text-center mt-3">
                <h1 className="text-2xl font-semibold">{work.title}</h1>
                <p>{work.description}</p>
                <p>
                  <span className="font-bold">Techs:</span> {work.tech}
                </p>
                <div className="text-center mt-4">
                  <a
                    href={work.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-4"
                  >
                    <button className="bg-white text-black hover:bg-gray-200 hover:text-black font-medium py-1 px-3 rounded-md">
                      Demo
                    </button>
                  </a>
                  <a
                    href={work.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-white text-black hover:bg-gray-200 hover:text-black font-medium py-1 px-3 rounded-md">
                      Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default DisplayWork;
