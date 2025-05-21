"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

// 导入组件
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Team from "@/components/Team";
import Technology from "@/components/Technology";
import Faq from "@/components/Faq";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimationWrapper from "@/components/ui/ScrollAnimationWrapper";

// Loading bar component
const LoadingBar = ({ isNavigating }: { isNavigating: boolean }) => (
  <div className={`loading-bar ${isNavigating ? 'active' : ''}`} />
);

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  // Handle anchor navigation with loading bar
  useEffect(() => {
    const handleNavigation = () => {
      setIsNavigating(true);
      setTimeout(() => setIsNavigating(false), 800);
    };

    // Listen for hash changes
    const handleHashChange = () => {
      if (window.location.hash) {
        handleNavigation();
      }
    };

    // Listen for anchor clicks
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (target && target.hash && target.origin === window.location.origin) {
        handleNavigation();
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    document.addEventListener('click', handleAnchorClick as EventListener);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('click', handleAnchorClick as EventListener);
    };
  }, []);

  // 确保组件只在客户端渲染
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative">
      <LoadingBar isNavigating={isNavigating} />
      
      <div className="relative z-10">
        <Header />
        
        <main className="overflow-hidden bg-gradient-to-b from-black via-neutral-950 to-black">
          <Hero />
          
          <Services />
          
          <CaseStudies />
          
          <Team />
          
          <Technology />
          
          <div className="relative overflow-hidden module-background">
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black z-0"></div>
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5 z-0"></div>
            <div className="module-connector-top"></div>
            <ScrollAnimationWrapper delay={0.1} stagger={true} distance={40}>
              <Faq />
            </ScrollAnimationWrapper>
            <div className="module-connector-bottom"></div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
