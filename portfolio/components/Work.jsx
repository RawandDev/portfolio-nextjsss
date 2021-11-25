import React from "react";
import Image from "next/image";
import libvery from "../public/images/libvery.svg";

function Work() {
  return (
    <div id="work">
      <div className="relative">
        <p className="font-extrabold text-9xl opacity-50 text-white sm:ml-32 md:ml-80">
          .01
        </p>
        <div className="absolute top-20 right-0 sm:left-44 md:left-96">
          <Image src={libvery} alt="libvery" className="rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default Work;
