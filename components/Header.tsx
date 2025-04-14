"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Zap, MessageSquare, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const [isMobile, setIsMobile] = useState(false);
  const [showAITooltip, setShowAITooltip] = useState(false);

  const navItems: NavItem[] = [
    { name: "Home", url: "/", icon: Home },
    { name: "AI", url: "#", icon: Zap },
    { name: "Contact", url: "#contact", icon: MessageSquare }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleScroll();
    handleResize();
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Hide AI tooltip after 2 seconds
    if (showAITooltip) {
      const timer = setTimeout(() => {
        setShowAITooltip(false);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [showAITooltip]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
    }`}>
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 flex flex-col items-center">
        {/* Centered Tubelight NavBar */}
        <div className="self-center">
          <div className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.name;

              return (
                <div key={item.name} className="relative">
                  <Link
                    href={item.url}
                    onClick={(e) => {
                      // For Home
                      if (item.url === "/") {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setActiveTab(item.name);
                      }
                      // For AI
                      else if (item.name === "AI") {
                        e.preventDefault();
                        setActiveTab(item.name);
                        setShowAITooltip(true);
                      }
                      // For other links (Contact)
                      else {
                        setActiveTab(item.name);
                      }
                    }}
                    className={cn(
                      "relative cursor-pointer text-sm font-semibold px-8 py-2 rounded-full transition-colors flex items-center gap-2",
                      "text-foreground/80 hover:text-primary",
                      isActive && "bg-muted text-primary",
                    )}
                  >
                    <Icon size={16} className="md:mr-1" />
                    <span className={isMobile ? "text-xs" : ""}>{item.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="lamp"
                        className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      >
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                          <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                          <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                          <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                        </div>
                      </motion.div>
                    )}
                  </Link>
                  
                  {/* Coming soon tooltip for AI */}
                  {item.name === "AI" && showAITooltip && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs py-1 px-3 rounded-md whitespace-nowrap"
                    >
                      Coming soon
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 