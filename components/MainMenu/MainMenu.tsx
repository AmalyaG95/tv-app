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
    showMenu,
    isAnimating,
    handleOpen,
    handleClose,
    getMenuAnimationClass,
  } = useMenuAnimation();

  useCloseElement(isOpen, handleClose, ".wrapper");

  const show = isOpen || isAnimating;

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
          className={`fixed left-0 top-0 overflow-y-auto z-50 h-screen pt-20 xs:py-[65px] pb-10 xs:px-6 ${getMenuAnimationClass()}`}
        >
          <div
            className={`wrapper transition-all duration-300 ease-out flex flex-col gap-4 xs:gap-10 max-w-56 ${
              show ? "xs:max-w-sm" : "xs:max-w-[68px]"
            } h-full text-white bg-black`}
          >
            <Header show={show} />
            <Navbar
              isOpen={show}
              handleOpenMenu={isOpen ? handleClose : handleOpen}
            />
            {show && (
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
