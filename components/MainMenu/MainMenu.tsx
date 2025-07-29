"use client";

import { memo } from "react";

import Image from "next/image";

import { menu } from "@/public/assets/icons";
import { Header, Navbar } from "@/components/MainMenu";
import ActionButtons from "./ActionButtons";
import useCloseElement from "@/hooks/useCloseElement";
import useMenuAnimation from "@/hooks/useMenuAnimation";

const MainMenu = () => {
  const {
    isOpen,
    isNotClosed,
    showMenu,
    handleOpen,
    handleClose,
    getMenuAnimationClass,
  } = useMenuAnimation();
  useCloseElement(isOpen, handleClose, ".wrapper");

  return (
    <>
      {!isOpen && (
        <Image
          className="absolute top-3 xs:top-6 left-3 xs:left-6 z-20 lg:hidden"
          src={menu}
          width={30}
          height={31}
          alt="menu"
          priority
          onClick={handleOpen}
        />
      )}
      {showMenu && (
        <menu
          className={`fixed left-0 top-0 overflow-y-auto h-screen pt-20 xs:pt-[65px] pb-10 pr-8 xs:pb-[65px] md:px-12 ${getMenuAnimationClass()}`}
        >
          <div className="wrapper flex flex-col gap-4 xs:gap-10 max-w-56 xs:max-w-sm h-full text-white bg-black">
            <Header show={isOpen} />
            <Navbar
              isOpen={isNotClosed}
              handleOpenMenu={isOpen ? handleClose : handleOpen}
            />
            {isNotClosed && (
              <footer className="mt-auto pl-6 pb-8">
                <ActionButtons />
              </footer>
            )}
          </div>
        </menu>
      )}
    </>
  );
};

export default memo(MainMenu);
