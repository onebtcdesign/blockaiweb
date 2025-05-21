"use client";

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Header from "@/components/Header";
import Image from "next/image";
import { 
  ArrowPathIcon, 
  ClipboardIcon, 
  ChevronDownIcon, 
  XMarkIcon
} from '@heroicons/react/24/outline';

// Mock data interface
interface AlphaToolData {
  address: string;
  totalToday: number;
  score: number;
  todayTxs: Transaction[];
  language?: "en" | "zh";
}

interface Transaction {
  hash: string;
  amount: string;
  tokenType: string;
  fromAddress: string;
  toAddress: string;
  timestamp: string;
}

// Mock data generator function
const getMockData = (address: string): AlphaToolData => {
  // Base data with variations based on address
  const baseData = {
    address,
    totalToday: 13010.91727064,
    score: 30,
    language: "en" as "en" | "zh",
    todayTxs: [] as Transaction[]
  };
  
  // Generate transactions - same for all addresses to match the example image
  const mockTransactions = [
    {
      hash: '0x7d21c4cdd97c9c867301112a494d3401695d9c3a568168ae175d92d9a1559b23',
      amount: '115.91727064',
      tokenType: 'BSC-USD',
      fromAddress: '0x8ac...7f74f8',
      toAddress: '0xc9f...0d490',
      timestamp: '2025-05-19 14:21:21'
    },
    {
      hash: '0x9e831c674dd0c61db5b72ec6918a8738139e2ed71f87e43bc97c4371d0a9c908',
      amount: '115.91727064',
      tokenType: 'B2',
      fromAddress: '0x8ac...7f74f8',
      toAddress: '0xc9f...0d490',
      timestamp: '2025-05-19 14:21:21'
    },
    {
      hash: '0x3f8c1e96367c9a05d70da4b88ada70ce826f1d6aa53ea61896213ffdcc3c7425',
      amount: '115.91727064',
      tokenType: 'B2',
      fromAddress: '0x8ac...7f74f8',
      toAddress: '0xc9f...0d490',
      timestamp: '2025-05-19 14:21:21'
    },
    {
      hash: '0x6c91e242740cf537e98567bf25d0aae27c492250e4e39c33126b34638ad7c563',
      amount: '115.91727064',
      tokenType: 'BSC-USD',
      fromAddress: '0x8ac...7f74f8',
      toAddress: '0xc9f...0d490',
      timestamp: '2025-05-19 14:21:21'
    },
    {
      hash: '0x2d4b1cd27e95dddf8adf7596a8ea323bff23c9c0df7f175df5ed1bdc44320fd1',
      amount: '115.91727064',
      tokenType: 'BSC-USD',
      fromAddress: '0x8ac...7f74f8',
      toAddress: '0xc9f...0d490',
      timestamp: '2025-05-19 14:21:21'
    },
    {
      hash: '0x8f452d4fe92d44e12b0bd01c747a033cd5ec8d5aa73c9d8a87fc325a72588a7c',
      amount: '115.91727064',
      tokenType: 'BSC-USD',
      fromAddress: '0x8ac...7f74f8',
      toAddress: '0xc9f...0d490',
      timestamp: '2025-05-19 14:21:21'
    },
    {
      hash: '0xa6f7b73fc3b80f95f3c08abb2de331f84c1723a78cb5c82068af3929eaf4efa5',
      amount: '115.91727064',
      tokenType: 'B2',
      fromAddress: '0x8ac...7f74f8',
      toAddress: '0xc9f...0d490',
      timestamp: '2025-05-19 14:21:21'
    },
    {
      hash: '0xb3c4a5d6e7f8901234567890abcdef1234567890abcdef1234567890abcdef12',
      amount: '115.91727064',
      tokenType: 'BSC-USD',
      fromAddress: '0x8ac...7f74f8',
      toAddress: '0xc9f...0d490',
      timestamp: '2025-05-19 14:21:21'
    }
  ];
  
  baseData.todayTxs = mockTransactions;
  return baseData;
};

// Mock API fetcher
const fetchAlphaData = async (address: string): Promise<AlphaToolData> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1200));
  
  // Generate mock data
  return getMockData(address);
};

