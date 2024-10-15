"use client";

import { useState } from "react";

import { Header, Navbar } from "@/components/MainMenu";
import ActionButtons from "./ActionButtons";
import useCloseElement from "@/hooks/useCloseElement";

const MainMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  useCloseElement(isOpen, setIsOpen, ".wrapper");

  const isOpenStyles = `${
    isOpen
      ? "w-full px-[38px] pt-[60px] bg-black opacity-90 bg-no-repeat bg-menu-gradient"
      : ""
  }`;

  return (
    <menu
      className={`fixed left-0 top-0 h-screen pt-[200px] pb-[65px] z-50 transition-all duration-500 ease-out ${isOpenStyles} `}
    >
      <div className="wrapper flex flex-col gap-10 max-w-sm  h-full bg-black">
        {isOpen && <Header />}

        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

        {isOpen && (
          <footer className="mt-auto pl-11">
            <ActionButtons />
          </footer>
        )}
      </div>
    </menu>
  );
};

export default MainMenu;
