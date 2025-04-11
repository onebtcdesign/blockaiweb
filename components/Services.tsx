"use client";

import { useState } from "react";
import Image from "next/image";

const services = [
  {
    id: "crypto-design",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "Crypto Project Design",
    description: "From brand identity to user interface, we provide complete Web3 project design services to help your project stand out",
    features: [
      "NFT Art Design",
      "Token Brand Design",
      "DApp UI/UX",
      "Website/Dashboard Design",
      "Marketing Material Design"
    ]
  },
  {
    id: "development",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Full-Stack Development",
    description: "Our development team excels in blockchain technology, turning your ideas into fully functional Web3 applications",
    features: [
      "Smart Contract Development",
      "DApp Frontend Development",
      "Blockchain Integration",
      "Wallet Connection Integration",
      "API Development & Integration"
    ]
  },
  {
    id: "one-stop",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "One-Stop Development",
    description: "From concept to launch, we provide end-to-end project development services, including design, development, testing, and deployment",
    features: [
      "Product Strategy Consulting",
      "Technical Architecture Design",
      "Full-Stack Implementation",
      "Security Audit & Optimization",
      "Post-Launch Support & Maintenance"
    ]
  },
  {
    id: "cooperation",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Project Collaboration",
    description: "We establish long-term partnerships with project teams, providing ongoing technical support and business expansion services",
    features: [
      "Technical Advisory Services",
      "Customized Development Solutions",
      "Industry Resource Connections",
      "Marketing Support",
      "Investment Consulting Services"
    ]
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState<string>("crypto-design");

  return (
    <section className="py-20 relative" id="services">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/0 to-black/40 z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="text-neon-blue">What We </span>
            <span className="text-white">Can Do</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Blockai provides comprehensive blockchain services, from product design to technical implementation, meeting all your Web3 project needs in one place
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Service tabs */}
          <div className="flex flex-col space-y-4">
            {services.map((service) => (
              <div
                key={service.id}
                className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeService === service.id
                    ? "bg-black/40 border border-neon-purple/30 neon-border"
                    : "bg-black/20 border border-white/5 hover:border-neon-blue/20"
                }`}
                onClick={() => setActiveService(service.id)}
              >
                <div className="flex items-start">
                  <div className={`mr-4 p-3 rounded-md ${
                    activeService === service.id
                      ? "text-neon-blue bg-neon-blue/10"
                      : "text-gray-400 bg-black/40"
                  }`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-mono">{service.title}</h3>
                    <p className="text-gray-400 text-sm">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Service details */}
          {services.map((service) => (
            service.id === activeService && (
              <div key={`detail-${service.id}`} className="p-8 bg-black/30 backdrop-blur-sm rounded-lg border border-white/10">
                <h3 className="text-2xl font-bold mb-4 font-mono cyber-gradient bg-clip-text text-transparent">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-neon-blue font-mono">Key Services</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-neon-purple/20 flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-neon-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8">
                  <button className="px-6 py-2 bg-neon-blue/10 hover:bg-neon-blue/20 text-neon-blue border border-neon-blue/30 rounded-md font-medium transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 