interface PricingPlan {
  name: string;
  price: string;
  period: string;
  isMostPopular: boolean
  description: string;
  features: string[];
  buttonText: string;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    price: "Free",
    period: "",
    isMostPopular: true,
    description: "Perfect for getting started with DSE Math prep",
    features: [
      "100 AI-generated questions/month",
      "Access to question bank",
      "Basic progress tracking",
      "Email support",
      "Mobile app access"
    ],
    buttonText: "Start Free",
  },
  {
    name: "Premium",
    price: "HK$149",
    period: "/month",
    isMostPopular: true,
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
    buttonText: "Upgrade to Premium",
  },
  {
    name: "Ultimate",
    price: "HK$399",
    period: "/month",
    isMostPopular: true,
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
    buttonText: "Get Ultimate Power",
  }
];

interface PricingPlanUI {
  name: string;
  color: string | null;
  backgroundColor: string;
  buttonUI: string;
}

const pricingPlanUI: PricingPlanUI[] = [
  {
    name: "Basic",
    color: null,
    backgroundColor: "bg-base-200",
    buttonUI: "btn-outline border-base-300"
  },
  {
    name: "Premium",
    color: "primary",
    backgroundColor: "bg-primary/10",
    buttonUI: "btn-primary"
  },
  {
    name: "Ultimate",
    color: "secondary",
    backgroundColor: "bg-secondary/10",
    buttonUI: "btn-secondary"
  }
]

interface PricingPlansWithUI extends PricingPlan, PricingPlanUI {}

const pricingPlansWithUI = pricingPlans.map(plan => ({
  ...plan,
  ...pricingPlanUI.find(ui => ui.name === plan.name)
}));

export default function Pricing() {
	return (
		<>
			<section className="py-8 lg:py-20" id="pricing">
				<div className="group container">
					<div className="text-center">
						<h2 className="text-3xl font-semibold sm:text-4xl">Pricing Plans</h2>
						<p className="text-primary text-base-content/80 mt-2 sm:text-lg">
							Flexible pricing. No hidden fees. Scale with your needs.
						</p>
					</div>
					<div className="mt-8 grid gap-8 lg:grid-cols-3">
            {pricingPlansWithUI.map((plan) => 
              <div className="card border-base-300 border p-3">
                <div className={`${plan.backgroundColor} rounded-box p-6`}>
                  {
                    plan.isMostPopular ?
                      <div className="flex justify-between">
                        <h3 className={`text-xl font-semibold ${plan.color ? `text-${plan.color}` : ''}`}>{plan.name}</h3>
                        <div className={`badge badge-sm ${plan.color ? `badge-${plan.color}` : ''}`}>Most Popular</div>
                      </div> :
                      <h3 className={`text-xl font-semibold ${plan.color ? `text-${plan.color}` : ''}`}>{plan.name}</h3>
                  }
                  <p className="mt-2 flex items-baseline">
                    <span className={`text-5xl font-semibold tracking-tight ${plan.color ? `text-${plan.color}` : ''}`}>{plan.price}</span>
                    <span className={`ml-1 text-xl font-medium ${plan.color ? `text-${plan.color}` : ''}`}>{plan.period}</span>
                  </p>
                  <p className="mt-6">
                    {plan.description}
                  </p>
                </div>
                <div className="p-6">
                  <ul className="list-inside list-disc space-y-3" role="list">
                    {plan.features.map((feature) =>
                      <li>
                        <span className="ms-3">{feature}</span>
                      </li>
                    )}
                  </ul>
                </div>
                <button className={`btn btn-block mt-auto ${plan.buttonUI}`}>
                  {plan.buttonText}
                </button>
              </div>
            )}
					</div>
				</div>
			</section>
		</>
	);
};