// This wrapper is for fixing the 'document is not defined' bug

'use client'

import dynamic from "next/dynamic";

// Dynamically import HeroCard with SSR disabled
const Card3dWrapper = dynamic(() => import("./Card3dWrapper"), {
    ssr: false,
});

export default function HeroCard() {
    return (
      <Card3dWrapper>
        <div className="from-primary/40 to-secondary/40 h-fit rounded-2xl bg-gradient-to-r p-3 max-lg:order-1">
          <img alt="SaaS" className="rounded-lg" src="/hero.jpg" />
        </div>
      </Card3dWrapper>
    );
}