export default function AlphaToolPage() {
  const [address, setAddress] = useState<string>('');
  const [searchAddress, setSearchAddress] = useState<string>('');
  const [showAllTransactions, setShowAllTransactions] = useState(false);

  const { 
    data, 
    error, 
    isLoading, 
    refetch 
  } = useQuery<AlphaToolData>({
    queryKey: ['alpha', searchAddress],
    queryFn: () => fetchAlphaData(searchAddress),
    enabled: !!searchAddress,
    staleTime: 30000 // Consider data fresh for 30 seconds
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (address.trim()) {
      setSearchAddress(address);
      refetch();
    }
  };

  const clearInput = () => {
    setAddress('');
    setSearchAddress(''); // Reset search state to hide results
    setShowAllTransactions(false); // Reset view more state
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  // Display only 5 transactions initially unless "View More" is clicked
  const displayedTransactions = showAllTransactions 
    ? data?.todayTxs 
    : data?.todayTxs.slice(0, 5);

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center bg-background text-white px-4 sm:px-6 md:px-8 pb-12 pt-[220px] sm:pt-[260px] md:pt-[300px]">
        <div className="flex flex-col items-center mb-4">
          <Image 
            src="/Binance-Vertical2-Dark-Background-Logo.wine.svg"
            alt="Binance Logo"
            width={60}
            height={60}
            className="mb-4"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 text-center">
            Binance Alpha Tool
          </h1>
          <p className="text-gray-400 mt-4 text-center text-sm md:text-base px-4 md:whitespace-nowrap md:overflow-x-auto max-w-full">
            Binance Alpha intelligent query tool, all data comes from the blockchain
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="flex w-full max-w-3xl mb-8 relative mt-6">
          <div className="relative flex-grow">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Search: 0x..."
              className="w-full px-4 py-2 bg-transparent placeholder-gray-500 text-white border border-gray-600 rounded-l-lg focus:outline-none pr-10"
            />
            {address && (
              <button
                type="button"
                onClick={clearInput}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white z-10"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
          <button 
            type="submit"
            className="px-4 sm:px-6 py-2 bg-yellow-400 text-black font-medium hover:bg-yellow-500 transition rounded-r-lg"
          >
            Search
          </button>
        </form>
        
        {!searchAddress && (
          <div className="text-gray-400 text-center mb-8 w-full max-w-3xl -mt-2">
            <p className="text-sm">Try example addresses: 0x123, 0xabc, 0xdef</p>
          </div>
        )}
        
        {searchAddress && !isLoading && !error && data && (
          <>
            {/* Summary Box */}
            <div className="w-full max-w-3xl mb-8 border border-gray-700 rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-700">
                {/* Today's Transaction Total */}
                <div className="p-4 sm:p-6">
                  <div className="text-gray-400 text-sm mb-2">
                    Today's Transaction Total
                  </div>
                  <div className="text-white text-xl sm:text-2xl font-bold">
                    {data.totalToday.toLocaleString()}
                  </div>
                </div>
                
                {/* Today's Score Forecast */}
                <div className="p-4 sm:p-6">
                  <div className="text-gray-400 text-sm mb-2 sm:text-right">
                    Today's Points
                  </div>
                  <div className="text-yellow-400 text-xl sm:text-2xl font-bold sm:text-right">
                    +{data.score} Points
                  </div>
                </div>
              </div>
            </div>
            
            {/* Transaction List Header */}
            <h2 className="w-full max-w-3xl text-xl font-semibold text-gray-400 mb-4">
              Address Activity
            </h2>
            
            {/* Transaction Table */}
            <div className="w-full max-w-3xl bg-gray-900/50 border border-gray-700 rounded-lg overflow-hidden mb-8">
              {displayedTransactions && displayedTransactions.length > 0 ? (
                <div className="overflow-hidden">
                  <table className="w-full text-left">
                    <tbody className="divide-y divide-gray-700">
                      {displayedTransactions.map((tx, index) => (
                        <tr key={index} className="hover:bg-gray-800/50 transition-colors">
                          <td className="px-4 py-4">
                            <div className="flex flex-col space-y-2">
                              {/* Amount and token type */}
                              <div className="text-white text-lg font-medium flex items-center">
                                <span>{tx.amount}</span>
                                <span className="text-gray-400 text-sm ml-2">({tx.tokenType})</span>
                              </div>
                              
                              {/* From and To addresses */}
                              <div className="flex flex-wrap items-center gap-2 text-sm">
                                <span className="text-gray-400">{tx.fromAddress}</span>
                                <button 
                                  onClick={() => copyToClipboard(tx.fromAddress)}
                                  className="text-yellow-400 hover:text-yellow-300 flex-shrink-0"
                                  aria-label="Copy from address"
                                >
                                  <ClipboardIcon className="h-4 w-4" />
                                </button>
                                
                                <span className="text-gray-500 mx-1">To</span>
                                
                                <span className="text-gray-400">{tx.toAddress}</span>
                                <button 
                                  onClick={() => copyToClipboard(tx.toAddress)}
                                  className="text-yellow-400 hover:text-yellow-300 flex-shrink-0"
                                  aria-label="Copy to address"
                                >
                                  <ClipboardIcon className="h-4 w-4" />
                                </button>
                                
                                {/* Timestamp for mobile */}
                                <span className="text-gray-500 text-sm block sm:hidden mt-1">
                                  {tx.timestamp}
                                </span>
                              </div>
                            </div>
                          </td>
                          
                          {/* Timestamp for desktop - right aligned */}
                          <td className="px-4 py-4 text-right hidden sm:table-cell">
                            <span className="text-gray-500 text-sm">
                              {tx.timestamp}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  
                  {/* View More Button */}
                  {data.todayTxs.length > 5 && (
                    <div className="text-center py-3 border-t border-gray-700">
                      <button 
                        onClick={() => setShowAllTransactions(!showAllTransactions)}
                        className="flex items-center justify-center w-full text-gray-400 hover:text-white py-2"
                      >
                        <span>View {showAllTransactions ? 'Less' : 'More'}</span>
                        <ChevronDownIcon 
                          className={`ml-1 h-4 w-4 transition-transform ${showAllTransactions ? 'rotate-180' : ''}`} 
                        />
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="py-8 text-center text-gray-500">
                  No transactions found today
                </div>
              )}
            </div>
          </>
        )}
        
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-12">
            <ArrowPathIcon className="h-8 w-8 text-yellow-400 animate-spin mb-4" />
            <p className="text-gray-400">Loading transactions...</p>
          </div>
        )}
        
        {error && (
          <div className="text-red-500 text-center py-8">
            <p>Error loading transactions. Please try again.</p>
            <button 
              onClick={() => refetch()}
              className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
            >
              Retry
            </button>
          </div>
        )}
      </div>
    </>
  );
} 