import React from "react";
import Image from "next/image";

function Techs() {
  const techs = [
    "javascript",
    "reactjs",
    "nextjs",
    "redux",
    "github",
    "firebase",
    "tailwindcss",
    "figma",
  ];

  return (
    <div>
      <h2 className="text-center text-white font-extrabold text-2xl mt-10 mb-2">
        Technical Skills
      </h2>
      <div className="text-lg grid grid-cols-4 gap-y-4 md:mx-32 text-center">
        {techs.map((tech, index) => (
          <div key={index}>
            <Image src={`/images/${tech}.svg`} width={35} height={35} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Techs;
