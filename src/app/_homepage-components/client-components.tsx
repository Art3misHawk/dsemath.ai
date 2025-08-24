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

export function HeroSectionNavigateButton({children, target,}: HeroSectionNavigateButtonProps) {
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

export function PayButton(plan: PricingPlanType) {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('payment');
  };

  return(
    <Button 
      variant={plan.variant} 
      size="lg" 
      className="w-full group"
      onClick={handleNavigate}
    >
      {plan.buttonText}
      <Zap className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-300" />
    </Button>
  )
}