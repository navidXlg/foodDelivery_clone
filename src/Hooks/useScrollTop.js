import { useEffect } from "react";

// When scrolling a page it starts from Top = 0 
export const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
};