interface TestimonialType {
  name: string;
  school: string;
  grade: string;
  rating: number;
  text: string;
  improvement: string;
}

const testimonials = [
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
      <div>

      </div>
    );
}

function Title() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          What <span className="text-blue-600">Students</span> Say
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Join thousands of Hong Kong students who&apos;ve improved their DSE Math grades with our platform.
        </p>
      </div>
    </div>
  )
}

interface TestimonialCardProps {
  testimonial: TestimonialType;
  index: number;
}

function testimonialCard({testimonial, index}: TestimonialCardProps) {
    return(
      <div>
        
      </div>
    );

}