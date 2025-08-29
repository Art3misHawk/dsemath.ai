interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
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
		<section className="py-8 lg:py-20" id="faq">
			<div className="container">
				<div className="text-center">
					<h2 className="text-3xl font-semibold sm:text-4xl">FAQs</h2>
					<p className="text-base-content/80 mt-2 sm:text-lg">
						Got questions? We&apos;ve got answers. Here are the most common questions from students and parents.
					</p>
				</div>

				<div className="mt-12 flex justify-center gap-6">
					<div className="space-y-4 lg:w-1/2">
            {faqs.map((faq, index)=>
              <div key={index} className="collapse-arrow border-base-content/10 collapse border">
                <input defaultChecked={index === 0} name="faq" type="radio" aria-label="open/close" />
                <div className="collapse-title text-xl font-medium">{faq.question}</div>
                <div className="collapse-content">
                  <p className="text-base">
                  {faq.answer}
                  </p>
                </div>
              </div>
            )}
					</div>
				</div>
			</div>
		</section>
	);
};
