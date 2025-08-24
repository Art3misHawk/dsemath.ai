"use client";

import { Menu, X, User, Brain, Database, Trophy, Settings } from 'lucide-react';
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  const handleLogoClick = () => {
    router.push('/');
  };

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    router.push(href);
    setIsMenuOpen(false); // Close mobile menu if open
  };

  const navItems = [
    { name: "AI Generator", href: "/ai-generator" },
    { name: "Question Bank", href: "/question-bank" },
    { name: "Community", href: "/community" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Settings", href: "/setting" },
  ];
  const loginItem = { name: "Login", href: "/login" };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-[height,background-color,backdrop-filter,box-shadow] duration-300 ease-in-out ${
        isScrolled 
          ? 'h-12 bg-white backdrop-blur-none border-b border-gray-200 shadow-lg'
          : 'h-[68px] bg-white backdrop-blur-none border-b border-gray-100 shadow-md'
      }`}
      style={{ position: 'sticky' }}
    >
  
      
      <div className="w-full relative z-10 h-full">
        <div className="flex items-center justify-between w-full px-0 h-full">
          {/* Logo - Absolutely leftmost */}
          <div className="flex items-center flex-shrink-0 pl-4">
            <div 
              className="cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={handleLogoClick}
            >
              <svg 
                width="140" 
                height="32" 
                viewBox="0 0 140 32" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="h-8"
              >
                <text
                  x="0"
                  y="24"
                  className="fill-sky-600 font-semibold"
                  style={{
                    fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
                    fontSize: "20px",
                    fontWeight: "600",
                    letterSpacing: "-0.01em"
                  }}
                >
                  dsemath.ai
                </text>
              </svg>
            </div>
          </div>

          {/* Desktop Navigation - Absolutely rightmost */}
          <nav className="hidden md:flex items-center justify-center w-full space-x-1 lg:space-x-2 xl:space-x-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(item.href, e)}
                className="flex items-center space-x-1 lg:space-x-2 text-sky-600 hover:text-sky-700 transition-all duration-300 px-2 py-2 text-xs lg:px-3 lg:py-2.5 lg:text-sm xl:px-4 xl:py-3 xl:text-base bg-transparent rounded-none shadow-none hover:bg-sky-100 hover:shadow-lg hover:shadow-sky-200/60 hover:scale-105 hover:rounded-full font-sans font-medium tracking-normal"
              >
                <span className="hidden lg:block text-xs lg:text-sm xl:text-base">
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>
          {/* Login button rightmost */}
          <div className="hidden md:flex items-center pl-4 pr-6">
            <Link
              href={loginItem.href}
              onClick={(e) => handleNavClick(loginItem.href, e)}
              className="bg-sky-600 text-white font-semibold rounded-xl shadow-lg px-6 py-2 transition-all duration-300 hover:bg-sky-700 hover:scale-[1.04] focus:outline-none focus:ring-2 focus:ring-sky-300 font-sans"
            >
              {loginItem.name}
            </Link>
          </div>

          {/* Mobile Menu Button - Absolutely rightmost */}
          <button
            className="md:hidden rounded-full hover:bg-accent/50 transition-all duration-500 flex-shrink-0 mr-4 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4 flex flex-col items-center">
            <div className="flex flex-col space-y-2 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    handleNavClick(item.href, e);
                  }}
                  className="flex items-center space-x-3 text-sky-600 hover:text-sky-700 transition-all duration-300 p-3 bg-transparent rounded-none shadow-none cursor-pointer hover:bg-sky-100 hover:shadow-lg hover:shadow-sky-200/60 hover:scale-105 hover:rounded-full font-sans font-medium tracking-normal"
                >
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
            {/* Login button rightmost (bottom) */}
            <Link
              href={loginItem.href}
              onClick={(e) => handleNavClick(loginItem.href, e)}
              className="mt-4 bg-sky-600 text-white font-semibold rounded-xl shadow-lg px-6 py-2 transition-all duration-300 hover:bg-sky-700 hover:scale-[1.04] focus:outline-none focus:ring-2 focus:ring-sky-300 font-sans"
            >
              {loginItem.name}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export  function TempTopBar() {
  return (
    <div>
      this is a top bar
    </div>
  )
}