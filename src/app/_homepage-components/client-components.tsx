"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { Zap } from "lucide-react";
import { PricingPlanType } from "./Interface";

interface HeroSectionNavigateButtonProps {
  children: ReactNode; // Allow any valid React node as children
  target: string; // The navigation path
}

export function HeroSectionNavigateButton({ children, target }: HeroSectionNavigateButtonProps) {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(target);
  };

  return (
    <Button
      variant="hero"
      size="xl"
      className="group relative border-2 border-blue-600/80 hover:border-blue-700 text-white bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 hover:bg-blue-700 font-bold px-14 py-7 rounded-full transition-all duration-500 transform hover:scale-110 shadow-xl hover:shadow-blue-700/40 backdrop-blur-md"
      onClick={handleNavigate}
      aria-label={`Navigate to ${target}`}
    >
      {children}
    </Button>
  );
}

// Special glassmorphism button for "Get Early Access" only
export function GlassmorphismButton({ children, target }: HeroSectionNavigateButtonProps) {
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

interface PricingButtonProps {
  plan: PricingPlanType;
}

export function PayButton({plan}: PricingButtonProps) {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('payment');
  };

  // Define gradient styles based on plan
  const getButtonStyles = () => {
    switch(plan.name) {
      case "Basic":
        return "bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 hover:from-slate-600 hover:via-slate-700 hover:to-slate-800 text-white border-0 shadow-lg hover:shadow-xl hover:shadow-slate-500/25";
      case "Pro":
        return "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 text-white border-0 shadow-lg hover:shadow-xl hover:shadow-blue-500/25";
      case "Premium":
        return "bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:from-purple-600 hover:via-purple-700 hover:to-purple-800 text-white border-0 shadow-lg hover:shadow-xl hover:shadow-purple-500/25";
      default:
        return "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 text-white border-0 shadow-lg hover:shadow-xl hover:shadow-blue-500/25";
    }
  };

  return(
    <Button 
      size="lg" 
      className={`w-full group font-semibold rounded-xl transition-all duration-300 hover:scale-105 transform ${getButtonStyles()}`}
      onClick={handleNavigate}
    >
      {plan.buttonText}
      <Zap className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-300" />
    </Button>
  )
}

export function FreeTrialCTAButton() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('payment');
  };

  return (
    <Button 
      variant="hero" 
      size="lg" 
      className="group relative bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 hover:from-blue-700 hover:via-blue-600 hover:to-blue-800 text-white font-semibold border-0 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" 
      onClick={handleNavigate}
    >
      Start Your Journey 
    </Button>
  )
}