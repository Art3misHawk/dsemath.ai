import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { TestimonialType } from "./Interface";

const testimonials: TestimonialType[] = [
  {
    name: "Wong Ka Ming",
    school: "La Salle College",
    grade: "F.6",
    rating: 5,
    text: "DSEMath.ai helped me improve from Level 3 to Level 5* in just 3 months! The AI questions are so similar to real DSE papers.",
    improvement: "Level 3 → 5*"
  },
  {
    name: "Chan Mei Ling",
    school: "St. Paul's Co-educational College",
    grade: "F.6",
    rating: 5,
    text: "The personalized study plan saved me so much time. I could focus on my weak topics instead of studying everything randomly.",
    improvement: "Mock: 65% → DSE: 88%"
  },
  {
    name: "Lee Wing Kei",
    school: "Diocesan Boys' School",
    grade: "F.5",
    rating: 5,
    text: "Amazing value for money! My parents were spending HK$2,400/month on tutoring. Now I get better results for just HK$199.",
    improvement: "Saved HK$2,200/month"
  },
  {
    name: "Liu Sin Yu",
    school: "Maryknoll Convent School",
    grade: "F.6",
    rating: 5,
    text: "The AI knows exactly what type of questions I struggle with. It's like having a personal tutor 24/7.",
    improvement: "Level 4 → 5*"
  },
  {
    name: "Ho Chi Ming",
    school: "Queen Elizabeth School",
    grade: "F.5",
    rating: 5,
    text: "The question bank is huge and well-organized. I practiced over 3,000 questions before my DSE and felt super confident.",
    improvement: "Mock: 58% → DSE: 85%"
  },
  {
    name: "Ng Wai Yin",
    school: "St. Stephen's Girls' College",
    grade: "F.6",
    rating: 5,
    text: "Best investment for DSE prep! The progress tracking helped me stay motivated and see my improvement clearly.",
    improvement: "Level 3 → 5"
  }
];

export default function Testimonials() {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Title />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />)}
          </div>
        </div>
      </section>
    );
}

function Title() {
  return (
    <div className="text-center mb-16 animate-fade-in">
      <h2 className="text-4xl lg:text-5xl font-bold mb-6">
        What <span className="text-blue-600">Students</span> Say
      </h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Join thousands of Hong Kong students who&apos;ve improved their DSE Math grades with our platform.
      </p>
    </div>
  )
}

interface TestimonialCardProps {
  testimonial: TestimonialType;
  index: number;
}

function TestimonialCard({testimonial, index}: TestimonialCardProps) {
  return(
    <Card 
      key={testimonial.name}
      className="group hover:shadow-elegant transition-all duration-500 hover:scale-105 border border-gray-200/50 bg-card/50 backdrop-blur-sm animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <Quote className="w-6 h-6 text-muted-foreground/30" />
        </div>

        <p className="text-foreground mb-6 leading-relaxed">
          &ldquo;{testimonial.text}&rdquo;
        </p>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-foreground">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">{testimonial.school}</p>
              <p className="text-xs text-muted-foreground">{testimonial.grade}</p>
            </div>
            <div className="text-right">
              <div className="text-emerald-600 font-bold text-sm">
                {testimonial.improvement}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}