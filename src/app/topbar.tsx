/* import React from "react";
import Link from "next/link";

const TopBar: React.FC = () => (
    <header style={{
        width: "100%",
        height: "60px",
        backgroundColor: "#22223b",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        padding: "0 24px",
        boxSizing: "border-box",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
    }}>
        <h1 style={{ margin: 0, fontSize: "1.5rem", letterSpacing: "1px" }}>
            <Link href="/" style={{ color: "#fff", textDecoration: "none" }}>
                dsemath.ai
            </Link>
        </h1>
        <nav style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
            <Link href="/ai-generator" style={{ color: "#fff", textDecoration: "none", marginLeft: "24px" }}>
                AI Generator
            </Link>
            <Link href="/question-bank" style={{ color: "#fff", textDecoration: "none", marginLeft: "24px" }}>
                Question Bank
            </Link>
            <Link href="/leaderboard" style={{ color: "#fff", textDecoration: "none", marginLeft: "24px" }}>
                Leaderboard
            </Link>
            <Link href="/dashboard" style={{ color: "#fff", textDecoration: "none", marginLeft: "24px" }}>
                Dashboard
            </Link>
            Me
            <div>
                <div>
                    Login
                </div>
                <div>
                    <Link href="/setting">Setting</Link>
                    Logout
                </div>
            </div>
        </nav>
    </header>
);

export default TopBar; */


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
    { name: "AI Generator", icon: Brain, href: "/ai-generator" },
    { name: "Question Bank", icon: Database, href: "/question-bank" },
    { name: "Leaderboard", icon: Trophy, href: "/leaderboard" },
    { name: "Dashboard", icon: User, href: "/dashboard" },
    { name: "Settings", icon: Settings, href: "/setting" },
  ];

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
      style={{ position: 'fixed' }}
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
                  className="fill-gray-800 font-semibold"
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
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 xl:space-x-3 pr-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(item.href, e)}
                className="flex items-center space-x-1 lg:space-x-2 rounded-full text-foreground/80 hover:text-white hover:bg-gradient-to-r hover:from-primary/90 hover:to-primary/70 transition-all duration-500 group hover:shadow-lg hover:shadow-primary/25 cursor-pointer px-2 py-2 text-xs lg:px-3 lg:py-2.5 lg:text-sm xl:px-4 xl:py-3 xl:text-base"
              >
                <item.icon className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 group-hover:scale-110 transition-all duration-500" />
                <span className="hidden lg:block text-xs lg:text-sm xl:text-base font-medium">
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>

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
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    handleNavClick(item.href, e);
                  }}
                  className="flex items-center space-x-3 text-foreground hover:text-white bg-white/50 hover:bg-gradient-to-r hover:from-primary/90 hover:to-primary/70 transition-all duration-300 p-3 rounded-xl hover:shadow-lg backdrop-blur-sm cursor-pointer"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
