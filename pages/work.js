import React from "react";
import Work from "../components/Work";
import { motion } from "framer-motion";

function work() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-white mt-32"
      >
        <motion.h1
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          className="text-7xl sm:text-10xl font-extrabold opacity-30"
        >
          <span className="text-secondary">.</span>Work
        </motion.h1>
        <div className="text-xl font-semibold md:max-w-xl mb-20">
          <p>
            Here are some of the projects that I have built. You can check the
            source code as well as demo for each one of them.
          </p>
        </div>
        <Work />
      </motion.div>
    </>
  );
}

export default work;
