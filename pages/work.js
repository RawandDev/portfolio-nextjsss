import React from "react";
import Work from "../components/Work";

function work() {
  return (
    <>
      <div className="text-white mt-32">
        <h1 className="text-7xl sm:text-10xl font-extrabold opacity-30">
          <span className="text-secondary">.</span>Work
        </h1>
        <div className="text-xl font-semibold md:max-w-xl mb-20">
          <p>
            Here are some of the projects that I have built. You can check the
            source code as well as demo for each one of them.
          </p>
        </div>
        <Work />
      </div>
    </>
  );
}

export default work;
