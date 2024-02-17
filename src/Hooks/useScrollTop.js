import { useEffect } from "react";

/**
 * useScrollToTop is a custom hook that scrolls the window to the top of the page
 * with a smooth behavior when the component mounts.
 */

export const useScrollToTop = () => {

  // Scroll the window to the top with smooth behavior when the component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
};