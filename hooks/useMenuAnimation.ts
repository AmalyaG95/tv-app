import { useRef, useCallback, useEffect, useState } from "react";
import useScreenSize, { EBreakpoints } from "@/hooks/useScreenSize";

const useMenuAnimation = (duration = 500) => {
  const screenWidth = useScreenSize();
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const showMenu = isOpen || isAnimating || screenWidth >= EBreakpoints.lg;

  const handleOpen = useCallback(() => {
    if (isOpen || isAnimating) return;
    setIsAnimating(true);
    timeoutRef.current = window.setTimeout(() => {
      setIsOpen(true);
      setIsAnimating(false);
    }, duration);
  }, [isOpen, isAnimating, duration]);

  const handleClose = useCallback(() => {
    if (!isOpen || isAnimating) return;
    setIsAnimating(true);
    timeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
      setIsAnimating(false);
    }, duration);
  }, [isOpen, isAnimating, duration]);

  // TODO: fix this function
  const getMenuAnimationClass = useCallback(() => {
    const baseStyles =
      "w-full bg-black opacity-90 bg-menu-gradient transition-all duration-500 ease-out";

    if (screenWidth < EBreakpoints.lg) {
      return `${baseStyles} transform ${
        isOpen && isAnimating ? "translate-y-0" : "-translate-y-full"
      }`;
    } else {
      if (isOpen && isAnimating)
        return `${baseStyles} transform translate-x-full`;
      if (isOpen || isAnimating) return `${baseStyles}`;
      return "transform translate-x-0 px-0 transition-all duration-500 ease-out";
    }
  }, [isOpen, isAnimating, screenWidth]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return {
    isOpen,
    isAnimating,
    showMenu,
    handleOpen,
    handleClose,
    getMenuAnimationClass,
  };
};

export default useMenuAnimation;
