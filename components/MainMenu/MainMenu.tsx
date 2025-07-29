"use client";

import { memo } from "react";

import Image from "next/image";

import { menu } from "@/public/assets/icons";
import { Header, Navbar } from "@/components/MainMenu";
import ActionButtons from "./ActionButtons";
import useCloseElement from "@/hooks/useCloseElement";
import useMenuAnimation from "@/hooks/useMenuAnimation";
import useScreenSize, { EBreakpoints } from "@/hooks/useScreenSize";

const MainMenu = () => {
  const screenWidth = useScreenSize();
  const {
    isOpen,
    isAnimating,
    handleOpen,
    handleClose,
  } = useMenuAnimation();

  const show = isOpen || isAnimating;
  useCloseElement(isOpen, handleClose, ".wrapper");

  const animeStyles = "w-full opacity-90 bg-menu-gradient";
  const menuStyles = `fixed left-0 top-0 z-50 overflow-y-auto h-screen pt-20 xs:py-[65px] pb-10 xs:px-6 ${
    screenWidth >= EBreakpoints.lg
      ? show
        ? animeStyles
        : "w-[130px] px-0 bg-black"
      : show
      ? `${animeStyles} transform translate-y-0`
      : `${animeStyles} transform -translate-y-full`
  } transition-all duration-500 ease-out`;

  return (
    <>
      {!isOpen && (
        <button>
          <Image
            className="absolute top-3 xs:top-6 left-3 xs:left-6 z-20 lg:hidden"
            src={menu}
            width={30}
            height={31}
            alt="menu"
            priority
            onClick={handleOpen}
          />
        </button>
      )}

      <menu className={menuStyles}>
        <div
          className={`wrapper flex flex-col gap-4 xs:gap-10 max-w-56 ${
            show ? "xs:max-w-sm" : "xs:max-w-[82px]"
          } h-full text-white bg-menu-gradient`}
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
    </>
  );
};

export default memo(MainMenu);
