import React from "react";
import Image from "next/image";
import menu from "../../public/images/menu.svg";
import close from "../../public/images/close.svg";

function NavbarButtons({ isOpened, setIsOpened }) {
  return (
    <>
      <button
        className="md:hidden"
        onClick={() => setIsOpened(!isOpened)}
        type="button"
      >
        {isOpened ? (
          <Image
            src={close}
            width={40}
            height={40}
            alt="menu-open"
            className="cursor-pointer"
          />
        ) : (
          <Image
            src={menu}
            width={40}
            height={40}
            alt="menu-close"
            className="cursor-pointer"
          />
        )}
      </button>
    </>
  );
}

export default NavbarButtons;
