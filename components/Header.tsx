"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-40">
              <div className="absolute font-mono font-bold text-2xl text-white text-glow">
                <span className="text-neon-blue">Block</span>
                <span className="text-neon-pink">ai</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "Services", "Case Studies", "Team", "Technology", "FAQ", "Contact"].map((item, index) => (
              <Link 
                key={index} 
                href={`#${index === 0 ? "" : item.toLowerCase().replace(" ", "-")}`}
                className="text-foreground hover:text-neon-blue transition-colors font-mono tracking-wider"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-foreground" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-neon-purple/20">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {["Home", "Services", "Case Studies", "Team", "Technology", "FAQ", "Contact"].map((item, index) => (
                <Link 
                  key={index} 
                  href={`#${index === 0 ? "" : item.toLowerCase().replace(" ", "-")}`}
                  className="text-foreground hover:text-neon-blue transition-colors py-2 font-mono tracking-wider"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 