import React from "react";
import Image from "next/image";
import libvery from "../public/images/libvery.svg";

function Work() {
  return (
    <div id="work">
      <div className="relative">
        <p className="font-extrabold text-9xl opacity-50 text-white">.01</p>
        <div>
          <h1 className="text-white">
            Libvery
          </h1>
          <div className="absolute top-20">
            <Image src={libvery} alt="libvery" className="rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
