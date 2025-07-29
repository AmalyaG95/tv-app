import { useRef, useCallback, useEffect, useState } from "react";
import { MenuState } from "@/constants/MainMenu.constant";
import useScreenSize, { EBreakpoints } from "@/hooks/useScreenSize";

const useMenuAnimation = (duration = 500) => {
  const screenWidth = useScreenSize();
  const [menuState, setMenuState] = useState<MenuState>(MenuState.CLOSED);
  const timeoutRef = useRef<number | null>(null);

  const isOpen = menuState === MenuState.OPEN;
  const isNotClosed = menuState !== MenuState.CLOSED;
  const showMenu = isNotClosed || screenWidth >= EBreakpoints.lg;

  const setMenuStateWithAnimation = useCallback(
    (nextState: MenuState) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      if (nextState === MenuState.OPEN) {
        setMenuState(MenuState.OPENING);
        timeoutRef.current = window.setTimeout(() => {
          setMenuState(MenuState.OPEN);
        }, duration);
      } else if (nextState === MenuState.CLOSED) {
        setMenuState(MenuState.CLOSING);
        timeoutRef.current = window.setTimeout(() => {
          setMenuState(MenuState.CLOSED);
        }, duration);
      } else {
        setMenuState(nextState);
      }
    },
    [duration]
  );

  const handleOpen = useCallback(
    () => setMenuStateWithAnimation(MenuState.OPEN),
    [setMenuStateWithAnimation]
  );
  const handleClose = useCallback(
    () => setMenuStateWithAnimation(MenuState.CLOSED),
    [setMenuStateWithAnimation]
  );

  const getMenuAnimationClass = useCallback(() => {
    const baseStyles =
      "w-full px-6 md:px-12 pt-10 bg-black opacity-90 bg-menu-gradient z-50 transition-all duration-500 ease-out";
    if (screenWidth < EBreakpoints.lg) {
      switch (menuState) {
        case MenuState.OPENING:
        case MenuState.CLOSING:
          return `${baseStyles} transform -translate-y-full`;
        case MenuState.OPEN:
          return `${baseStyles} transform translate-y-0`;
        default:
          return "";
      }
    } else {
      if (menuState === MenuState.OPENING || isOpen) return baseStyles;

      if (menuState === MenuState.CLOSING)
        return "w-[164px] opacity-90 px-0 z-50 transition-all duration-500 ease-out";

      return "w-[164px]";
    }
  }, [menuState, screenWidth, isOpen]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return {
    menuState,
    isOpen,
    isNotClosed,
    showMenu,
    handleOpen,
    handleClose,
    getMenuAnimationClass,
  };
};

export default useMenuAnimation;
