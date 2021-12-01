import React from "react";
import Image from "next/image";

function GeneralSkills({ title, content, style, imageURL }) {
  return (
    <li className="text-center shadow-xl cursor-pointer hover:bg-indigo-800 transition-all duration-300 rounded-md flex flex-col items-center">
      <Image
        src={imageURL}
        width={70}
        height={70}
        className={style}
        alt={title}
      />
      <h3 className="text-lg mt-5">{title}</h3>
      <p className="max-w-sm">{content}</p>
    </li>
  );
}

export default GeneralSkills;
