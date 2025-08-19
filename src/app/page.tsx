"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Database, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProductCharacteristics />
      <PricingSection />
      <UserCommentsSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}

function HeroSection() {
  const router = useRouter();
  
  return (
    <section className="min-h-screen pt-28 bg-gradient-background relative overflow-hidden select-none">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, hsl(220 75% 55% / 0.1) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent/80 to-accent/60 backdrop-blur-sm px-6 py-3 rounded-full text-accent-foreground text-sm font-medium shadow-lg border border-accent/20 mx-auto">
            <span className="w-4 h-4 animate-pulse text-blue-600">✨</span>
            <span className="text-blue-600 font-medium">
              AI-Powered Math Learning Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-6xl lg:text-9xl font-bold leading-tight tracking-tight">
            <div className="flex flex-col items-center gap-4 mb-6">
              {/* Pay 10% */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 sm:justify-start sm:pl-8">
                <span className="text-foreground/90 hover:text-foreground transition-colors duration-300 text-4xl lg:text-6xl font-normal tracking-wide">
                  Pay
                </span>
                <span className="relative">
                  <span className="bg-gradient-to-r from-emerald-400 via-green-500 to-teal-600 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto] font-bold text-7xl lg:text-[12rem] drop-shadow-2xl">
                    10%
                  </span>
                  <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/30 via-green-500/30 to-teal-600/30 rounded-2xl blur-2xl animate-pulse" />
                </span>
              </div>

              {/* Achieve 200% */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 sm:justify-end sm:pr-8">
                <span className="text-foreground/90 hover:text-foreground transition-colors duration-300 text-4xl lg:text-6xl font-normal tracking-wide">
                  Achieve
                </span>
                <span className="relative">
                  <span
                    className="bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto] font-bold text-7xl lg:text-[12rem] drop-shadow-2xl"
                    style={{ animationDelay: "1s" }}
                  >
                    200%
                  </span>
                  <div
                    className="absolute -inset-2 bg-gradient-to-r from-violet-400/30 via-purple-500/30 to-indigo-600/30 rounded-2xl blur-2xl animate-pulse"
                    style={{ animationDelay: "1s" }}
                  />
                </span>
              </div>
            </div>
          </h1>

          {/* Subheading */}
          <p className="text-xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Skip expensive tutoring centers. Master{" "}
            <span className="font-medium text-blue-600">DSE Math</span> with AI
            that adapts to YOU.
          </p>

          {/* Features */}
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              "Unlimited practice questions",
              "Instant step-by-step solutions",
              "Track weak areas automatically",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-3 text-lg text-foreground"
              >
                <span className="text-green-500 font-bold text-xl">✓</span>
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              className="group relative border-2 border-blue-600/80 hover:border-blue-700 text-white bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 hover:bg-blue-700 font-bold px-14 py-7 rounded-full transition-all duration-500 transform hover:scale-110 shadow-xl hover:shadow-blue-700/40 backdrop-blur-md"
              onClick={() => router.push("/ai-generator")}
            >
              <span className="relative z-10 flex items-center gap-3 text-xl">
                Generate Questions
                <span className="w-7 h-7 group-hover:translate-x-2 transition-transform duration-300">→</span>
              </span>
            </button>

            <button
              className="group relative border-2 border-purple-600/40 hover:border-purple-600 text-purple-600 hover:text-white bg-white/5 hover:bg-purple-600 font-medium px-12 py-6 rounded-full transition-all duration-500 transform hover:scale-110 shadow-lg hover:shadow-purple-600/30 backdrop-blur-sm"
              onClick={() => router.push("/question-bank")}
            >
              <span className="flex items-center gap-3 text-lg">
                Browse Question Bank
                <span className="w-6 h-6 group-hover:scale-110 transition-transform duration-300">🗄️</span>
              </span>
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-base text-muted-foreground">
            {[
              { label: "10,000+ Questions", color: "from-secondary to-green-400" },
              { label: "AI-Powered", color: "from-primary to-blue-400", delay: "0.5s" },
              { label: "DSE Focused", color: "from-violet-400 to-purple-500", delay: "1s" },
            ].map(({ label, color, delay }, i) => (
              <div key={i} className="flex items-center space-x-3">
                <div
                  className={`w-3 h-3 bg-gradient-to-r ${color} rounded-full animate-pulse`}
                  style={{ animationDelay: delay }}
                />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function ProductCharacteristics() {
  return (
    <section style={{ padding: "2rem", maxWidth: 700, margin: "0 auto" }}>
      <h2>Product Characteristics</h2>
      <ul style={{ textAlign: "left", lineHeight: 1.7 }}>
        <li>AI-driven solutions for complex mathematics problems</li>
        <li>Step-by-step explanations for better understanding</li>
        <li>Supports a wide range of mathematical topics</li>
        <li>User-friendly interface for seamless experience</li>
        <li>Instant answers and detailed solution breakdowns</li>
      </ul>
    </section>
  );
}

function PricingSection() {
  return (
    <section style={{ padding: "2rem", maxWidth: 700, margin: "0 auto" }}>
      <h2>Pricing</h2>
      <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
        <div style={{ border: "1px solid #ccc", borderRadius: 8, padding: "1.5rem", minWidth: 220 }}>
          <h3>Free</h3>
          <p style={{ fontSize: "2rem", margin: "0.5rem 0" }}>$0</p>
          <ul style={{ textAlign: "left", lineHeight: 1.7 }}>
            <li>Limited daily questions</li>
            <li>Basic explanations</li>
            <li>Email support</li>
          </ul>
        </div>
        <div style={{ border: "2px solid #0070f3", borderRadius: 8, padding: "1.5rem", minWidth: 220, background: "#f0f8ff" }}>
          <h3>Pro</h3>
          <p style={{ fontSize: "2rem", margin: "0.5rem 0" }}>$9.99<span style={{ fontSize: "1rem" }}>/mo</span></p>
          <ul style={{ textAlign: "left", lineHeight: 1.7 }}>
            <li>Unlimited questions</li>
            <li>Step-by-step solutions</li>
            <li>Priority support</li>
            <li>Access to advanced topics</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function UserCommentsSection() {
  const comments = [
    {
      name: "Alice",
      comment: "DSEmath.ai helped me solve problems I struggled with for weeks. Highly recommended!",
    },
    {
      name: "Bob",
      comment: "The step-by-step explanations are clear and easy to follow.",
    },
    {
      name: "Carol",
      comment: "Great platform for anyone needing quick and accurate math solutions.",
    },
  ];

  return (
    <section style={{ padding: "2rem", maxWidth: 700, margin: "0 auto" }}>
      <h2>User Comments</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {comments.map((c, i) => (
          <li key={i} style={{ marginBottom: "1.5rem", background: "#f9f9f9", borderRadius: 8, padding: "1rem" }}>
            <strong>{c.name}</strong>
            <p style={{ margin: "0.5rem 0 0 0" }}>{c.comment}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: "What is DSEmath.ai?",
      answer: "DSEmath.ai is an AI-powered platform that provides solutions and explanations for advanced mathematics problems."
    },
    {
      question: "Is there a free version?",
      answer: "Yes, we offer a free plan with limited daily questions and basic explanations."
    },
    {
      question: "How do I upgrade to Pro?",
      answer: "You can upgrade to Pro by signing up and selecting the Pro plan on our pricing page."
    },
    {
      question: "What topics are supported?",
      answer: "We support a wide range of mathematics topics, from algebra and calculus to statistics and more."
    },
    {
      question: "How fast do I get answers?",
      answer: "Answers are provided instantly after you submit your question."
    }
  ];

  return (
    <section style={{ padding: "2rem", maxWidth: 700, margin: "0 auto" }}>
      <h2>Frequently Asked Questions</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {faqs.map((faq, idx) => (
          <li key={idx} style={{ marginBottom: "1.5rem", background: "#f6f8fa", borderRadius: 8, padding: "1rem" }}>
            <strong>{faq.question}</strong>
            <p style={{ margin: "0.5rem 0 0 0" }}>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function FooterSection() {
  return (
    <footer style={{ padding: "2rem", textAlign: "center", background: "#f5f5f5", marginTop: "2rem" }}>
      <p style={{ margin: 0 }}>
        &copy; {new Date().getFullYear()} DSEmath.ai &mdash; All rights reserved.
      </p>
    </footer>
  );
}