import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQType } from "./Interface";

const faqs: FAQType[] = [
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
    answer: "Absolutely! dsemath.ai is fully responsive and works perfectly on phones, tablets, and computers. Our mobile app provides the same features as the web version, so you can study anywhere, anytime."
  },
  {
    question: "How much money can I really save compared to tutoring?",
    answer: "Traditional DSE Math tutoring costs HK$150-300 per hour (HK$2,000-4,000/month). With DSEMath.ai at HK$199/month, you save 85-90% while getting unlimited practice, AI personalization, and 24/7 availability that no human tutor can match."
  },
  {
    question: "What if I'm not satisfied with the service?",
    answer: "We offer a 14-day money-back guarantee. If you're not completely satisfied, we'll refund your payment, no questions asked. We're confident you'll see improvement in your first two weeks."
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

export default function FAQ() {
  return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Title />
          <div className="max-w-3xl mx-auto animate-slide-up">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => <FAQItem key={faq.question} faq={faq} index={index} />)}
            </Accordion>
          </div>
          <ContactUs />
        </div>
      </section>
  )
}

function Title() {
  return (
    <div className="text-center mb-16 animate-fade-in">
      <h2 className="text-4xl lg:text-5xl font-bold mb-6">
        Frequently Asked <span className="text-blue-600">Questions</span>
      </h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Got questions? We&apos;ve got answers. Here are the most common questions from students and parents.
      </p>
    </div>
  )
}

interface FAQItemProps {
  faq: FAQType;
  index: number;
}

function FAQItem({ faq, index }: FAQItemProps) {
  return (
    <AccordionItem 
      key={index} 
      value={`item-${index}`}
      className="bg-card/20 backdrop-blur-sm border border-gray-200/50 rounded-lg px-6 hover:shadow-card transition-all duration-300"
    >
      <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors duration-300">
        {faq.question}
      </AccordionTrigger>
      <AccordionContent className="text-muted-foreground leading-relaxed">
        {faq.answer}
      </AccordionContent>
    </AccordionItem>
  )
}

function ContactUs() {
  return (
    <div className="text-center mt-12 animate-fade-in bg-accent rounded-2xl p-8 max-w-2xl mx-auto">
      <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
      <p className="text-muted-foreground mb-6">
        Our support team is here to help you succeed. We'll get back to you as soon as possible.
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
  )
}