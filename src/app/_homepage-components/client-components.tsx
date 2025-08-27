"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { Zap, Brain } from "lucide-react";
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

interface PricingButtonProps {
  plan: PricingPlanType;
}

export function PayButton({plan}: PricingButtonProps) {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('payment');
  };

  // Consistent styling for all buttons with proper alignment and text color
  let buttonClassName = "w-full group text-white font-semibold border-0 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105";
  
  if (plan.variant === "outline") {
    // Start Free - Light blue gradient
    buttonClassName += " bg-gradient-to-r from-sky-400 via-sky-300 to-sky-500 hover:from-sky-500 hover:via-sky-400 hover:to-sky-600 hover:text-white";
  } else if (plan.variant === "hero") {
    // Go Pro - Blue gradient  
    buttonClassName += " bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 hover:from-blue-700 hover:via-blue-600 hover:to-blue-800 hover:text-white";
  } else if (plan.variant === "default") {
    // Go Premium - Teal gradient
    buttonClassName += " bg-gradient-to-r from-teal-500 via-teal-400 to-teal-600 hover:from-teal-600 hover:via-teal-500 hover:to-teal-700 hover:text-white";
  }

  return(
    <Button 
      variant={plan.variant} 
      size="lg" 
      className={buttonClassName}
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