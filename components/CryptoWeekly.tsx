"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const CryptoWeekly = () => {
  return (
    <section className="py-16 bg-[#080808]">
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-xl overflow-hidden"
        >
          <div className="bg-[#121212] rounded-lg p-8 border border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    Crypto Weekly
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    Weekly Web3 insights and updates in Chinese
                  </p>
                </div>
              </div>
              
              <Link 
                href="https://onebtcdesign.notion.site/BlockAI-Crypto-1dfe243ac6ed80808870f5e46c2c3d83?pvs=74" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#121212] border border-gray-700 text-white rounded-lg hover:border-gray-600 transition-all duration-300"
              >
                Go Read
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CryptoWeekly; 