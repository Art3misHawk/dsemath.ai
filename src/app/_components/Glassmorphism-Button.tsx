'use client'

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface GlassmorphismButtonProps {
  children: ReactNode; // Allow any valid React node as children
  target: string; // The navigation path
}

export default function GlassmorphismButton({ children, target }: GlassmorphismButtonProps) {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(target);
  };

  return (
    <button
      className="group relative px-10 py-5 bg-white/30 backdrop-blur-xl border-2 border-white/60 text-white font-bold rounded-2xl text-xl shadow-2xl hover:bg-white/40 hover:border-white/80 transition-all duration-500 hover:scale-110 hover:rotate-1"
      onClick={handleNavigate}
      aria-label={`Navigate to ${target}`}
      style={{ fontFamily: '"Poppins", sans-serif' }}
    >
      <span className="relative z-10 flex items-center gap-3 tracking-wide">
        ✨ {children}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40 rounded-2xl group-hover:from-blue-600/60 group-hover:via-purple-600/60 group-hover:to-pink-600/60 transition duration-500"></div>
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 rounded-2xl blur-lg group-hover:blur-xl group-hover:from-blue-500/50 group-hover:via-purple-500/50 group-hover:to-pink-500/50 transition duration-500"></div>
    </button>
  );
}
