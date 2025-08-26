import { Facebook, Instagram, Youtube } from "lucide-react";

interface SocialLinksType {
  name: string;
  href: string;
  icon: React.JSX.Element;
}

const SocialLinks: SocialLinksType[] = [
  { name: 'Facebook', href: 'https://www.facebook.com', icon: <Facebook className="w-5 h-5" /> },
  { name: 'Instagram', href: 'https://www.instagram.com/', icon: <Instagram className="w-5 h-5" /> },
  { name: 'YouTube', href: 'https://www.youtube.com', icon: <Youtube className="w-5 h-5" /> },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">  
      <div className="container mx-auto px-4 border-t border-background/20 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-background/60 text-sm">
            © 2025 dsemath.ai. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {SocialLinks.map((link) => 
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                className="text-background/60 hover:text-blue-400 transition-colors duration-300"
              >
                {link.icon}
              </a>
            )}
          </div>

          {/* Trust Badges */}
          <div className="flex items-center space-x-4 text-xs text-background/60">
            <span>🔒 SSL Secured</span>
            <span>🇭🇰 Hong Kong Based</span>
          </div>
        </div>
      </div>
    </footer>
  ) 
}