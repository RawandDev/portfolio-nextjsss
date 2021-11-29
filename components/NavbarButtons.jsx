import React from "react";
import Image from "next/image";
import menu from "../public/images/menu.svg";
import close from "../public/images/close.svg";

function NavbarButtons({ isOpened, setIsOpened }) {
  return (
    <>
      <button
        className="md:hidden"
        onClick={() => setIsOpened(!isOpened)}
        type="button"
      >
        {isOpened ? (
          <Image src={menu} width={40} height={40} className="cursor-pointer" />
        ) : (
          <Image
            src={close}
            width={40}
            height={40}
            className="cursor-pointer"
          />
        )}
      </button>
    </>
  );
}

export default NavbarButtons;
