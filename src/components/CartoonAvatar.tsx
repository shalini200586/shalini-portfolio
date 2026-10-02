"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

type CartoonAvatarProps = {
  size?: "sm" | "lg";
};

export function CartoonAvatar({ size = "lg" }: CartoonAvatarProps) {
  const [photoError, setPhotoError] = useState(false);
  const dimensions = size === "lg" ? 280 : 120;
  const showPhoto = !photoError;

  return (
    <motion.div
      className="relative"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <div
        className={`relative overflow-hidden rounded-[2.5rem] border-4 border-ink bg-white shadow-cartoon ${
          size === "lg" ? "h-[280px] w-[280px]" : "h-[120px] w-[120px]"
        }`}
      >
        {showPhoto ? (
          <Image
            src="/avatar.png"
            alt="Shalini cartoon portrait"
            width={dimensions}
            height={dimensions}
            className="h-full w-full object-cover object-top"
            onError={() => setPhotoError(true)}
            priority
          />
        ) : (
          <PlaceholderCartoon size={size} />
        )}
      </div>

      <motion.span
        className="absolute -right-3 -top-3 flex h-12 w-12 items-center justify-center rounded-2xl border-3 border-ink bg-sun text-xl shadow-cartoon-sm"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ✨
      </motion.span>

      <motion.span
        className="absolute -bottom-2 -left-4 rounded-full border-3 border-ink bg-teal px-3 py-1 text-sm font-bold text-white shadow-cartoon-sm"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        Hi!
      </motion.span>
    </motion.div>
  );
}

function PlaceholderCartoon({ size }: { size: "sm" | "lg" }) {
  const scale = size === "lg" ? 1 : 0.45;

  return (
    <svg
      viewBox="0 0 200 200"
      className="h-full w-full bg-gradient-to-b from-sky/30 to-cream"
      style={{ transform: `scale(${scale})`, transformOrigin: "center" }}
    >
      <circle cx="100" cy="78" r="42" fill="#FFDAB9" stroke="#2D3436" strokeWidth="3" />
      <ellipse cx="100" cy="165" rx="55" ry="40" fill="#FF6B4A" stroke="#2D3436" strokeWidth="3" />
      <circle cx="86" cy="74" r="5" fill="#2D3436" />
      <circle cx="114" cy="74" r="5" fill="#2D3436" />
      <path d="M88 88 Q100 98 112 88" fill="none" stroke="#2D3436" strokeWidth="3" strokeLinecap="round" />
      <path d="M72 62 Q100 48 128 62" fill="none" stroke="#2D3436" strokeWidth="4" strokeLinecap="round" />
      <rect x="145" y="120" width="28" height="20" rx="4" fill="#4ECDC4" stroke="#2D3436" strokeWidth="2" />
      <text x="159" y="134" textAnchor="middle" fontSize="10" fill="#2D3436">
        {"</>"}
      </text>
    </svg>
  );
}
