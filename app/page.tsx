"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// 导入组件
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Team from "@/components/Team";
import Technology from "@/components/Technology";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  // 确保组件只在客户端渲染
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative">      
      <div className="relative z-10">
        <Header />
        
        <main className="overflow-hidden">
          <Hero />
          <Services />
          <CaseStudies />
          <Team />
          <Technology />
          <Faq />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
