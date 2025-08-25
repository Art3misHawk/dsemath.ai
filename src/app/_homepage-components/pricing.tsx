import { Check, Star, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";4
import { PricingPlanType } from "./Interface";
import { PayButton } from "./client-components";

const pricingPlans: PricingPlanType[] = [
  {
    name: "Basic",
    price: "Free",
    period: "",
    description: "Perfect for getting started with DSE Math prep",
    features: [
      "100 AI-generated questions/month",
      "Access to question bank",
      "Basic progress tracking",
      "Email support",
      "Mobile app access"
    ],
    buttonText: "Start Free Trial",
    variant: "outline",
    popular: false
  },
  {
    name: "Pro",
    price: "HK$149",
    period: "/month",
    description: "Most popular choice for serious students",
    features: [
      "Unlimited AI-generated questions",
      "Full question bank access",
      "Advanced analytics",
      "Priority support",
      "Study group access",
      "Performance predictions",
      "Personalized study plans"
    ],
    buttonText: "Get Premium",
    variant: "hero",
    popular: true
  },
  {
    name: "Premium",
    price: "HK$399",
    period: "/month",
    description: "For students aiming for top grades",
    features: [
      "Everything in Premium",
      "1-on-1 tutor sessions",
      "Custom question creation",
      "Exam prediction AI",
      "24/7 support",
      "Family progress sharing",
      "University prep materials"
    ],
    buttonText: "Go Elite",
    variant: "default",
    popular: false
  }
];

export default function Pricing() {
  return(
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <Title />
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => <PricingCard key={plan.name} plan={plan} index={index} />)}
        </div>
        <Footer />
      </div>
    </section>
  )
}

function Title() {
  return(
    <div className="text-center mb-16 animate-fade-in">
      <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
        Simple, <span className="text-emerald-600">Affordable</span> Pricing
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Choose the plan that fits your learning goals. All plans include a 14-day free trial.
      </p>
    </div>
  )
}

interface PricingCardProps {
  plan: PricingPlanType; 
  index: number;
}

function PricingCard({plan, index}: PricingCardProps) {
  return(
    <Card 
      key={plan.name}
      className={`relative bg-sky-100 hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-slide-up ${
        plan.popular ? 'border-2 border-blue-500 shadow-2xl shadow-blue-500/25' : 'border border-gray-200/50'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
            <Star className="w-4 h-4" />
            <span>Most Popular</span>
          </div>
        </div>
      )}
      
      <CardHeader className="text-center pb-8">
        <CardTitle className="text-2xl font-bold mb-2 text-gray-500">{plan.name}</CardTitle>
        <div className="flex items-baseline justify-center space-x-1">
          <span className="text-4xl font-bold text-blue-600">
            {plan.price}
          </span>
          <span className="text-muted-foreground">{plan.period}</span>
        </div>
        <p className="text-muted-foreground mt-4">{plan.description}</p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <ul className="space-y-4">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start space-x-3">
              <div className="bg-secondary rounded-full p-1 mt-0.5">
                <Check className="w-3 h-3 text-secondary-foreground" />
              </div>
              <span className="text-sm text-gray-500">{feature}</span>
            </li>
          ))}
        </ul>

        <PayButton plan={plan} />
      </CardContent>
    </Card>
  )
}

function Footer() {
    return(
      <div className="text-center mt-12 animate-fade-in">
        <p className="text-muted-foreground mb-6">
          Compared to traditional tutoring (HK$2,000+/month), save 90% with dsemath.ai
        </p>
        <div className="flex items-center justify-center space-x-8 text-sm">
          <div className="flex items-center space-x-2">
            <Check className="w-4 h-4 text-secondary" />
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="w-4 h-4 text-secondary" />
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="w-4 h-4 text-secondary" />
            <span>Money-back guarantee</span>
          </div>
        </div>
      </div>
    )
}