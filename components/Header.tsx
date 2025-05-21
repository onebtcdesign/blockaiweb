"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [language, setLanguage] = useState<"en" | "zh">("en");
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAITooltip, setShowAITooltip] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleResize();
    handleScroll(); // Initial check
    
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (showLanguageDropdown) {
        setShowLanguageDropdown(false);
      }
      
      // Close mobile menu when clicking outside
      if (
        mobileMenuOpen && 
        mobileMenuRef.current && 
        mobileButtonRef.current && 
        !mobileMenuRef.current.contains(event.target as Node) && 
        !mobileButtonRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showLanguageDropdown, mobileMenuOpen]);

  // Hide AI tooltip after a delay
  useEffect(() => {
    if (showAITooltip) {
      const timer = setTimeout(() => {
        setShowAITooltip(false);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [showAITooltip]);

  const setLanguageOption = (lang: "en" | "zh") => {
    setLanguage(lang);
    setShowLanguageDropdown(false);
  };

  const handleNavigationClick = (item: { name: string; url: string }) => {
    if (item.name === "AI") {
      setShowAITooltip(true);
    } else {
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { name: "Home", url: "/" },
    { name: "AI", url: "/ai" },
    { name: "Alpha Tool", url: "/alpha-tool" }
  ];

  return (
    <>
      {/* Mobile Navigation Menu - Below header in code but visually behind header due to z-index */}
      {isMobile && (
        <div 
          ref={mobileMenuRef}
          className={`fixed inset-0 top-0 bg-black/95 backdrop-blur-md z-[90] transition-all duration-300 ${
            mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="flex flex-col h-full pt-24 p-6 overflow-y-auto">
            {/* Navigation Items */}
            <nav className="mb-8">
              <ul className="space-y-6">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.name === "AI" ? "#" : item.url}
                      onClick={() => handleNavigationClick(item)}
                      className={cn(
                        "text-lg font-medium block py-2 transition-colors duration-200",
                        pathname === item.url 
                          ? "text-primary" 
                          : "text-gray-300 hover:text-white"
                      )}
                    >
                      {item.name}
                      {item.name === "AI" && (
                        <span className="ml-2 text-xs text-gray-500">Coming Soon...</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* Language Selector */}
            <div className="mt-auto pt-4 border-t border-gray-800">
              <p className="text-sm text-gray-500 mb-4">Language</p>
              <div className="space-y-3">
                <button
                  onClick={() => { setLanguageOption("en"); setMobileMenuOpen(false); }}
                  className={`w-full text-left px-3 py-2 rounded-md text-lg ${language === "en" ? "bg-gray-800 text-white" : "text-gray-400"}`}
                >
                  English
                </button>
                <button
                  onClick={() => { setLanguageOption("zh"); setMobileMenuOpen(false); }}
                  className={`w-full text-left px-3 py-2 rounded-md text-lg ${language === "zh" ? "bg-gray-800 text-white" : "text-gray-400"}`}
                >
                  简体中文
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header - Always on top with highest z-index */}
      <header className={cn(
        "fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-6 py-4 transition-all duration-300",
        scrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-gray-800/50"
          : mobileMenuOpen ? "bg-black" : "bg-transparent" 
      )}>
        {/* Left: Logo */}
        <div className="flex items-center relative z-[101]">
          <Link href="/" className="flex items-center">
            <Image 
              src="/blockai_logo.jpg" 
              alt="BlockAI Logo"
              width={40} 
              height={40}
              className="rounded object-contain"
            />
          </Link>
        </div>

        {/* Middle: Navigation - Desktop Only */}
        {!isMobile && (
          <nav className="flex items-center mx-auto">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.name} className="relative">
                  <Link 
                    href={item.name === "AI" ? "#" : item.url}
                    onClick={(e) => {
                      if (item.name === "AI") {
                        e.preventDefault();
                        setShowAITooltip(true);
                      }
                    }}
                    className={cn(
                      "relative px-2 py-1 text-sm font-medium transition-colors duration-200",
                      pathname === item.url 
                        ? "text-primary" 
                        : "text-gray-400 hover:text-white"
                    )}
                  >
                    {item.name}
                  </Link>
                  
                  {/* Coming soon tooltip for AI */}
                  {item.name === "AI" && showAITooltip && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-md whitespace-nowrap z-50">
                      Coming Soon...
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Right: Language Dropdown - Desktop Only or Mobile Menu Button */}
        {!isMobile ? (
          <div className="relative z-[101]">
            <button
              onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              className="px-3 py-1 border border-gray-700 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-gray-800 flex items-center gap-1"
            >
              {language === "en" ? "English" : "简体中文"}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="12" 
                height="12" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                className={`transition-transform duration-200 ${showLanguageDropdown ? 'rotate-180' : ''}`}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {showLanguageDropdown && (
              <div className="absolute right-0 mt-1 w-32 bg-gray-900 border border-gray-700 rounded-md shadow-lg py-1 z-50">
                <button
                  onClick={() => setLanguageOption("en")}
                  className={`w-full text-left px-3 py-2 text-sm ${language === "en" ? "text-primary" : "text-gray-300"} hover:bg-gray-800`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguageOption("zh")}
                  className={`w-full text-left px-3 py-2 text-sm ${language === "zh" ? "text-primary" : "text-gray-300"} hover:bg-gray-800`}
                >
                  简体中文
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Mobile Menu Button */
          <button
            ref={mobileButtonRef}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center w-10 h-10 focus:outline-none z-[101]"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-4">
              <span className={`absolute h-0.5 w-full bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} style={{ top: '50%', transform: 'translateY(-50%)' }}></span>
              <span className={`absolute h-0.5 w-full bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45' : 'rotate-0'}`} style={{ top: mobileMenuOpen ? '50%' : '0', transform: mobileMenuOpen ? 'translateY(-50%)' : 'none' }}></span>
              <span className={`absolute h-0.5 w-full bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45' : 'rotate-0'}`} style={{ bottom: mobileMenuOpen ? '50%' : '0', transform: mobileMenuOpen ? 'translateY(50%)' : 'none' }}></span>
            </div>
          </button>
        )}
      </header>
    </>
  );
};

export default Header; 