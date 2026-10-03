"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

export function RoleRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % site.roles.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mt-4 h-8 overflow-hidden md:h-10">
      <AnimatePresence mode="wait">
        <motion.p
          key={site.roles[index]}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg font-medium text-accent md:text-xl"
        >
          {site.roles[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
