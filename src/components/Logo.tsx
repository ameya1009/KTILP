"use client";

import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export default function Logo({ size = "md", showText = true }: LogoProps) {
  // Adjust sizes based on props
  const iconSize = size === "sm" ? 32 : size === "md" ? 44 : 56;
  const textSize = size === "sm" ? "text-xl" : size === "md" ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl";
  const subtitleSize = size === "sm" ? "text-[8px]" : size === "md" ? "text-[10px] md:text-[11px]" : "text-[12px] md:text-[13px]";
  const gap = size === "sm" ? "space-x-2" : size === "md" ? "space-x-3" : "space-x-4";

  return (
    <div className={`flex items-center ${gap}`}>
      {/* SVG Icon */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Upper-left bar (Blue) */}
        <path
          d="M18,18 C18,13 22,9 27,9 C32,9 36,13 36,18 V43 L18,52 Z"
          fill="#009ce0"
        />
        {/* Lower-left bar (Yellow/Orange) */}
        <path
          d="M18,60 L36,51 V82 C36,87 32,91 27,91 C22,91 18,87 18,82 Z"
          fill="#fcb913"
        />
        {/* Right diagonal leg (Blue) */}
        <path
          d="M36,52 C44,60 56,72 74,83 C80,87 86,90 92,91 H68 C58,86 48,76 36,66 Z"
          fill="#009ce0"
        />
        {/* Swooping arrow (Orange) */}
        <path
          d="M10,58 C10,58 24,50 42,40 C55,32 68,23 75,16 L70,11 L88,9 L83,27 L78,20 C72,27 58,37 45,45 C28,56 10,69 10,69 Z"
          fill="#f36c21"
        />
      </svg>

      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <span className={`font-extrabold tracking-tight text-[#4a4a4a] font-sans ${textSize}`}>
            KTILP
          </span>
          <span className={`font-medium tracking-[0.12em] text-[#8c8c8c] font-sans ${subtitleSize} mt-0.5 whitespace-nowrap`}>
            Learn Apply Grow
          </span>
        </div>
      )}
    </div>
  );
}
