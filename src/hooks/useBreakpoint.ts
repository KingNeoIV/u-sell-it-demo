import { useEffect, useState } from "react";

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState("mobile");

  useEffect(() => {
    function update() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const landscape = width > height;

      if (width >= 1280) {
        setBreakpoint("desktop");
      } else if (width >= 1024) {
        setBreakpoint("laptop");
      } else if (landscape && width <= 960) {
        setBreakpoint("phone-landscape");
      } else {
        setBreakpoint("mobile");
      }
    }

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return breakpoint;
}
