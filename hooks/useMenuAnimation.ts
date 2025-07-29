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
  };
};

export default useMenuAnimation;
