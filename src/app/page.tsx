import Image from "next/image";

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
  return (
    <section style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Welcome to DSEmath.ai</h1>
      <p>Your AI-powered platform for advanced mathematics solutions.</p>
    </section>
  );
}

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