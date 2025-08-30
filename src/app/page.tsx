'use client'

import { Hero } from "./components/Hero";
import { Feature } from "./components/Feature";
import { Integration } from "./components/Integration";
import { Pricing } from "./components/Pricing";
import { Topbar } from "./components/Topbar";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { ThemeToggle } from "./components/ThemeToggle";

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
