"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

// Case study data
const caseStudies = [
  {
    id: 1,
    title: "MetaQuirk",
    category: "NFT",
    image: "/metaquirk.png",
    description: "An innovative NFT platform for creating, publishing, and managing unique NFT collections across multiple blockchain networks.",
    technologies: ["React", "Solidity", "IPFS", "Polygon"],
    link: "https://www.metaquirk.net/resources/metaquirkclub-doc"
  },
  {
    id: 2,
    title: "WhoTheFuck",
    category: "DAPP",
    image: "/whotehfuck.png",
    description: "A face search application built on blockchain technology allowing users to upload pictures and search for similar faces.",
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
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="case-studies" className="relative overflow-hidden module-background py-24">
      {/* 背景渐变 */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-neutral-900/90 z-0"></div>
      
      {/* 背景图案和纹理 */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5 z-0"></div>
      <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay"></div>
      
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent">
            Our Case Studies
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            We collaborate with top Web3 projects, providing innovative solutions to help them succeed
          </p>
        </motion.div>

        {/* Case studies grid - 3 column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.15 * index,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 h-full"
            >
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-[1px] rounded-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_0_15px_rgba(0,0,0,0.5)]">
                <div className="h-full rounded-2xl overflow-hidden shadow-[inset_0_2px_10px_rgba(0,0,0,0.3)] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
                  {/* Image container with category badge */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs py-1 px-3 rounded-full border border-white/10 transition-all duration-300 hover:border-[#00f0ff]/50 hover:shadow-[0_0_10px_rgba(0,240,255,0.3)] hover:text-[#00f0ff]">
                      {item.category}
                    </div>
                    {/* Dark gradient overlay at bottom of image */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-5 min-h-[3rem]">
                      {item.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs backdrop-blur-md bg-white/5 border border-white/10 text-gray-300 px-2 py-0.5 rounded-full transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center bg-gradient-to-r from-[#7928ca] via-[#00f0ff] to-[#ff0080] text-white font-medium rounded-lg px-4 py-2.5 text-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.6)] hover:from-[#ff0080] hover:via-[#00f0ff] hover:to-[#7928ca]"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;