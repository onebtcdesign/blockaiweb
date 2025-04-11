"use client";

import { useState } from "react";

// FAQ data
const faqData = [
  {
    id: 1,
    question: "What services does Blockai offer?",
    answer: "Blockai provides comprehensive Web3 services, including product design (NFT, token branding, DApp UI/UX, etc.), full-stack development (smart contracts, blockchain integration, wallet connections, etc.), one-stop development (full-cycle service from concept to launch), and project collaboration (technical consultancy, resource connections, etc.). Whether you're a startup project or a team with an existing foundation, we can provide professional solutions tailored to your needs."
  },
  {
    id: 2,
    question: "What is the collaboration process with Blockai?",
    answer: "Collaborating with Blockai typically involves these steps: 1) Initial communication to understand your project requirements; 2) Requirement analysis and solution formulation; 3) Signing a cooperation agreement; 4) Beginning design and development work; 5) Periodic progress demonstrations and feedback adjustments; 6) Project delivery and launch; 7) Subsequent technical support and maintenance. We emphasize close communication with clients to ensure the project progresses smoothly according to expectations."
  },
  {
    id: 3,
    question: "How does Blockai ensure project security and quality?",
    answer: "We place a high priority on project security and quality, implementing a series of measures: 1) Following industry best practices and security standards; 2) Team members with extensive blockchain development experience; 3) Code undergoes rigorous review and testing; 4) Multiple rounds of internal security audits; 5) Collaboration with professional third-party security companies for external audits; 6) Continuous monitoring and system updates to promptly fix potential vulnerabilities. These measures collectively ensure that our delivered products maintain a high standard of security and quality."
  },
  {
    id: 4,
    question: "How long does project development typically take?",
    answer: "Project development timelines depend on multiple factors, including project complexity, functional requirements, and design specifications. Generally, a simple MVP (Minimum Viable Product) might require 4-6 weeks, medium-scale projects might need 2-4 months, while large complex projects could take 6 months or longer. Before project initiation, we provide more accurate time estimates based on detailed requirements analysis."
  },
  {
    id: 5,
    question: "Does Blockai provide maintenance and support services after project launch?",
    answer: "Yes, we offer comprehensive post-launch services, including technical maintenance, feature updates, performance optimization, and security monitoring. We provide different maintenance plans, from basic incident response to full-scale continuous development support. Clients can choose the appropriate service level based on their needs. Our goal is to establish long-term partnerships with clients and continuously add value to your projects."
  },
  {
    id: 6,
    question: "Does Blockai accept cryptocurrency payments?",
    answer: "Yes, we accept various cryptocurrencies as payment methods, including BTC, ETH, USDT, and other mainstream tokens. We also accept traditional fiat currency payments. Specific payment methods and terms will be detailed in the cooperation agreement. Our flexible payment options aim to provide maximum convenience for our clients."
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 relative" id="faq">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="text-white">Frequently </span>
            <span className="text-neon-pink">Asked Questions</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Here are answers to questions our clients frequently ask, which we hope will help you better understand our services
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {faqData.map((faq, index) => (
            <div 
              key={faq.id} 
              className="mb-6"
            >
              <button
                className={`w-full text-left p-6 rounded-lg transition-all duration-300 flex justify-between items-center ${
                  activeIndex === index
                    ? "bg-black/40 border border-neon-blue/50 shadow-lg shadow-neon-blue/10"
                    : "bg-black/20 border border-white/10 hover:border-neon-blue/30"
                }`}
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-medium pr-8">{faq.question}</span>
                <span className={`text-neon-blue transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index 
                    ? "max-h-96 opacity-100" 
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-4 text-gray-300 bg-black/30 border-l border-r border-b border-neon-blue/30 rounded-b-lg">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-6">
            Didn't find what you were looking for? Please contact us directly
          </p>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-neon-pink hover:bg-neon-pink/80 text-white rounded-md font-medium transition-all duration-300 inline-flex items-center"
          >
            Contact Us
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq; 