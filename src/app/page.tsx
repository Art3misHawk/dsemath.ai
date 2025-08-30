'use client'

import { Hero } from "./cccomponents/Hero";
import { Feature } from "./cccomponents/Feature";
import { Integration } from "./cccomponents/Integration";
import { Pricing } from "./cccomponents/Pricing";
import { Topbar } from "./cccomponents/Topbar";
import { FAQ } from "./cccomponents/FAQ";
import { Footer } from "./cccomponents/Footer";
import { ThemeToggle } from "./cccomponents/ThemeToggle";

function App() {
    return (
        <>
            <Topbar />
            <Hero />
            <Feature />
            <Integration />
            <Pricing />
            <FAQ />
            <Footer />
            <ThemeToggle />
        </>
    );
}

export default App;
