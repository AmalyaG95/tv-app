import { useState, useEffect } from "react";
import { debounce } from "@/utils";

export enum EBreakpoints {
    xs = 420,
    sm = 640,
    md = 768,
    lg = 1024,
    xl = 1200,
    "2xl" = 1536,
  }

const useScreenSize = (): EBreakpoints => {
  const [screenSize, setScreenSize] = useState<EBreakpoints>(
    () => window.innerWidth
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    const debouncedResize = debounce(handleResize, 100);

    window.addEventListener("resize", debouncedResize);
    handleResize();

    return () => window.removeEventListener("resize", debouncedResize);
  }, []);

  return screenSize;
};

export default useScreenSize;
