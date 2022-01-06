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
        <li onClick={handleModeChange}>
          <Image src="/images/moon.svg" height={25} width={35} />
        </li>
      ) : (
        <li onClick={handleModeChange}>
          <Image src="/images/sun.svg" height={25} width={35} />
        </li>
      )}
    </div>
  );
}

export default ToggleDarkMode;
