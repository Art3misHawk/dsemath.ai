import HeroSection from "./_components/Herosection-decrepit";
import Features from "./_components/Features";
// import Pricing from "./_components/Pricing-decrepit";
/*import Testimonials from "./_homepage-components/Testimonials"; */
// import FAQ from "./_components/FAQ-decrepit";
import Footer from "./_components/Footer";

import Hero from './_components/Hero'
import Pricing from './_components/Pricing'
import FAQ from './_components/FAQ'

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Features />
      <Pricing />
      {/* <Testimonials /> */}
      <FAQ />
      <Footer />
    </div>
  );
}