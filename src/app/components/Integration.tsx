export const Integration = () => {
    return (
        <section className="py-8 lg:py-20" id="integrations">
            <div className="container">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold sm:text-4xl">Quick Integrations</h2>
                    <p className="text-base-content/80 mt-4 sm:text-lg">
                        Integrate tools seamlessly for unified efficiency with our SaaS platform
                    </p>
                </div>
                <div className="bg-base-200 rounded-box mt-12 p-8 lg:p-16">
                    <div className="grid items-center gap-12 lg:grid-cols-5">
                        <div className="lg:col-span-3">
                            <h3 className="text-2xl font-medium sm:text-3xl">
                                Seamless expert SaaS integrations, just a snap away.
                            </h3>
                            <p className="text-base-content/80 mt-4 sm:text-lg">
                                Boost efficiency with our SaaS platform's seamless integration. Connect tools
                                effortlessly to create a unified digital workspace.
                            </p>

                            <div className="mt-8 flex justify-center lg:justify-start">
                                <button className="btn btn-primary">Quick Connect</button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 justify-center gap-6 md:grid-cols-3 lg:col-span-2">
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center rounded-full bg-white p-6 shadow">
                                    <img alt="amazon" className="size-12" src="/images/logo/amazon-mini.svg" />
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center rounded-full bg-white p-6 shadow">
                                    <img alt="slack" className="size-12" src="/images/logo/slack.svg" />
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center rounded-full bg-white p-6 shadow">
                                    <img alt="openai" className="size-12" src="/images/logo/openai.svg" />
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center rounded-full bg-white p-6 shadow">
                                    <img alt="meta" className="size-12" src="/images/logo/meta-mini.svg" />
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center rounded-full bg-white p-6 shadow">
                                    <img alt="whatsapp" className="size-12" src="/images/logo/whatsapp.svg" />
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center rounded-full bg-white p-6 shadow">
                                    <img alt="x" className="size-12" src="/images/logo/x.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 grid gap-6 lg:grid-cols-3">
                    <div className="card card-border cursor-pointer transition-all hover:shadow">
                        <div className="card-body">
                            <div className="flex items-center justify-between gap-4">
                                <div className="bg-base-200 flex items-center justify-center rounded-full p-3">
                                    <img alt="slack" className="size-6" src="/images/logo/slack.svg" />
                                </div>
                                <h3 className="text-lg font-medium">Slack</h3>
                                <button className="btn btn-circle ms-auto" aria-label="Details">
                                    <span className="iconify lucide--arrow-right size-4"></span>
                                </button>
                            </div>
                            <p className="mt-2 line-clamp-2 overflow-ellipsis">
                                Improve project efficiency using GitHub. Facilitate smooth discussions, effortless
                                updates, and enhanced real-time collaboration.
                            </p>
                        </div>
                    </div>
                    <div className="card card-border cursor-pointer transition-all hover:shadow">
                        <div className="card-body">
                            <div className="flex items-center justify-between gap-4">
                                <div className="bg-base-200 flex items-center justify-center rounded-full p-3">
                                    <img alt="slack" className="size-6" src="/images/logo/g-drive.svg" />
                                </div>
                                <h3 className="text-lg font-medium">Google Drive</h3>
                                <button className="btn btn-circle ms-auto" aria-label="Details">
                                    <span className="iconify lucide--arrow-right size-4"></span>
                                </button>
                            </div>
                            <p className="mt-2 line-clamp-2 overflow-ellipsis">
                                Streamline file management and boost collaboration with Google Drive
                            </p>
                        </div>
                    </div>

                    <div className="card card-border cursor-pointer transition-all hover:shadow">
                        <div className="card-body">
                            <div className="flex items-center justify-between gap-4">
                                <div className="bg-base-200 flex items-center justify-center rounded-full p-3">
                                    <img alt="slack" className="size-6" src="/images/logo/bitbucket-mini.svg" />
                                </div>
                                <h3 className="text-lg font-medium">Bitbucket</h3>
                                <button className="btn btn-circle ms-auto" aria-label="Details">
                                    <span className="iconify lucide--arrow-right size-4"></span>
                                </button>
                            </div>
                            <p className="mt-2 line-clamp-2 overflow-ellipsis">
                                Boost productivity with Bitbucket. Streamline file management, collaboration, and
                                development
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
