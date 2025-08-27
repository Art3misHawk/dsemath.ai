import {  
  HiChartBar,
  HiLightningBolt 
} from "react-icons/hi";
import { BiBarChartSquare } from "react-icons/bi";
import { 
  RiAiGenerate2 ,
  RiShareLine
} from "react-icons/ri";
import { TbTargetArrow } from "react-icons/tb";
import { Card, CardContent } from "@/components/ui/card";
import { featureType } from "./Interface";

const features: featureType[] = [
  {
    icon: RiAiGenerate2,
    title: "AI Question Generator",
    description: "Generate unlimited practice questions tailored to your learning level and weak points.",
    gradient: "bg-blue-500",
  },
  {
    icon: BiBarChartSquare,
    title: "Comprehensive Question Bank",
    description: "Access 10,000+ curated DSE Math questions organized by topic and difficulty.",
    gradient: "bg-blue-500",
  },
  {
    icon: HiChartBar,
    title: "Progress Tracking",
    description: "Track your improvement with detailed analytics and compete with peers.",
    gradient: "bg-blue-500",
  },
  {
    icon: TbTargetArrow,
    title: "Targeted Practice",
    description: "Focus on your weak areas with AI-recommended practice sessions.",
    gradient: "bg-blue-500",
  },
  {
    icon: HiLightningBolt,
    title: "Time-Efficient Learning",
    description: "Maximize your study time with smart scheduling and priority-based learning.",
    gradient: "bg-blue-500",
  },
  {
    icon: RiShareLine,
    title: "Peer Learning",
    description: "Join study groups and learn from top-performing students in Hong Kong.",
    gradient: "bg-blue-500",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <Title />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => 
            <FeatureCards key={feature.title} index={index} feature={feature} />
          )}
        </div>
      </div>
    </section>
  );
}

function Title() {
  return (
    <div className="text-center mb-16 animate-fade-in">
      <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
        Why Choose <span className="text-blue-600">dsemath.ai</span>?
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Our AI-powered platform provides everything you need to excel in DSE Mathematics,
        from personalized question generation to comprehensive progress tracking.
      </p>
    </div>
  );
}

interface FeatureCardsProps {
  index: number;
  feature: featureType;
}

function FeatureCards({ index, feature }: FeatureCardsProps) {
  const Icon = feature.icon; // Assign the icon to a variable with proper capitalization

  return (
    <Card
      className="border border-gray-200/50 bg-sky-100 animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardContent className="p-8 text-center">
        <div className="relative mb-6">
          <div
            className={`w-20 h-20 mx-auto ${feature.gradient} rounded-2xl flex items-center justify-center shadow-card`}
          >
            <Icon className="w-10 h-10 text-white" />
          </div>
        </div>

        <h3 className="text-xl text-black font-bold mb-4">
          {feature.title}
        </h3>

        <p className="text-muted-foreground leading-relaxed">
          {feature.description}
        </p>
      </CardContent>
    </Card>
  );
}