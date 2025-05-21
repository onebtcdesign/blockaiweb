"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulating API call - replace with your actual newsletter subscription API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success case
      setSubscriptionStatus({
        success: true,
        message: "Subscribed successfully! Thank you."
      });
      
      // Clear input
      setEmail("");
    } catch (error) {
      // Error case
      setSubscriptionStatus({
        success: false,
        message: "Failed to subscribe. Please try again."
      });
    } finally {
      setIsSubmitting(false);
      
      // Clear message after 3 seconds
      setTimeout(() => {
        setSubscriptionStatus(null);
      }, 3000);
    }
  };
  
  return (
    <footer className="bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-12">
          {/* Left Column: Logo, Tagline, Social Icons */}
          <div>
            <div className="flex items-center gap-4">
              <Image 
                src="/blockai_logo.jpg" 
                alt="BlockAI" 
                width={48} 
                height={48}
                className="rounded"
              />
              <h2 className="text-xl font-semibold text-white">BLOCKAI</h2>
            </div>
            <p className="mt-4 text-lg font-medium text-gray-300">
              Crafting Your Vision into Web3 Reality
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              {/* X (Twitter) Icon */}
              <a 
                href="#" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 text-gray-400 hover:text-white transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
              
              {/* Telegram Icon */}
              <a 
                href="#" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 text-gray-400 hover:text-white transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.417 15.181l-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693 12.643-7.911c.595-.394 1.136-.176.691.218z"/>
                </svg>
              </a>
              
              {/* GitHub Icon */}
              <a 
                href="#" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 text-gray-400 hover:text-white transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Right Column: Newsletter Subscription */}
          <div className="lg:pl-8">
            <h2 className="text-xl font-semibold text-white mb-2">
              Subscribe to Newsletter
            </h2>
            <p className="text-sm text-gray-400 mb-4">
            Subscribe and follow the latest news from BLOCKAI
            </p>
            
            <form onSubmit={handleSubscribe} className="relative">
              <div className="flex rounded-lg overflow-hidden border border-gray-600">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-2 bg-transparent placeholder-gray-500 text-white focus:outline-none"
                  required
                />
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-yellow-500 text-black font-medium hover:bg-yellow-600 transition disabled:opacity-50"
                >
                  {isSubmitting ? 
                    <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg> : 
                    "Subscribe"
                  }
                </button>
              </div>
              
              {subscriptionStatus && (
                <div className={`mt-2 text-sm ${
                  subscriptionStatus.success ? "text-green-400" : "text-red-400"
                }`}>
                  {subscriptionStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-12 pt-6">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} BlockAI. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 