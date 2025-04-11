"use client";

import { useState, useRef } from "react";
import Image from "next/image";

// Case study data
const caseStudies = [
  {
    id: 1,
    name: "MetaQuirk",
    category: "NFT",
    image: "/projects/metaquirk.jpg", // Need to replace with actual image
    description: "Innovative NFT trading platform with advanced royalty distribution and community governance systems",
    technologies: ["React", "Solidity", "IPFS", "Polygon"],
    link: "#"
  },
  {
    id: 2,
    name: "WhoTheFuck",
    category: "DAPP",
    image: "/projects/whothefuck.jpg", // Need to replace with actual image
    description: "Blockchain-based identity verification application providing privacy-protected authentication services",
    technologies: ["Vue", "Ethereum", "Zero-knowledge proof", "TypeScript"],
    link: "#"
  },
  {
    id: 3,
    name: "DMPay",
    category: "Wallet",
    image: "/projects/dmpay.jpg", // Need to replace with actual image
    description: "Multi-chain cryptocurrency payment solution integrated with mainstream public chains and Layer 2",
    technologies: ["React Native", "Solana", "Ethereum", "GraphQL"],
    link: "#"
  },
  {
    id: 4,
    name: "CryptoFlash",
    category: "CEX",
    image: "/projects/cryptoflash.jpg", // Need to replace with actual image
    description: "High-performance cryptocurrency exchange with advanced trading engine and low-latency execution system",
    technologies: ["Next.js", "WebSocket", "Java", "PostgreSQL"],
    link: "#"
  },
  {
    id: 5,
    name: "DefiVault",
    category: "DEFI",
    image: "/projects/defivault.jpg", // Need to replace with actual image
    description: "Decentralized finance protocol offering liquidity mining, lending, and synthetic asset features",
    technologies: ["React", "Solidity", "TheGraph", "Chainlink"],
    link: "#"
  },
  {
    id: 6,
    name: "MoonDoge",
    category: "Memecoin",
    image: "/projects/moondoge.jpg", // Need to replace with actual image
    description: "Innovative meme token ecosystem including NFTs, games, and community governance",
    technologies: ["React", "Solidity", "BSC", "Node.js"],
    link: "#"
  }
];

// Categories
const categories = ["All", "NFT", "DAPP", "Wallet", "CEX", "DEFI", "Memecoin"];

const CaseStudies = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCase, setSelectedCase] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredCases = activeCategory === "All" 
    ? caseStudies 
    : caseStudies.filter(item => item.category === activeCategory);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 relative" id="case-studies">
      {/* Background effect */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="text-white">Our</span>
            <span className="text-neon-pink"> Case </span>
            <span className="text-white">Studies</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We collaborate with top Web3 projects, providing innovative solutions to help them succeed in the blockchain space
          </p>
        </div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-neon-purple text-white neon-border"
                  : "bg-black/30 text-gray-300 border border-white/10 hover:border-neon-purple/50"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Case studies showcase - horizontal scroll container */}
        <div className="relative mb-8">
          {/* Scroll button - left */}
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 p-2 rounded-full border border-neon-blue/30 text-neon-blue hover:bg-black/90 transition-all duration-300 -ml-4 hidden md:block"
            onClick={() => scroll('left')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Scroll container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory py-4"
            style={{ scrollbarWidth: 'none' }}
          >
            <div className="flex gap-6 px-4 md:px-8">
              {filteredCases.map((item) => (
                <div 
                  key={item.id}
                  className="min-w-[280px] sm:min-w-[320px] snap-center"
                  onClick={() => setSelectedCase(selectedCase === item.id ? null : item.id)}
                >
                  <div className="relative group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                      {/* Temporary placeholder, replace with actual images in production */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-neon-purple/40 via-neon-blue/30 to-neon-pink/40 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center ${item.category.toLowerCase()}`}>
                        <span className="text-white font-bold text-xl">{item.name}</span>
                      </div>
                      
                      {/* Replace placeholder with image when loaded */}
                      {/* <Image 
                        src={item.image} 
                        alt={item.name} 
                        fill 
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      /> */}
                    </div>
                    
                    <div className="absolute -bottom-1 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 pt-8 transform transition-transform duration-300 group-hover:-translate-y-2">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-bold text-white font-mono">{item.name}</h3>
                        <span className="text-xs bg-neon-purple/80 text-white px-2 py-1 rounded-full">
                          {item.category}
                        </span>
                      </div>
                      
                      {selectedCase === item.id && (
                        <div className="mt-2 animate-fadeIn">
                          <p className="text-gray-300 text-sm mb-3">{item.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {item.technologies.map((tech, index) => (
                              <span key={index} className="text-xs bg-black/50 text-neon-blue border border-neon-blue/30 px-2 py-1 rounded-full">
                                {tech}
                              </span>
                            ))}
                          </div>
                          <a href={item.link} className="mt-3 inline-block text-neon-pink hover:underline text-sm">
                            View Details →
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Scroll button - right */}
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 p-2 rounded-full border border-neon-blue/30 text-neon-blue hover:bg-black/90 transition-all duration-300 -mr-4 hidden md:block"
            onClick={() => scroll('right')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="text-center mt-8">
          <a href="#" className="px-8 py-3 bg-transparent hover:bg-neon-purple/10 text-neon-purple border border-neon-purple rounded-md font-medium transition-all duration-300 inline-flex items-center">
            View More Cases
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Additional styles */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }
        
        .nft {
          background-color: rgba(121, 40, 202, 0.3);
        }
        .dapp {
          background-color: rgba(0, 240, 255, 0.3);
        }
        .wallet {
          background-color: rgba(255, 0, 128, 0.3);
        }
        .cex {
          background-color: rgba(255, 153, 0, 0.3);
        }
        .defi {
          background-color: rgba(0, 255, 163, 0.3);
        }
        .memecoin {
          background-color: rgba(255, 214, 0, 0.3);
        }
      `}</style>
    </section>
  );
};

export default CaseStudies; 