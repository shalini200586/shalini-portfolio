"use client";

import { motion } from "framer-motion";

const shapes = [
  { className: "left-[8%] top-[18%] h-16 w-16 rounded-full bg-coral/20", delay: 0 },
  { className: "right-[12%] top-[12%] h-10 w-10 rotate-12 rounded-2xl bg-teal/25", delay: 0.2 },
  { className: "left-[15%] bottom-[22%] h-12 w-12 rounded-full bg-sun/30", delay: 0.4 },
  { className: "right-[18%] bottom-[30%] h-20 w-20 rounded-[2rem] bg-sky/25", delay: 0.6 },
  { className: "left-[45%] top-[8%] h-8 w-8 rounded-full bg-coral/15", delay: 0.8 },
];

export function FloatingShapes() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.className}`}
          animate={{ y: [0, -12, 0], rotate: [0, 6, 0] }}
          transition={{
            duration: 4 + index * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  );
}
