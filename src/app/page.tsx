import HeroSection from "./_homepage-components/Herosection";
import Features from "./_homepage-components/Features";
import Pricing from "./_homepage-components/Pricing";
/*import Testimonials from "./_homepage-components/Testimonials"; */
import FAQ from "./_homepage-components/FAQ";
import Footer from "./_homepage-components/Footer";
import InteractiveCards from './_homepage-components/InteractiveCards';


export default function HomePage() {
    return (
      <div>
        <HeroSection />
        <InteractiveCards />
        <Features />
        <Pricing />
        {/* <Testimonials /> */}
        <FAQ />
        <Footer />
      </div>
    );
}