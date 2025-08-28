import { IconType } from "react-icons";

export interface featureType {
  icon: IconType;
  title: string;
  description: string;
  gradient: string;
}

export interface FAQType {
  question: string;
  answer: string;
}

export interface PricingPlanType {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  variant: "outline" | "default" | "hero";
  popular: boolean;
}

export interface TestimonialType {
  name: string;
  school: string;
  grade: string;
  rating: number;
  text: string;
  improvement: string;
}
