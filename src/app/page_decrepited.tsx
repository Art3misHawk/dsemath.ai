"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Brain, 
  Database, 
  Trophy, 
  Target, 
  Clock, 
  Users,
  ArrowRight,
  MessageCircle,
  Sparkles,
  Check,
  Star,
  Zap,
  Quote,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube
} from "lucide-react";

export default function HomePage() {
  const router = useRouter();

  // Hero Section Component
  const HeroSection = () => {
      // For Next.js navigation - replace with your routing solution
  const navigate = (path: string) => {
    // Replace with Next.js router.push(path) or your navigation method
    console.log(`Navigate to: ${path}`);
    // Example: router.push(path);
  };

  return (
    <section className="min-h-screen pt-28 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden select-none">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, hsl(220 75% 55% / 0.1) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100/80 to-blue-200/60 backdrop-blur-sm px-6 py-3 rounded-full text-blue-800 text-sm font-medium shadow-lg border border-blue-200/20 mx-auto dark:from-blue-900/80 dark:to-blue-800/60 dark:text-blue-200 dark:border-blue-800/20">

            </div>
            
            <div className="relative">
              <h1 className="text-6xl lg:text-9xl font-bold leading-tight tracking-tight">
                <div className="flex flex-col items-center gap-4 mb-6">
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 sm:justify-start sm:pl-8">
                    <span className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 transition-colors duration-300 text-4xl lg:text-6xl font-normal tracking-wide">
                      Pay
                    </span>
                    <span className="relative">
                      <span className="bg-gradient-to-r from-emerald-400 via-green-500 to-teal-600 bg-clip-text text-transparent font-bold text-7xl lg:text-[12rem] drop-shadow-2xl">
                        10%
                      </span>
                      <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/30 via-green-500/30 to-teal-600/30 rounded-2xl blur-2xl animate-pulse" />
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 sm:justify-end sm:pr-8">
                    <span className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 transition-colors duration-300 text-4xl lg:text-6xl font-normal tracking-wide">
                      Achieve
                    </span>
                    <span className="relative">
                      <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent font-bold text-7xl lg:text-[12rem] drop-shadow-2xl">
                        200%
                      </span>
                      <div className="absolute -inset-2 bg-gradient-to-r from-violet-400/30 via-purple-500/30 to-indigo-600/30 rounded-2xl blur-2xl animate-pulse" />
                    </span>
                  </div>
                </div>
              </h1>
            </div>

            <p className="text-xl lg:text-3xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
              Skip expensive tutoring centers. Master <span className="font-medium text-blue-600 dark:text-blue-400">DSE Math</span> with AI that adapts to YOU.
            </p>

            {/* Feature highlights */}
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="flex items-center justify-center gap-3 text-lg text-slate-700 dark:text-slate-300">
                <span className="text-green-500 font-bold text-xl">✓</span>
                <span>Unlimited practice questions</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-lg text-slate-700 dark:text-slate-300">
                <span className="text-green-500 font-bold text-xl">✓</span>
                <span>Instant step-by-step solutions</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-lg text-slate-700 dark:text-slate-300">
                <span className="text-green-500 font-bold text-xl">✓</span>
                <span>Track weak areas automatically</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                variant="hero"
                size="xl" 
                className="group relative border-2 border-blue-600/80 hover:border-blue-700 text-white bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 hover:bg-blue-700 font-bold px-14 py-7 rounded-full transition-all duration-500 transform hover:scale-110 shadow-xl hover:shadow-blue-700/40 backdrop-blur-md"
                onClick={() => navigate('/ai-generator')}
              >
                <span className="relative z-10 flex items-center gap-3 text-xl">
                  Generate Questions
                  <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="group relative border-2 border-green-600/40 hover:border-green-600 text-green-600 hover:text-white bg-white/5 hover:bg-green-600 font-medium px-12 py-6 rounded-full transition-all duration-500 transform hover:scale-110 shadow-lg hover:shadow-green-600/30 backdrop-blur-sm dark:bg-slate-800/5 dark:hover:bg-green-600"
                onClick={() => navigate('/ai-chat')}
              >
                <span className="flex items-center gap-3 text-lg">
                  AI Chat Assistant
                  <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                </span>
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="group relative border-2 border-purple-600/40 hover:border-purple-600 text-purple-600 hover:text-white bg-white/5 hover:bg-purple-600 font-medium px-12 py-6 rounded-full transition-all duration-500 transform hover:scale-110 shadow-lg hover:shadow-purple-600/30 backdrop-blur-sm dark:bg-slate-800/5 dark:hover:bg-purple-600"
                onClick={() => navigate('/question-bank')}
              >
                <span className="flex items-center gap-3 text-lg">
                  Browse Question Bank
                  <Database className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                </span>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-base text-slate-500 dark:text-slate-400">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full animate-pulse" />
                <span>10,000+ Questions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-pulse" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full animate-pulse" />
                <span>DSE Focused</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  };

  // Features Section Component
  const FeaturesSection = () => {
    const features = [
      {
        icon: Brain,
        title: "AI Question Generator",
        description: "Generate unlimited practice questions tailored to your learning level and weak points.",
        gradient: "bg-blue-600"
      },
      {
        icon: Database,
        title: "Comprehensive Question Bank",
        description: "Access 10,000+ curated DSE Math questions organized by topic and difficulty.",
        gradient: "bg-blue-600"
      },
      {
        icon: Trophy,
        title: "Progress Tracking",
        description: "Track your improvement with detailed analytics and compete with peers.",
        gradient: "bg-blue-600"
      },
      {
        icon: Target,
        title: "Targeted Practice",
        description: "Focus on your weak areas with AI-recommended practice sessions.",
        gradient: "bg-blue-600"
      },
      {
        icon: Clock,
        title: "Time-Efficient Learning",
        description: "Maximize your study time with smart scheduling and priority-based learning.",
        gradient: "bg-blue-600"
      },
      {
        icon: Users,
        title: "Peer Learning",
        description: "Join study groups and learn from top-performing students in Hong Kong.",
        gradient: "bg-blue-600"
      }
    ];

    return (
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
              Why Choose <span className="text-blue-600">dsemath.ai</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform provides everything you need to excel in DSE Mathematics, 
              from personalized question generation to comprehensive progress tracking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="group hover:shadow-elegant transition-all duration-500 hover:scale-105 border border-gray-200/50 bg-card/50 backdrop-blur-sm animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 mx-auto ${feature.gradient} rounded-2xl flex items-center justify-center shadow-card group-hover:shadow-glow transition-all duration-500`}>
                      <feature.icon className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Pricing Section Component
  const PricingSection = () => {
    const plans = [
      {
        name: "Basic",
        price: "HK$99",
        period: "/month",
        description: "Perfect for getting started with DSE Math prep",
        features: [
          "100 AI-generated questions/month",
          "Access to question bank",
          "Basic progress tracking",
          "Email support",
          "Mobile app access"
        ],
        buttonText: "Start Free Trial",
        variant: "outline" as const,
        popular: false
      },
      {
        name: "Premium",
        price: "HK$199",
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
        variant: "hero" as const,
        popular: true
      },
      {
        name: "Elite",
        price: "HK$299",
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
        variant: "default" as const,
        popular: false
      }
    ];

    return (
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
              Simple, <span className="text-emerald-600">Affordable</span> Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your learning goals. All plans include a 14-day free trial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={plan.name}
                className={`relative hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-slide-up ${
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
                  <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
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
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.variant} 
                    size="lg" 
                    className="w-full group"
                  >
                    {plan.buttonText}
                    <Zap className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

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
        </div>
      </section>
    );
  };

  // Testimonials Section Component
  const TestimonialsSection = () => {
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

    return (
      <section id="testimonials" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              What <span className="text-blue-600">Students</span> Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of Hong Kong students who&apos;ve improved their DSE Math grades with our platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
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
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <div className="bg-accent rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Join 15,000+ Students Already Improving</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600">98%</div>
                  <div className="text-sm text-muted-foreground">Grade Improvement</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-600">4.9</div>
                  <div className="text-sm text-muted-foreground">Average Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">15K+</div>
                  <div className="text-sm text-muted-foreground">Happy Students</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-600">90%</div>
                  <div className="text-sm text-muted-foreground">Cost Savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // FAQ Section Component
  const FAQSection = () => {
    const faqs = [
      {
        question: "How does the AI question generator work?",
        answer: "Our AI analyzes your performance patterns, identifies weak areas, and generates questions specifically targeting those topics. It adapts to your learning pace and ensures you're always challenged at the right level."
      },
      {
        question: "Are the questions similar to actual DSE Math papers?",
        answer: "Yes! Our AI is trained on 10+ years of DSE Math papers and follows the exact format, difficulty progression, and question styles used in the actual exam. Many students report feeling familiar with real DSE questions after practicing with our platform."
      },
      {
        question: "Can I use this on my phone?",
        answer: "Absolutely! DSEMath.ai is fully responsive and works perfectly on phones, tablets, and computers. Our mobile app provides the same features as the web version, so you can study anywhere, anytime."
      },
      {
        question: "How much money can I really save compared to tutoring?",
        answer: "Traditional DSE Math tutoring costs HK$150-300 per hour (HK$2,000-4,000/month). With DSEMath.ai at HK$199/month, you save 85-90% while getting unlimited practice, AI personalization, and 24/7 availability that no human tutor can match."
      },
      {
        question: "What if I'm not satisfied with the service?",
        answer: "We offer a 14-day free trial and 30-day money-back guarantee. If you're not completely satisfied, we'll refund your payment, no questions asked. We're confident you'll see improvement in your first week."
      },
      {
        question: "How quickly will I see improvement in my grades?",
        answer: "Most students see improvement within 2-4 weeks. Our data shows an average grade improvement of 1.2 levels within 3 months of consistent use (practicing 30 minutes daily)."
      },
      {
        question: "Is my progress data secure and private?",
        answer: "Yes, we take privacy seriously. All your data is encrypted and stored securely. We only use your performance data to improve your learning experience and never share it with third parties."
      },
      {
        question: "Can I practice specific topics or paper types?",
        answer: "Yes! You can filter questions by topic (Algebra, Calculus, Statistics, etc.), difficulty level, paper type (Paper 1 or 2), and even specific subtopics. Our system is designed to match exactly what you need to practice."
      }
    ];

    return (
      <section id="faq" className="py-20" style={{ background: 'var(--gradient-background)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Got questions? We&apos;ve got answers. Here are the most common questions from students and parents.
            </p>
          </div>

          <div className="max-w-3xl mx-auto animate-slide-up">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card/50 backdrop-blur-sm border border-gray-200/50 rounded-lg px-6 hover:shadow-card transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors duration-300">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <div className="bg-accent rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                Our support team is here to help you succeed. Get answers within 2 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:support@dsemath.ai"
                  className="text-primary hover:text-primary/80 font-medium transition-colors duration-300"
                >
                  support@dsemath.ai
                </a>
                <span className="hidden sm:inline text-muted-foreground">•</span>
                <a 
                  href="tel:+85221234567"
                  className="text-primary hover:text-primary/80 font-medium transition-colors duration-300"
                >
                  +852 xxxx xxxx
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Footer Section Component
  const FooterSection = () => {
    const footerLinks = {
      product: [
        { name: "AI Generator", href: "#generator" },
        { name: "Question Bank", href: "#question-bank" },
        { name: "Leaderboard", href: "#leaderboard" },
        { name: "Mobile App", href: "#app" },
      ],
      support: [
        { name: "Help Center", href: "#help" },
        { name: "Contact Us", href: "#contact" },
        { name: "System Status", href: "#status" },
        { name: "Bug Reports", href: "#bugs" },
      ],
      company: [
        { name: "About Us", href: "#about" },
        { name: "Careers", href: "#careers" },
        { name: "Press Kit", href: "#press" },
        { name: "Partners", href: "#partners" },
      ],
      legal: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
        { name: "Cookie Policy", href: "#cookies" },
        { name: "Refund Policy", href: "#refunds" },
      ],
    };

    return (
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Brand & Description */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-2">
                <Brain className="w-8 h-8 text-blue-600" />
                <div className="text-2xl font-bold text-blue-600">
                  dsemath.ai
                </div>
              </div>
              
              <p className="text-background/80 leading-relaxed">
                Empowering Hong Kong students to excel in DSE Mathematics through AI-powered learning. 
                Pay 10%, achieve 200% of traditional tutoring results.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-background/80">
                  <Mail className="w-4 h-4" />
                  <span>support@dsemath.ai</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-background/80">
                  <Phone className="w-4 h-4" />
                  <span>+852 xxxx xxxx</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-background/80">
                  <MapPin className="w-4 h-4" />
                  <span>Hong Kong</span>
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-semibold mb-4 text-background">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-background/60 hover:text-background transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="font-semibold mb-4 text-background">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-background/60 hover:text-background transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold mb-4 text-background">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-background/60 hover:text-background transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-semibold mb-4 text-background">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-background/60 hover:text-background transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="border-t border-background/20 pt-12 mb-12">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold">Ready to Transform Your Math Grades?</h3>
              <p className="text-background/80 max-w-lg mx-auto">
                Join 15,000+ students who&apos;ve improved their DSE Math results with our AI-powered platform.
              </p>
              <Button variant="hero" size="lg" className="group">
                Start Your Free Trial
                <Brain className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
              </Button>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-background/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-background/60 text-sm">
                © 2025 dsemath.ai. All rights reserved.
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <a 
                  href="#facebook" 
                  className="text-background/60 hover:text-blue-400 transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#instagram" 
                  className="text-background/60 hover:text-blue-400 transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#youtube" 
                  className="text-background/60 hover:text-blue-400 transition-colors duration-300"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center space-x-4 text-xs text-background/60">
                <span>🔒 SSL Secured</span>
                <span>🇭🇰 Hong Kong Based</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  // Main page render
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}
