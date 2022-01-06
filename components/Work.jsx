import React from "react";
import DisplayWork from "./DisplayWork";

function Work() {
  return (
    <>
      <div className="text-white mt-32" id="work">
        <h1 className="text-7xl sm:text-10xl font-extrabold opacity-30">
          <span className="text-secondary">.</span>Work
        </h1>
        <div className="text-xl font-semibold md:max-w-xl mb-20">
          <p>
            Here are some of the projects that I have built. You can check the
            source code as well as demo for each one of them.
          </p>
        </div>
        <div className="text-white">
          <div className="relative">
            <DisplayWork />
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
