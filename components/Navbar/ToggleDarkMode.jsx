import React, { useState, useEffect } from "react";
import Image from "next/image";

function ToggleDarkMode() {
  const [toggleMode, setToggleMode] = useState("dark");

  useEffect(() => {
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setToggleMode("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setToggleMode("light");
    }
  }, []);

  function handleModeChange() {
    if (toggleMode === "dark") {
      document.documentElement.classList.remove("dark");
      setToggleMode("light");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      setToggleMode("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
  return (
    <div>
      {toggleMode === "light" ? (
        <button
          onClick={handleModeChange}
          className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center ring-gray-300 hover:ring-2"
        >
          <Image src="/images/moon.svg" height={25} width={35} />
        </button>
      ) : (
        <button
          onClick={handleModeChange}
          className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-700 flex items-center justify-center hover:ring-2 ring-gray-300"
        >
          <Image
            src="/images/sun.svg"
            height={25}
            width={35}
            className="cursor-pointer"
          />
        </button>
      )}
    </div>
  );
}

export default ToggleDarkMode;
