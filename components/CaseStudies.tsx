"use client";

import { useState } from "react";
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

  const filteredCases = activeCategory === "All" 
    ? caseStudies 
    : caseStudies.filter(item => item.category === activeCategory);

  return (
    <section className="py-16 relative" id="case-studies">
      {/* Background effect */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-0"></div>
      
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold mb-2 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent">
            Our Case Studies
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            We collaborate with top Web3 projects, providing innovative solutions to help them succeed
          </p>
        </div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
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
        
        {/* Case studies showcase - grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCases.map((item) => (
            <div 
              key={item.id}
              className="relative group cursor-pointer rounded-lg overflow-hidden"
              onClick={() => setSelectedCase(selectedCase === item.id ? null : item.id)}
            >
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
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-base font-bold text-white font-mono">{item.name}</h3>
                  <span className="text-xs bg-neon-purple/80 text-white px-2 py-0.5 rounded-full">
                    {item.category}
                  </span>
                </div>
                
                {selectedCase === item.id && (
                  <div className="mt-2 animate-fadeIn">
                    <p className="text-gray-300 text-sm mb-2">{item.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {item.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="text-xs bg-black/50 text-neon-blue border border-neon-blue/30 px-2 py-0.5 rounded-full">
                          {tech}
                        </span>
                      ))}
                      {item.technologies.length > 3 && (
                        <span className="text-xs text-gray-400">+{item.technologies.length - 3}</span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Additional styles */}
      <style jsx>{`
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