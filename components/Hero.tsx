"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Create 3D particle effect
    const createParticleEffect = () => {
      const particles: HTMLDivElement[] = [];
      const particleCount = window.innerWidth < 768 ? 30 : 60;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute rounded-full opacity-70';
        
        // Random size
        const size = Math.random() * 6 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random color
        const colors = ['#7928ca', '#00f0ff', '#ff0080'];
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Random animation duration
        const duration = Math.random() * 20 + 10;
        particle.style.animation = `float ${duration}s ease-in-out infinite`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(particle);
        particles.push(particle);
      }
      
      // Add animation keyframes
      const style = document.createElement('style');
      style.textContent = `
        @keyframes float {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          25% { transform: translate3d(10px, 10px, 10px) rotate(5deg); }
          50% { transform: translate3d(-5px, 15px, 5px) rotate(-5deg); }
          75% { transform: translate3d(-10px, 5px, -10px) rotate(3deg); }
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        particles.forEach(p => p.remove());
        style.remove();
      };
    };
    
    const cleanup = createParticleEffect();
    return cleanup;
  }, []);

  return (
    <section className="min-h-screen pt-24 pb-16 relative overflow-hidden" id="hero">
      <div ref={containerRef} className="absolute inset-0 z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start max-w-5xl mx-auto mt-12 lg:mt-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-mono tracking-tight">
            <span className="block cyber-gradient bg-clip-text text-transparent pb-2">Blockchain Innovation</span>
            <span className="text-glow">Driving the Web3 Future</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-2xl font-light">
            <span className="inline-block">Blockai is a one-stop service platform focused on the</span> 
            <span className="text-neon-blue font-medium"> Crypto / Web3 </span> 
            <span className="inline-block">industry, providing top-tier</span>
            <span className="text-neon-pink font-medium"> product design</span>,
            <span className="text-neon-blue font-medium"> full-stack development</span> and
            <span className="text-neon-purple font-medium"> operational services</span> for blockchain projects
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="px-8 py-3 bg-neon-purple hover:bg-neon-purple/80 text-white rounded-md font-medium transition-all duration-300 neon-border">
              Explore Services
            </button>
            <button className="px-8 py-3 bg-transparent hover:bg-white/5 text-white border border-neon-blue rounded-md font-medium transition-all duration-300">
              Contact Us
            </button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 w-full max-w-3xl mx-auto">
            {["Cutting-Edge Tech", "Secure & Reliable", "Efficient Delivery", "Continuous Innovation"].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-md bg-neon-purple/20 flex items-center justify-center mb-3 border border-neon-purple/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-mono">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 