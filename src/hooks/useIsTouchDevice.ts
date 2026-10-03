"use client";

import { useEffect, useState } from "react";

/** Only disable custom cursor on phones/tablets — not touchscreen laptops. */
export function useIsTouchDevice(): boolean {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const check = () => {
      const coarse = window.matchMedia("(pointer: coarse)").matches;
      const noHover = window.matchMedia("(hover: none)").matches;
      const narrow = window.innerWidth < 768;
      setIsTouch((coarse && noHover) || (narrow && coarse));
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isTouch;
}
