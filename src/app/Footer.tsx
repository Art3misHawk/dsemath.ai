import { Brain, Mail, Phone, MapPin, Facebook, Instagram,Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FreeTrialCTAButton } from "./_homepage-components/client-components";

const footerLinks = {
  product: [
    { name: "AI Generator", href: "ai-generator" },
    { name: "Question Bank", href: "question-bank" },
    { name: "Community", href: "dashboard" },
    { name: "Mobile App (Coming Soon)", href: "" },
  ],
  support: [
    { name: "Help Center", href: "#help" },
    { name: "Contact Us", href: "#contact" },
    { name: "System Status", href: "#status" },
    { name: "Bug Reports", href: "#bugs" },
  ],
  company: [
    { name: "About Us", href: "aboutus#aboutus" },
    { name: "Partners", href: "aboutus#partners" },
  ],
  legal: [
    { name: "Privacy Policy", href: "privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "Refund Policy", href: "#refunds" },
  ],
};

export default function Footer () {
  return (
      <footer className="bg-foreground text-background py-16">  
        <div className="container mx-auto px-4">
          <MainContent />
          <CTA />
          <Bottom />
        </div>
      </footer>
  )
}

function MainContent() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
      {/* Brand & Description */}
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center space-x-2">
          <Brain className="w-8 h-8 text-blue-600" />
          <div className="text-2xl font-bold text-blue-600">
            dsemath.ai
          </div>
        </div>
        
        <p className="text-background/80 leading-relaxed">
          Empowering Hong Kong students to excel in DSE Mathematics through AI-powered learning. 
          Pay 10%, achieve 200% of traditional tutoring results.
        </p>

        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-sm text-background/80">
            <Mail className="w-4 h-4" />
            <span>support@dsemath.ai</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-background/80">
            <Phone className="w-4 h-4" />
            <span>+852 xxxx xxxx</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-background/80">
            <MapPin className="w-4 h-4" />
            <span>Hong Kong</span>
          </div>
        </div>
      </div>
      <FooterLinks />
    </div>
  )
}

function FooterLinks() {
  return(
    <>
    
      {/* Product Links */}
      <div>
        <h3 className="font-semibold mb-4 text-background">Product</h3>
        <ul className="space-y-3">
          {footerLinks.product.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                className="text-background/60 hover:text-background transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Support Links */}
      <div>
        <h3 className="font-semibold mb-4 text-background">Support</h3>
        <ul className="space-y-3">
          {footerLinks.support.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                className="text-background/60 hover:text-background transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Company Links */}
      <div>
        <h3 className="font-semibold mb-4 text-background">Company</h3>
        <ul className="space-y-3">
          {footerLinks.company.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                className="text-background/60 hover:text-background transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Legal Links */}
      <div>
        <h3 className="font-semibold mb-4 text-background">Legal</h3>
        <ul className="space-y-3">
          {footerLinks.legal.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                className="text-background/60 hover:text-background transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

function CTA() {
  return (
    <div className="border-t border-background/20 pt-12 mb-12">
      <div className="text-center space-y-6">
        <h3 className="text-2xl font-bold">Ready to Transform Your Math Grades?</h3>
        <p className="text-background/80 max-w-lg mx-auto">
          Join 15,000+ students who&apos;ve improved their DSE Math results with our AI-powered platform.
        </p>
        <FreeTrialCTAButton />
      </div>
    </div>
  )
}

function Bottom() {
  return (          
  <div className="border-t border-background/20 pt-8">
    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      {/* Copyright */}
      <div className="text-background/60 text-sm">
        © 2025 dsemath.ai. All rights reserved.
      </div>

      {/* Social Links */}
      <div className="flex items-center space-x-4">
        <a 
          href="https://www.facebook.com"
          target="_blank"
          className="text-background/60 hover:text-blue-400 transition-colors duration-300"
        >
          <Facebook className="w-5 h-5" />
        </a>
        <a 
          href="https://www.instagram.com/"
          target="_blank"
          className="text-background/60 hover:text-blue-400 transition-colors duration-300"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a 
          href="https://www.youtube.com"
          target="_blank"
          className="text-background/60 hover:text-blue-400 transition-colors duration-300"
        >
          <Youtube className="w-5 h-5" />
        </a>
      </div>

      {/* Trust Badges */}
      <div className="flex items-center space-x-4 text-xs text-background/60">
        <span>🔒 SSL Secured</span>
        <span>🇭🇰 Hong Kong Based</span>
      </div>
    </div>
  </div>
    ) 
}