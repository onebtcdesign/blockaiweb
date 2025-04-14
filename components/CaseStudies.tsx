"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

// Case study data
const caseStudies = [
  {
    id: 1,
    title: "MetaQuirk",
    category: "NFT",
    image: "/metaquirk.png",
    description: "MetaQuirk Club is an innovative NFT platform based on blockchain technology, specifically designed for users who wish to create, publish, and manage unique NFT collections. The platform supports multiple mainstream blockchain networks and offers a highly customizable sales website as well as a membership management backend, helping users build a dedicated NFT ecosystem while enhancing the interactivity and value of their NFT projects.",
    technologies: ["React", "Solidity", "IPFS", "Polygon"],
    link: "https://www.metaquirk.net/resources/metaquirkclub-doc"
  },
  {
    id: 2,
    title: "WhoTheFuck",
    category: "DAPP",
    image: "/whotehfuck.png",
    description: "This is a face search application built on blockchain that allows users to upload pictures and search for similar faces.",
    technologies: ["Vue", "Ethereum", "Zero-knowledge proof", "TypeScript"],
    link: "https://whothefuck.wtf/"
  },
  {
    id: 3,
    title: "DMPay",
    category: "Wallet",
    image: "/dmpay.png",
    description: "Fast, simple, and secure transactions with a New Zealand-registered company you can trust.",
    technologies: ["React Native", "Solana", "Ethereum", "GraphQL"],
    link: "https://dmpay.vercel.app/"
  }
];

const CaseStudies = () => {
  const ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [height, setHeight] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
    if (sectionRef.current) {
      const sectionRect = sectionRef.current.getBoundingClientRect();
      setSectionHeight(sectionRect.height);
    }
    
    // 添加窗口大小变化监听
    const handleResize = () => {
      if (ref.current) {
        setHeight(ref.current.getBoundingClientRect().height);
      }
      if (sectionRef.current) {
        setSectionHeight(sectionRef.current.getBoundingClientRect().height);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [ref, sectionRef]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 10%", "end 50%"],
  });

  // 确保线条长度不超过section高度
  const safeHeight = Math.min(height, sectionHeight - 100); // 减去一些余量确保不会溢出
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, safeHeight]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section ref={sectionRef} className="py-36 relative overflow-hidden" id="case-studies">
      {/* 背景效果 */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5 z-0"></div>
      
      <div className="w-full font-sans relative">
        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold mb-2 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent">
              Our Case Studies
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              We collaborate with top Web3 projects, providing innovative solutions to help them succeed
            </p>
          </div>
        </div>

        <div ref={ref} className="relative max-w-[1200px] mx-auto pb-10">
          {caseStudies.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-6 md:pt-20 md:gap-8"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-24 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-600 border border-neutral-500 p-2" />
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-neutral-500">
                  {item.title}
                </h3>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-3 text-left font-bold text-neutral-500">
                  {item.title}
                </h3>
                <div>
                  <p className="text-gray-300 text-sm md:text-base font-normal mb-4">
                    {item.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.map((tech, idx) => (
                      <span key={idx} className="text-xs bg-black/50 text-neon-blue border border-neon-blue/30 px-2 py-0.5 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mb-8">
                    <Link 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="relative block h-44 md:h-56 w-full md:w-[calc(50%-0.5rem)] rounded-lg overflow-hidden border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:border-white/30"
                    >
                      <Image 
                        src={item.image} 
                        alt={item.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div
            style={{
              height: safeHeight + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-500 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;