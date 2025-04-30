"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <footer className="relative py-16 bg-[#080808] overflow-hidden">
      {/* Subtle noise texture */}
      <div className="absolute inset-0 bg-noise opacity-5 mix-blend-overlay pointer-events-none"></div>
      
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-14">
          {/* Logo & Social Icons */}
          <div className="flex flex-col items-center lg:items-start">
            <motion.div 
              className="mb-6 flex items-center gap-3"
            >
              <Image 
                src="/blockai_logo.jpg" 
                alt="Blockai Logo"
                width={60}
                height={40}
                className="object-contain border border-gray-700"
              />
              <div className="flex flex-col">
                <span className="text-white text-xl font-semibold">Blockai</span>
                <span className="text-gray-400 text-xs">Crafting Your Vision into Web3 Reality</span>
              </div>
            </motion.div>
            
            <div className="flex space-x-4 mb-6">
              {[
                { icon: "twitter", href: "#", label: "Twitter" },
                { icon: "telegram", href: "#", label: "Telegram" },
                { icon: "github", href: "#", label: "GitHub" },
                { icon: "discord", href: "#", label: "Discord" }
              ].map((platform, index) => (
                <motion.a 
                  key={index} 
                  href={platform.href} 
                  aria-label={platform.label}
                  className="w-10 h-10 rounded-full bg-[#121212] flex items-center justify-center border border-gray-700 text-gray-400 transition-all duration-300 hover:border-gray-600 hover:text-white"
                  whileHover={{ scale: 1.1 }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {platform.icon === "twitter" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  )}
                  {platform.icon === "telegram" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.417 15.181l-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693 12.643-7.911c.595-.394 1.136-.176.691.218z"/>
                    </svg>
                  )}
                  {platform.icon === "github" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  )}
                  {platform.icon === "discord" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                    </svg>
                  )}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Newsletter Subscription */}
          <div className="w-full max-w-md">
            <h4 className="text-xl font-semibold mb-3 text-white text-center lg:text-left">
              Subscribe to Newsletter
            </h4>
            <p className="text-sm text-gray-400 mb-4 text-center lg:text-left">
              Subscribe to web3 Weekly and the latest news from Blockai
            </p>
            
            <form onSubmit={handleSubscribe} className="relative">
              <div className="flex">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 bg-[#121212] border border-gray-700 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-gray-600 focus:border-gray-600 text-white text-sm transition-all duration-300"
                  required
                />
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="px-5 py-3 bg-[#121212] border border-gray-700 text-white rounded-r-lg hover:border-gray-600 transition-all duration-300 text-sm font-medium disabled:opacity-50"
                >
                  {isSubmitting ? 
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg> : 
                    "Subscribe"
                  }
                </button>
              </div>
              
              {subscriptionStatus && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`absolute -bottom-10 left-0 right-0 text-sm p-2 rounded ${
                    subscriptionStatus.success ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {subscriptionStatus.message}
                </motion.div>
              )}
            </form>
          </div>
        </div>
        
        <div className="text-center pt-6">
          <motion.p 
            className="text-sm text-gray-400 font-light tracking-wide"
            whileHover={{ color: "#9ca3af", transition: { duration: 0.3 } }}
          >
            &copy; {new Date().getFullYear()} Blockai. All Rights Reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 