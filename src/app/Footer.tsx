import { Instagram } from "lucide-react";

// Custom X (Twitter) Icon Component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

interface SocialLinksType {
  name: string;
  href: string;
  icon: React.JSX.Element;
}

const SocialLinks: SocialLinksType[] = [
  { name: 'X (Twitter)', href: 'https://www.twitter.com', icon: <XIcon className="w-5 h-5" /> },
  { name: 'Instagram', href: 'https://www.instagram.com/', icon: <Instagram className="w-5 h-5" /> },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">  
      <div className="container mx-auto px-4 border-t border-background/20 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-background/60 text-xs max-w-[30vw]">
            <div>© 2025 dsemath.ai. All rights reserved.</div>
            <div>This platform is not affiliated with HKEAA. It is an independent SAAS for DSE students.</div>
          </div>

          {/* Social Links - Centered */}
          <div className="flex justify-center items-center space-x-6 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
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