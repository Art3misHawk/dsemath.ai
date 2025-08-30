export const Feature = () => {
    return (
        <section className="relative py-8 lg:py-20" id="features">
            <div className="absolute start-[10%]">
                <div className="from-primary/10 to-secondary/10 pointer-events-none aspect-square w-60 rounded-full bg-gradient-to-r blur-3xl lg:w-[600px]"></div>
            </div>

            <div className="container">
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl font-semibold sm:text-4xl">Magical Things</h2>
                    <p className="text-base-content/80 mt-4 sm:text-lg">
                        Unlock Your Business's Full Potential with Our SaaS Platform
                    </p>
                </div>

                <div className="mt-8 space-y-8 lg:mt-20 xl:space-y-20">
                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="rounded-box overflow-hidden">
                            <img alt="saas img" className="object-cover" src="/images/landing/feature-1.jpg" />
                        </div>

                        <div className="lg:mt-8">
                            <div className="badge badge-soft badge-primary">Dashboard</div>
                            <h3 className="mt-3 text-xl font-medium sm:text-2xl">Streamlined Management</h3>
                            <p className="text-base-content/80 mt-1">
                                Take full control with our advanced SaaS dashboard—real-time analytics, user-friendly
                                design, and effortless customization.
                            </p>
                            <ul className="mt-4 list-inside list-disc">
                                <li>Real-Time Analytics</li>
                                <li>Customizable Layouts</li>
                                <li>User-Friendly Navigation</li>
                                <li>Comprehensive Performance Reports</li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
                        <div>
                            <div className="badge badge-soft badge-secondary">Control</div>
                            <h3 className="mt-3 text-xl font-medium sm:text-2xl">Entity Management</h3>
                            <p className="text-base-content/80 mt-1">
                                Streamline operations with our SaaS platform manage users, projects, and resources in
                                one place, with real-time insights and optimized workflows.
                            </p>

                            <ul className="mt-4 list-inside list-disc">
                                <li>Intuitive Management Tools</li>
                                <li>Efficient Resource Allocation</li>
                                <li>Simplified Task Assignment</li>
                                <li>Comprehensive Oversight</li>
                            </ul>
                        </div>

                        <div className="order-first lg:order-last">
                            <div className="rounded-box overflow-hidden">
                                <img alt="saas img" src="/images/landing/feature-2.jpg" />
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="overflow-hidden rounded-lg">
                            <img alt="saas img" src="/images/landing/feature-3.jpg" />
                        </div>

                        <div className="lg:mt-8">
                            <div className="badge badge-soft badge-error">Integrations</div>
                            <h3 className="mt-3 text-xl font-medium sm:text-2xl">Effortless Integrations</h3>
                            <p className="text-base-content/80 mt-1">
                                Integrate tools seamlessly with our SaaS platform to streamline processes and drive
                                growth.
                            </p>
                            <ul className="mt-4 list-inside list-disc">
                                <li>Real-time collaboration with Slack</li>
                                <li>Engage customers via Email</li>
                                <li>Manage orders from Amazon</li>
                                <li>Leverage AI with OpenAI</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
