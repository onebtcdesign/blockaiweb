"use client";

import { useState } from "react";
import Image from "next/image";

const techCategories = [
  {
    id: "frontend",
    name: "Frontend Technologies",
    description: "Modern Web3 application interfaces with smooth user experience",
    technologies: [
      { name: "Next.js", icon: "/tech/nextjs.svg" },
      { name: "React", icon: "/tech/react.svg" },
      { name: "Vue", icon: "/tech/vue.svg" },
      { name: "TailwindCSS", icon: "/tech/tailwind.svg" },
      { name: "TypeScript", icon: "/tech/typescript.svg" }
    ]
  },
  {
    id: "backend",
    name: "Backend Technologies",
    description: "High-performance, scalable architecture for system stability",
    technologies: [
      { name: "Java", icon: "/tech/java.svg" },
      { name: "Node.js", icon: "/tech/nodejs.svg" },
      { name: "GraphQL", icon: "/tech/graphql.svg" },
      { name: "PostgreSQL", icon: "/tech/postgresql.svg" },
      { name: "Redis", icon: "/tech/redis.svg" }
    ]
  },
  {
    id: "blockchain",
    name: "Blockchain Technologies",
    description: "Multiple blockchain platforms and smart contract development",
    technologies: [
      { name: "Ethereum", icon: "/tech/ethereum.svg" },
      { name: "Solidity", icon: "/tech/solidity.svg" },
      { name: "Solana", icon: "/tech/solana.svg" },
      { name: "BSC", icon: "/tech/bsc.svg" },
      { name: "IPFS", icon: "/tech/ipfs.svg" }
    ]
  }
];

const Technology = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  
  const currentCategory = techCategories.find(category => category.id === activeCategory);

  return (
    <section className="py-16 relative" id="technology">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-background to-black/60 z-0"></div>
      
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          {/* Left side - Title and category selectors */}
          <div className="w-full md:w-1/3 md:sticky md:top-24">
            <h2 className="text-3xl font-semibold mb-2 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent">
              Technology Framework
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              We use advanced technology stack to provide high-performance solutions for Web3 projects
            </p>
            
            {/* Category selector */}
            <div className="flex flex-col gap-3">
              {techCategories.map((category) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-lg text-sm font-medium text-left transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-neon-blue/20 text-neon-blue border-l-2 border-neon-blue"
                      : "bg-black/30 text-gray-300 border-l-2 border-transparent hover:border-neon-blue/30"
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Right side - Technology content */}
          <div className="w-full md:w-2/3">
            {currentCategory && (
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 text-white font-mono">
                  {currentCategory.name}
                </h3>
                <p className="text-sm text-gray-300">
                  {currentCategory.description}
                </p>
              </div>
            )}
            
            {/* Technology grid */}
            {currentCategory && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {currentCategory.technologies.map((tech, index) => (
                  <div 
                    key={index} 
                    className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:border-neon-blue/30 transition-all duration-300"
                  >
                    <div className="mb-3 relative h-10 w-10 mx-auto">
                      {/* Temporary icon placeholder */}
                      <div className={`w-full h-full rounded-md bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center text-${activeCategory === "frontend" ? "neon-blue" : activeCategory === "backend" ? "neon-purple" : "neon-pink"}`}>
                        <span className="text-base font-bold">{tech.name.charAt(0)}</span>
                      </div>
                      
                      {/* Actual icons would go here */}
                      {/* <Image src={tech.icon} alt={tech.name} fill className="object-contain" /> */}
                    </div>
                    
                    <h4 className="text-sm font-bold text-center text-white font-mono">
                      {tech.name}
                    </h4>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology; 