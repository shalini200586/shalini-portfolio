"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";

type CursorLabel = "VIEW" | "CODE" | "CONNECT" | "SAY HI" | "magnetic" | "";

export function CustomCursor() {
  const isTouch = useIsTouchDevice();
  const [label, setLabel] = useState<CursorLabel>("");
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const dotX = useSpring(-100, { damping: 28, stiffness: 400, mass: 0.4 });
  const dotY = useSpring(-100, { damping: 28, stiffness: 400, mass: 0.4 });
  const ringX = useSpring(-100, { damping: 22, stiffness: 200, mass: 0.5 });
  const ringY = useSpring(-100, { damping: 22, stiffness: 200, mass: 0.5 });

  useEffect(() => {
    if (isTouch) {
      document.body.classList.remove("custom-cursor-active");
      return;
    }

    document.body.classList.add("custom-cursor-active");

    const onMove = (e: MouseEvent) => {
      if (!visible) setVisible(true);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };

    const onLeave = () => setVisible(false);

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorEl = target.closest("[data-cursor]") as HTMLElement | null;
      if (!cursorEl) {
        setLabel("");
        setHovering(false);
        return;
      }
      setHovering(true);
      const value = cursorEl.dataset.cursor ?? "";
      setLabel(value === "magnetic" ? "" : (value as CursorLabel));
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseover", onOver);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseover", onOver);
    };
  }, [isTouch, dotX, dotY, ringX, ringY, visible]);

  if (isTouch) return null;

  const ringSize = hovering ? 52 : 36;
  const displayLabel = label && label !== "magnetic" ? label : "";

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[99999]"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.15s ease" }}
      aria-hidden
    >
      {/* Outer ring — visible on dark bg (no mix-blend) */}
      <motion.div
        className="fixed top-0 left-0"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{
            width: ringSize,
            height: ringSize,
            borderColor: hovering ? "rgba(196, 30, 58, 0.7)" : "rgba(255, 255, 255, 0.35)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="rounded-full border-2 bg-white/[0.03] shadow-[0_0_20px_rgba(196,30,58,0.15)]"
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{ scale: hovering ? 1.5 : 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="relative flex items-center justify-center"
        >
          <div className="h-3 w-3 rounded-full bg-accent shadow-[0_0_16px_rgba(196,30,58,0.9),0_0_4px_#fff]" />
          <div className="absolute h-1.5 w-1.5 rounded-full bg-white" />

          {displayLabel ? (
            <motion.span
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-full mt-3 whitespace-nowrap rounded-full border border-accent/40 bg-bg/90 px-3 py-1 text-[10px] font-bold tracking-[0.25em] text-accent backdrop-blur-sm"
            >
              {displayLabel}
            </motion.span>
          ) : null}
        </motion.div>
      </motion.div>
    </div>
  );
}
