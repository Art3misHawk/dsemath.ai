'use client'

import Card3d from "card3d";
import { useEffect, useRef } from "react";

export const Hero = () => {
    const heroImageRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (heroImageRef.current) {
            new Card3d(heroImageRef.current, { perspective: 1000, fullPageListening: true });
        }
    }, [heroImageRef]);

    return (
        <section className="py-8 lg:py-20" id="home">
            <div className="container">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="max-lg:order-2">
                        <h1 className="text-4xl font-bold tracking-tight lg:text-6xl lg:leading-none">
                            Transform your business with our
                            <span className="text-primary">Innovative SaaS</span>
                            solutions.
                        </h1>
                        <p className="text-base-content/80 mt-8 sm:text-lg">
                            Take your business to the next level with our advanced SaaS solutions. Enjoy seamless
                            integration, flexible pricing, and dedicated support.
                        </p>
                        <div className="mt-8 inline-flex gap-3 sm:mt-16">
                            <a
                                href="https://daisyui.com/store/checkout?product=2d843d3e-6c74-4cc9-8c7f-f2cbd633a21e&aff=K0XmL"
                                target="_blank">
                                <button className="btn btn-primary">
                                    <span className="iconify lucide--shopping-bag size-4"></span>
                                    Buy Now
                                </button>
                            </a>
                            <button className="btn btn-ghost">Learn More</button>
                        </div>
                    </div>

                    <div
                        className="from-primary/40 to-secondary/40 h-fit rounded-2xl bg-linear-to-r p-3 max-lg:order-1"
                        ref={heroImageRef}>
                        <img alt="SaaS" className="rounded-lg" src="/images/landing/hero.jpg" />
                    </div>
                </div>

                <h2 className="text-base-content/60 mt-12 text-center text-2xl font-medium lg:mt-32">Our Partners</h2>

                <div className="mt-12 grid grid-cols-2 justify-center gap-8 **:cursor-pointer **:grayscale **:transition-all **:duration-500 **:hover:grayscale-0 sm:grid-cols-3 md:grid-cols-5">
                    <img className="mx-auto h-8" src="/images/logo/google.svg" alt="google logo" />
                    <img className="mx-auto h-6" src="/images/logo/microsoft.svg" alt="microsoft logo" />
                    <img className="mx-auto hidden h-6 md:inline" src="/images/logo/netflix.svg" alt="netflix logo" />
                    <img className="mx-auto hidden h-8 md:inline" src="/images/logo/spotify.svg" alt="spotify logo" />
                    <img className="mx-auto hidden h-8 sm:inline" src="/images/logo/paypal.svg" alt="paypal logo" />
                </div>
            </div>
        </section>
    );
};
