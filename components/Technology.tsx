"use client";

import { useState } from "react";
import Image from "next/image";

const techCategories = [
  {
    id: "frontend",
    name: "Frontend Technologies",
    description: "We use the latest frontend technology stack to build modern Web3 application interfaces, ensuring a smooth user experience and beautiful design",
    technologies: [
      {
        name: "Next.js",
        icon: "/tech/nextjs.svg", // Replace with actual icon in production
        description: "High-performance React framework for Web3 applications, supporting server-side rendering and static site generation"
      },
      {
        name: "React",
        icon: "/tech/react.svg",
        description: "JavaScript library for building responsive user interfaces, providing smooth interaction experience for DApps"
      },
      {
        name: "Vue",
        icon: "/tech/vue.svg",
        description: "Lightweight progressive JavaScript framework for building flexible user interfaces"
      },
      {
        name: "TailwindCSS",
        icon: "/tech/tailwind.svg",
        description: "Utility-first CSS framework for rapidly building custom-designed modern interfaces"
      },
      {
        name: "TypeScript",
        icon: "/tech/typescript.svg",
        description: "Superset of JavaScript that adds static type definitions, improving code quality and development efficiency"
      }
    ]
  },
  {
    id: "backend",
    name: "Backend Technologies",
    description: "Our backend architecture uses high-performance, scalable technology stack to ensure system stability and security",
    technologies: [
      {
        name: "Java",
        icon: "/tech/java.svg",
        description: "Preferred language for enterprise applications, providing high-performance, reliable backend services"
      },
      {
        name: "Node.js",
        icon: "/tech/nodejs.svg",
        description: "JavaScript runtime built on Chrome's V8 engine for building fast network applications"
      },
      {
        name: "GraphQL",
        icon: "/tech/graphql.svg",
        description: "Query language for APIs that provides more efficient and flexible ways to request data"
      },
      {
        name: "PostgreSQL",
        icon: "/tech/postgresql.svg",
        description: "Powerful open-source relational database system supporting complex queries and transactions"
      },
      {
        name: "Redis",
        icon: "/tech/redis.svg",
        description: "In-memory data structure store used as database, cache, and message broker"
      }
    ]
  },
  {
    id: "blockchain",
    name: "Blockchain Technologies",
    description: "We are proficient in multiple blockchain platforms and smart contract development, providing solid technical foundation for your Web3 projects",
    technologies: [
      {
        name: "Ethereum",
        icon: "/tech/ethereum.svg",
        description: "The most popular smart contract platform, supporting decentralized applications and DeFi projects"
      },
      {
        name: "Solidity",
        icon: "/tech/solidity.svg",
        description: "Primary programming language for Ethereum smart contracts, used to implement complex on-chain logic"
      },
      {
        name: "Solana",
        icon: "/tech/solana.svg",
        description: "High-performance blockchain supporting fast transactions and low-fee application development"
      },
      {
        name: "BSC",
        icon: "/tech/bsc.svg",
        description: "Binance Smart Chain, EVM-compatible high-performance blockchain supporting DeFi and GameFi projects"
      },
      {
        name: "IPFS",
        icon: "/tech/ipfs.svg",
        description: "Distributed file system providing decentralized storage solutions for Web3 applications"
      }
    ]
  }
];

const Technology = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  
  const currentCategory = techCategories.find(category => category.id === activeCategory);

  return (
    <section className="py-20 relative" id="technology">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-background to-black/60 z-0"></div>
      
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-3 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent">
            Technology Framework
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            We adopt advanced technology stack to provide high-performance, secure and reliable development experience for Web3 projects
          </p>
        </div>
        
        {/* Technology category tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {techCategories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-neon-blue/20 text-neon-blue border border-neon-blue/50"
                  : "bg-black/30 text-gray-300 border border-white/10 hover:border-neon-blue/30"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Current category description */}
        {currentCategory && (
          <div className="mb-12">
            <p className="text-lg text-center text-gray-300 max-w-3xl mx-auto">
              {currentCategory.description}
            </p>
          </div>
        )}
        
        {/* Technology list */}
        {currentCategory && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {currentCategory.technologies.map((tech, index) => (
              <div 
                key={index} 
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-neon-blue/30 transition-all duration-300 group"
              >
                <div className="mb-4 relative h-16 w-16 mx-auto">
                  {/* Temporary icon placeholder, replace with actual icons in production */}
                  <div className={`w-full h-full rounded-md bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center text-${activeCategory === "frontend" ? "neon-blue" : activeCategory === "backend" ? "neon-purple" : "neon-pink"}`}>
                    <span className="text-xl font-bold">{tech.name.charAt(0)}</span>
                  </div>
                  
                  {/* Actual icons */}
                  {/* <Image 
                    src={tech.icon} 
                    alt={tech.name} 
                    fill 
                    className="object-contain"
                  /> */}
                </div>
                
                <h3 className="text-lg font-bold text-center mb-2 text-white font-mono">
                  {tech.name}
                </h3>
                
                <p className="text-sm text-gray-400 text-center">
                  {tech.description}
                </p>
                
                {/* Glow effect on hover */}
                <div className="mt-4 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        )}
        
        {/* Technology advantages */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black/30 backdrop-blur-sm border border-white/5 rounded-lg p-6 hover:border-neon-purple/20 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-neon-purple/20 flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neon-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center mb-3 text-white font-mono">High Performance</h3>
            <p className="text-gray-400 text-center">
              Our technical architecture is optimized to ensure applications maintain fast responsiveness and stable operation in various environments
            </p>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm border border-white/5 rounded-lg p-6 hover:border-neon-blue/20 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-neon-blue/20 flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center mb-3 text-white font-mono">Secure & Reliable</h3>
            <p className="text-gray-400 text-center">
              We follow industry best practices and security standards to protect user data and asset security, preventing potential risks
            </p>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm border border-white/5 rounded-lg p-6 hover:border-neon-pink/20 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-neon-pink/20 flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neon-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-center mb-3 text-white font-mono">Scalability</h3>
            <p className="text-gray-400 text-center">
              Our technical solutions have good scalability, capable of smooth expansion with business growth to meet future needs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology; 