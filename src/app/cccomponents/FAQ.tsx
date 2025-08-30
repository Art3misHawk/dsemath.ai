export const FAQ = () => {
    return (
        <section className="py-8 lg:py-20" id="faq">
            <div className="container">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold sm:text-4xl">FAQs</h2>
                    <p className="text-base-content/80 mt-2 sm:text-lg">
                        Improve your SaaS experience. Find solutions, tips, and resources
                    </p>
                </div>

                <div className="mt-12 flex justify-center gap-6">
                    <div className="space-y-4 lg:w-1/2">
                        <div className="collapse-arrow border-base-content/10 collapse border">
                            <input defaultChecked name="faq" type="radio" aria-label="open/close" />
                            <div className="collapse-title text-xl font-medium">How does SaaS benefit my business?</div>
                            <div className="collapse-content">
                                <p className="text-base">
                                    SaaS offers several advantages, including cost-effectiveness, scalability, automatic
                                    updates, and accessibility. It allows businesses to focus on core operations while
                                    the software provider handles maintenance and updates.
                                </p>
                            </div>
                        </div>
                        <div className="collapse-arrow border-base-content/10 collapse border">
                            <input name="faq" type="radio" aria-label="open/close" />
                            <div className="collapse-title text-xl font-medium">
                                What features are included in your SaaS platform?
                            </div>
                            <div className="collapse-content">
                                <p className="text-base">
                                    Our SaaS platform offers a range of features, including collaborative tools,
                                    real-time analytics, integrations with popular applications, user-friendly
                                    interfaces, and customizable solutions tailored to your business needs.
                                </p>
                            </div>
                        </div>
                        <div className="collapse-arrow border-base-content/10 collapse border">
                            <input name="faq" type="radio" aria-label="open/close" />
                            <div className="collapse-title text-xl font-medium">How can I upgrade my plan?</div>
                            <div className="collapse-content">
                                <p className="text-base">
                                    Upgrading your plan is easy. Log in to your account, go to the billing section, and
                                    choose the plan that suits your business requirements. The upgrade will take effect
                                    immediately.
                                </p>
                            </div>
                        </div>
                        <div className="collapse-arrow border-base-content/10 collapse border">
                            <input name="faq" type="radio" aria-label="open/close" />
                            <div className="collapse-title text-xl font-medium">
                                Is there a trial period for your SaaS platform?
                            </div>
                            <div className="collapse-content">
                                <p className="text-base">
                                    Yes, we offer a free trial period for you to explore and experience our platform's
                                    features. No credit card is required during the trial period.
                                </p>
                            </div>
                        </div>
                        <div className="collapse-arrow border-base-content/10 collapse border">
                            <input name="faq" type="radio" aria-label="open/close" />
                            <div className="collapse-title text-xl font-medium">
                                How is data security handled on your platform?
                            </div>
                            <div className="collapse-content">
                                <p className="text-base">
                                    We prioritize data security. Our platform employs encryption, access controls, and
                                    regular security audits to safeguard your data. We comply with industry standards to
                                    ensure your information is secure.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
