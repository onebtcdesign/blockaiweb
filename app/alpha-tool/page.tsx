"use client";

import React from 'react';
import Header from "@/components/Header";
import Image from "next/image";
import { PointsRules } from './pointsRules';
import { SearchComponent } from './SearchComponent';

export default function AlphaToolPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-8 pb-12 pt-[120px] sm:pt-[140px] md:pt-[160px]">
        {/* Page Title and Logo */}
        <div className="flex flex-col items-center mb-8">
          <Image 
            src="/Binance-Vertical2-Dark-Background-Logo.wine.svg"
            alt="Binance Logo"
            width={60}
            height={60}
            className="mb-4"
          />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5b70a] text-center">
            Binance Alpha Tool
          </h1>
          <p className="text-gray-400 mt-4 text-center text-sm md:text-base max-w-3xl">
            Binance Alpha intelligent query tool, all data comes from the blockchain
          </p>
        </div>
        
        {/* Main Content - Vertical Layout */}
        <div className="w-full flex flex-col gap-8">
          {/* Top Section - Alpha Tool Search Component */}
          <div className="w-full">
            <SearchComponent />
          </div>
          
          {/* Bottom Section - Points Rules */}
          <div className="w-full mt-2 sm:mt-4 md:mt-8">
            <PointsRules />
          </div>
        </div>
      </div>
    </>
  );
} 