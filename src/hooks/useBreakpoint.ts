import { useEffect, useState } from "react";

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState("mobile");

  useEffect(() => {
    function update() {
      const width = window.innerWidth;

      if (width >= 1280) {
        setBreakpoint("xl");        // desktop
      } else if (width >= 1024) {
        setBreakpoint("lg");        // laptop
      } else if (width >= 768) {
        setBreakpoint("md");        // tablet
      } else if (width >= 640) {
        setBreakpoint("sm");        // small screens
      } else {
        setBreakpoint("mobile");    // default
      }
    }

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return breakpoint;
}
