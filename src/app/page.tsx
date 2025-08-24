import HeroSection from "./_homepage-components/Herosection";
import Features from "./_homepage-components/Features";
import Pricing from "./_homepage-components/Pricing";
import FAQ from "./_homepage-components/FAQ";
import Footer from "./_homepage-components/Footer";

export default function HomePage() {
    return (
      <div>
        <HeroSection />
        <Features />
        <Pricing />
        <FAQ />
        <Footer />
      </div>
    );
}