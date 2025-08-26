"use client";

import { Menu, X } from 'lucide-react';
import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { name: "AI Generator", href: "/ai-generator" },
  { name: "Question Bank", href: "/question-bank" },
  { name: "Community", href: "/community" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Settings", href: "/settings" },
];

export default function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 left-0 right-0 z-50 transition-[height,background-color,backdrop-filter,box-shadow] duration-300 ease-in-out
        ${ isScrolled ? 'h-12 bg-white backdrop-blur-none border-b border-gray-200 shadow-lg' : 'h-[68px] bg-white backdrop-blur-none border-b border-gray-100 shadow-md'
      }`}
    >
      <div className="flex items-center justify-between px-0 w-full h-full">
        <Logo />
        <NavBar />
        <LoginButton />

        {/* Mobile Menu Button - Absolutely rightmost */}
        <button
          className="lg:hidden rounded-full hover:bg-accent/50 transition-all duration-500 flex-shrink-0 mr-4 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? ( <X className="w-6 h-6" />) : (<Menu className="w-6 h-6" />)}
        </button>
      </div>
      {isMenuOpen && <MobileNavBar />}
    </header>
  );
}

function Logo() {
  return (
    <Link className="pl-4" href="/">
      <svg 
        width="140" height="32" viewBox="0 0 140 32" fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="h-8"
      >
        <text
          x="0" y="24"
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
    </Link>
  )
}

function NavBar() {
  return (
    <nav className="hidden lg:flex items-center justify-center w-full space-x-1 lg:space-x-2 xl:space-x-3">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="space-x-1 lg:space-x-2 text-sky-600 hover:text-sky-700 transition-all duration-300 px-2 py-2 text-xs lg:px-3 lg:py-2.5 lg:text-sm xl:px-4 xl:py-3 xl:text-base bg-transparent rounded-none shadow-none hover:bg-sky-100 hover:shadow-lg hover:shadow-sky-200/60 hover:scale-105 hover:rounded-full font-sans font-medium tracking-normal"
        >
          <span className="hidden md:block text-xs lg:text-sm xl:text-base">
            {item.name}
          </span>
        </Link>
      ))}
    </nav>
  )
}

function LoginButton() {
  return (
    <div className="hidden md:flex items-center pl-4 pr-6">
      <Link
        href='/login'
        className="bg-sky-600 text-white font-semibold rounded-xl shadow-lg px-6 py-2 transition-all duration-300 hover:bg-sky-700 hover:scale-[1.04] focus:outline-none focus:ring-2 focus:ring-sky-300 font-sans"
      >
        Login
      </Link>
    </div>
  )
}

function MobileNavBar() {
  return (
    <nav className="lg:hidden pb-4 border-t border-gray-200 pt-4 flex flex-col items-center bg-blue-50 shadow-md">
        {navItems.map((item) => 
          <Link
            key={item.name}
            href={item.href}
            onClick={(e) => {

            }}
            className="flex items-center space-x-3 text-sky-600 active:text-sky-700 transition-all duration-300 p-3 bg-transparent rounded-none shadow-none cursor-pointer active:bg-sky-100 hover:shadow-lg active:shadow-sky-200/60 active:scale-105 focus:rounded-full font-sans font-medium tracking-normal"
          >
            <span>{item.name}</span>
          </Link>
        )}

      {/* Login button rightmost (bottom) */}
      <Link
        href={'/login'}
        className="mt-4 bg-sky-600 text-white font-semibold rounded-xl shadow-lg px-6 py-2 transition-all duration-300 hover:bg-sky-700 hover:scale-[1.04] focus:outline-none focus:ring-2 focus:ring-sky-300 font-sans"
      >
        Login
      </Link>
    </nav>
  )
}