import { useEffect, useState } from "react";

interface IWindowsDimensions {
  width: number;
  height: number;
  isMobile: boolean;
}
const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "1xl": 1367,
  "2xl": 1536,
};
// Hook
const useWindowsDimensions = () => {
  const [windowSize, setWindowSize] = useState<IWindowsDimensions>({
    width: 0,
    height: 0,
    isMobile: false,
  });

  useEffect(() => {
    function handleResize() {
      const width = window?.innerWidth ?? 0;

      setWindowSize({
        width,
        height: window?.innerHeight ?? 0,
        isMobile: width < breakpoints.lg,
      });
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowsDimensions;
