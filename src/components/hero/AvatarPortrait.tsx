"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";

const AVATAR_SOURCES = ["/avatar.png", "/avatar.jpg", "/avatar.jpeg", "/avatar.webp"];

function AvatarPlaceholder() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-accent/30 to-glow-blue/20 px-6 text-center">
      <span className="text-5xl font-black text-white/30">SJ</span>
      <p className="text-xs leading-relaxed text-white/50">
        Save your photo as
        <br />
        <code className="text-accent">public/avatar.png</code>
      </p>
    </div>
  );
}

export function AvatarPortrait() {
  const isTouch = useIsTouchDevice();
  const [srcIndex, setSrcIndex] = useState(0);
  const [failed, setFailed] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 120, damping: 20 });
  const springY = useSpring(my, { stiffness: 120, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);

  useEffect(() => {
    if (isTouch) return;
    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mx.set((e.clientX - cx) / cx);
      my.set((e.clientY - cy) / cy);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [isTouch, mx, my]);

  return (
    <div className="relative flex items-center justify-center" data-cursor="magnetic">
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center overflow-hidden">
        <span className="text-[clamp(2.5rem,10vw,7rem)] font-black leading-none text-white/[0.04]">BUILD</span>
        <span className="-mt-3 text-[clamp(2.5rem,10vw,7rem)] font-black leading-none text-white/[0.04]">LEARN</span>
        <span className="-mt-3 text-[clamp(2.5rem,10vw,7rem)] font-black leading-none text-white/[0.04]">SHIP</span>
      </div>

      <motion.div
        style={{ rotateX: isTouch ? 0 : rotateX, rotateY: isTouch ? 0 : rotateY, perspective: 1200 }}
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <div className="absolute -inset-12 rounded-full bg-accent/25 blur-[80px]" />
        <div className="absolute -inset-4 rounded-full border border-accent/20" />
        <div className="absolute -inset-8 rounded-full border border-white/[0.04]" />
        <div className="relative h-[min(72vw,340px)] w-[min(72vw,340px)] overflow-hidden rounded-full card-border glow-accent backdrop-blur-[2px] md:h-[380px] md:w-[380px]">
          {failed ? (
            <AvatarPlaceholder />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={AVATAR_SOURCES[srcIndex]}
              src={AVATAR_SOURCES[srcIndex]}
              alt="Shalini Jha"
              className="h-full w-full object-cover object-top"
              onError={() => {
                if (srcIndex < AVATAR_SOURCES.length - 1) {
                  setSrcIndex((i) => i + 1);
                } else {
                  setFailed(true);
                }
              }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent" />
        </div>
      </motion.div>
    </div>
  );
}
