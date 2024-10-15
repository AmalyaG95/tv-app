import { useEffect } from "react";

const useCloseElement = (
  isOpen: boolean,
  setIsOpen: TSetBoolean,
  selector: string = "dialog",
  ignoringElement?: string
) => {
  const handleDocumentClick = (event: MouseEvent) => {
    if (isOpen && !(event.target as Element).closest(selector)) {
      if (
        (event.target as Element).closest(".wrapper") ||
        (ignoringElement && (event.target as Element).closest(ignoringElement))
      ) {
        return;
      }

      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isOpen]);
};

export default useCloseElement;
