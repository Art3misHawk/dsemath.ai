export const Footer = () => {
    return (
        <footer className="border-base-300 border-t">
            <div className="divide-base-300 grid divide-x lg:grid-cols-2">
                <div className="divide-base-300 divide-y">
                    <div className="p-8 sm:p-10 md:px-16 xl:px-40 xl:py-16">
                        <div className="flex justify-between gap-8">
                            <p className="text-xl font-medium">SaaS Landing.</p>
                            <p className="max-w-sm">Elevate Your IT Infrastructure with Our Innovative Solutions</p>
                        </div>
                    </div>

                    <div className="p-8 sm:p-10 md:px-16 xl:px-40 xl:py-16">
                        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                            <div>
                                <h2 className="text-lg font-medium">Company</h2>
                                <div className="**:hover:text-primary mt-4 space-y-2 **:block **:transition-all">
                                    <a href="#">Landing</a>
                                    <a href="#">Our Team</a>
                                    <a href="#">Blogs</a>
                                    <a href="#">FAQs</a>
                                    <a href="#">Contact</a>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-lg font-medium">Quick Links</h2>
                                <div className="**:hover:text-primary mt-4 space-y-2 **:block **:transition-all">
                                    <a href="#">Features</a>
                                    <a href="#">Pricing</a>
                                    <a href="#">Products</a>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-lg font-medium">Connecting</h2>
                                <div className="**:hover:text-primary mt-4 space-y-2 **:block **:transition-all">
                                    <a href="#">Contact Us</a>
                                    <a href="#">Support</a>
                                    <a href="#">Newsletter</a>
                                    <a href="#">Terms & Conditions</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="order-first lg:order-last">
                    <form className="p-8 lg:p-20">
                        <div className="badge badge-ghost">Demo Request</div>
                        <h2 className="mt-4 text-2xl font-medium sm:text-3xl">Help to get started?</h2>
                        <div className="mt-4 space-y-2">
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Name</legend>
                                <label className="input w-72 focus:outline-0">
                                    <span className="iconify lucide--user text-base-content/80 size-5"></span>
                                    <input className="grow focus:outline-0" placeholder="Mr. Alsen" type="text" />
                                </label>
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Email Address</legend>
                                <label className="input w-72 focus:outline-0">
                                    <span className="iconify lucide--mail text-base-content/80 size-5"></span>
                                    <input className="grow focus:outline-0" placeholder="Email Address" type="email" />
                                </label>
                            </fieldset>
                        </div>

                        <div className="mt-6 flex items-center gap-2">
                            <button className="btn btn-primary">Book a Demo</button>
                            <div className="btn btn-ghost inline-flex items-center gap-2">
                                <span className="iconify lucide--play size-4"></span>
                                Video Tour
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="border-base-300 border-t px-8 py-4 text-center lg:px-40">
                🌼 Made with
                <a className="link-hover link" href="https://daisyui.com" target="_blank">
                    daisyUI
                </a>
            </div>
        </footer>
    );
};
