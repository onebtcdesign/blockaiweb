import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { 
  ArrowPathIcon, 
  ClipboardIcon, 
  ChevronDownIcon, 
  XMarkIcon,
  LinkIcon,
  MagnifyingGlassIcon,
  CheckIcon
} from '@heroicons/react/24/outline';
import { AlphaToolData, fetchAlphaData } from './mockData';

interface SearchComponentProps {
  className?: string;
}

type BalanceRange = {
  min: number;
  max: number | null;
  points: number;
  label: string;
  displayName: string;
};

export const SearchComponent: React.FC<SearchComponentProps> = ({ className }) => {
  const [address, setAddress] = useState<string>('');
  const [searchAddress, setSearchAddress] = useState<string>('');
  const [expandedDates, setExpandedDates] = useState<Set<string>>(new Set());
  const [tierValue, setTierValue] = useState<number>(0);

  const balanceRanges: BalanceRange[] = [
    { min: 0, max: 100, points: 0, label: '$0 - $100', displayName: '$0–$100' },
    { min: 100, max: 1000, points: 1, label: '$100 - $1,000 (1 point/day)', displayName: '$100–$1,000' },
    { min: 1000, max: 10000, points: 2, label: '$1,000 - $10,000 (2 points/day)', displayName: '$1,000–$10,000' },
    { min: 10000, max: 100000, points: 3, label: '$10,000 - $100,000 (3 points/day)', displayName: '$10,000–$100,000' },
    { min: 100000, max: null, points: 4, label: '$100,000+ (4 points/day)', displayName: '$100,000+' }
  ];

  const getCurrentTier = () => {
    return balanceRanges[tierValue];
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setTierValue(value);
  };

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
    } else {
      alert('Please enter a wallet address and select a balance range for accurate points forecasting');
    }
  };

  const clearInput = () => {
    setAddress('');
    setSearchAddress(''); // Reset search state to hide results
    setExpandedDates(new Set()); // Reset expanded dates
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

  const toggleDate = (date: string) => {
    setExpandedDates(prev => {
      const newSet = new Set(prev);
      if (newSet.has(date)) {
        newSet.delete(date);
      } else {
        newSet.add(date);
      }
      return newSet;
    });
  };

  return (
    <div className={`flex flex-col bg-black max-w-[750px] mx-auto w-full ${className}`}>
      {/* Search Form with integrated button */}
      <form onSubmit={handleSubmit} className="w-full mb-6">
        <div className="relative">
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Search: 0x123…enter BSC address"
            className="w-full px-4 py-3 bg-[#111111] placeholder-gray-500 text-white border border-[#333333] rounded-[12px] focus:outline-none focus:border-[#f5b70a] text-sm pr-[50px]"
          />
          
          {address && (
            <button
              type="button"
              onClick={clearInput}
              className="absolute right-[50px] top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white z-10"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
          
          <button 
            type="submit"
            className="absolute right-[8px] top-1/2 transform -translate-y-1/2 p-2 bg-[#f5b70a] text-black hover:bg-[#e5aa0a] transition rounded-[8px] flex items-center justify-center"
            aria-label="Search"
          >
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>
        </div>
      </form>
      
      {!searchAddress && (
        <div className="mb-8">
          <h3 className="text-white text-sm mb-3">Exchange Balance</h3>
          <div className="bg-[#111111] border border-[#333333] rounded-[12px] p-5">
            {/* Header showing tier and points/day */}
            <div className="flex justify-between mb-4 items-center">
              <div className="text-white text-sm">
                Tier: <span className="text-[#f5b70a]">{getCurrentTier().displayName}</span>
              </div>
              <div className="text-white text-sm">
                <span className="text-[#f5b70a]">{getCurrentTier().points}</span> pt/day
              </div>
            </div>
            
            {/* Custom Slider with CSS variables for styling */}
            <div className="slider-container relative mb-6" style={{ '--value': `${tierValue * 25}%` } as React.CSSProperties}>
              <input
                type="range"
                min="0"
                max="4"
                step="1"
                value={tierValue}
                onChange={handleSliderChange}
                className="w-full h-8 appearance-none bg-transparent focus:outline-none slider-thumb"
              />
              <div className="slider-track absolute top-1/2 left-0 w-full h-2 bg-[#333333] rounded-full -translate-y-1/2"></div>
              <div className="slider-fill absolute top-1/2 left-0 h-2 bg-[#f5b70a] rounded-full -translate-y-1/2" style={{ width: 'var(--value)' }}></div>
            </div>
            
            {/* Tick marks and labels */}
            <div className="flex justify-between text-xs text-[#aaaaaa] px-1">
              <span>$0</span>
              <span>$100</span>
              <span>$1K</span>
              <span>$10K</span>
              <span>$100K+</span>
            </div>
            
            {/* Description */}
            <div className="mt-4 p-3 bg-[#1a1a1a] rounded border border-[#333333]">
              <p className="text-gray-400 text-xs">
                Select your exchange balance range for accurate points forecasting. Higher balances earn more points daily.
              </p>
            </div>
          </div>
        </div>
      )}
      
      {/* Search Results - Dark Theme */}
      {searchAddress && !isLoading && !error && data && (
        <div className="w-full">
          {/* Top Two Large Cards (Today's Volume and Today's Estimated Points) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {/* Today's Volume Card */}
            <div className="bg-[#111111] rounded-lg border border-[#333333] p-4 shadow-md">
              <h3 className="text-gray-400 text-base mb-1">Today's Volume</h3>
              <p className="text-white text-2xl font-bold">${data.todayVolume.amount.toLocaleString()}</p>
              <p className="text-gray-500 text-sm mt-2">
                Spend <span className="text-white">${data.todayVolume.spendMoreForPoint.toLocaleString()}</span> more → +1 point
              </p>
            </div>
            
            {/* Today's Estimated Points Card */}
            <div className="bg-[#111111] rounded-lg border border-[#333333] p-4 shadow-md">
              <h3 className="text-gray-400 text-base mb-1">Today's Estimated Points</h3>
              <p className="text-[#f5b70a] text-2xl font-bold">+{data.todayEstimatedPoints.points} pts</p>
              <p className="text-gray-500 text-sm mt-2">
                Need +<span className="text-white">{data.todayEstimatedPoints.pointsForNextTier}</span> pts for next tier
              </p>
            </div>
          </div>
          
          {/* Two Smaller Cards (Total Volume and Total Points) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {/* Total Volume Card */}
            <div className="bg-[#111111] rounded-lg border border-[#333333] p-3 shadow-md">
              <h3 className="text-gray-400 text-sm mb-1">Total Volume</h3>
              <p className="text-white text-xl font-bold">${data.totalStats.totalVolume.toLocaleString()}</p>
              <p className="text-gray-500 text-xs mt-1">
                Spend <span className="text-white">${data.totalStats.spendMoreForAirdrop.toLocaleString()}</span> more for airdrop
              </p>
            </div>
            
            {/* Total Points Card */}
            <div className="bg-[#111111] rounded-lg border border-[#333333] p-3 shadow-md">
              <h3 className="text-gray-400 text-sm mb-1">Total Points</h3>
              <p className="text-[#f5b70a] text-xl font-bold">+{data.totalStats.totalPoints} pts</p>
              <p className="text-gray-500 text-xs mt-1">
                Need <span className="text-white">{data.totalStats.pointsNeededForAirdrop}</span> pts more for project airdrop
              </p>
            </div>
          </div>
          
          {/* Full Transaction Details Section */}
          <div className="mb-8">
            <h3 className="text-white text-lg font-medium mb-3">Transactions</h3>
            <div className="space-y-4">
              {data.transactionsByDate.map((group, idx) => (
                <details key={idx} className="bg-[#111111] rounded-lg border border-[#333333] overflow-hidden group">
                  <summary className="cursor-pointer px-6 py-4 hover:bg-[#1a1a1a] flex flex-col gap-3">
                    <div className="flex items-center justify-between w-full">
                      <span className="font-semibold text-white text-lg">
                        {group.date}
                      </span>
                      <ChevronDownIcon className="h-5 w-5 text-gray-400 transform transition-transform duration-200 group-open:rotate-180" />
                    </div>
                    
                    <div className="h-px w-full bg-[#333333]"></div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-500 uppercase">Transactions</span>
                        <span className="text-sm font-medium text-white">{group.txCount} tx</span>
                      </div>
                      
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-500 uppercase">BNB Used</span>
                        <span className="text-sm font-medium text-blue-400">{group.bnbUsed}</span>
                      </div>
                      
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-500 uppercase">USD Volume</span>
                        <span className="text-sm font-medium text-green-400">${group.usdOutflow.toLocaleString()}</span>
                      </div>
                      
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-500 uppercase">Points Earned</span>
                        <span className="text-sm font-medium text-[#f5b70a]">+{group.points}</span>
                      </div>
                    </div>
                  </summary>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead className="bg-[#1a1a1a]">
                        <tr className="border-t border-[#333333]">
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase">Hash</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase">Time</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase">Token</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase">In</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase">Out</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase">Gas</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase">Project</th>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#333333]">
                        {group.transactions.map((tx, txIdx) => (
                          <tr key={txIdx} className="hover:bg-[#1a1a1a]">
                            <td className="px-4 py-3 text-sm whitespace-nowrap">
                              <div className="flex items-center space-x-1">
                                <code className="font-mono text-xs">
                                  <a 
                                    href={`https://bscscan.com/tx/${tx.hash}`} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 flex items-center"
                                  >
                                    {tx.hash.substring(0, 10)}...
                                    <LinkIcon className="h-3 w-3 ml-1" />
                                  </a>
                                </code>
                                <button 
                                  onClick={() => copyToClipboard(tx.hash)}
                                  className="text-gray-400 hover:text-gray-300"
                                >
                                  <ClipboardIcon className="h-3 w-3" />
                                </button>
                              </div>
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-300">{tx.time}</td>
                            <td className="px-4 py-3 text-sm text-white">{tx.token}</td>
                            <td className="px-4 py-3 text-sm">
                              {tx.inAmount ? <span className="text-green-400">{tx.inAmount}</span> : "–"}
                            </td>
                            <td className="px-4 py-3 text-sm">
                              {tx.outAmount ? <span className="text-red-400">{tx.outAmount}</span> : "–"}
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-300">{tx.gas}</td>
                            <td className="px-4 py-3 text-sm text-gray-300">{tx.project}</td>
                            <td className="px-4 py-3 text-sm">
                              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                                tx.status === "Completed" ? "bg-green-900 text-green-300" :
                                tx.status === "Pending" ? "bg-yellow-900 text-yellow-300" :
                                "bg-red-900 text-red-300"
                              }`}>
                                {tx.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Loading State */}
      {isLoading && (
        <div className="flex flex-col items-center justify-center py-12 w-full">
          <ArrowPathIcon className="h-8 w-8 text-[#f5b70a] animate-spin mb-4" />
          <p className="text-gray-400">Loading transactions...</p>
          
          {/* Loading Placeholder for Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-8">
            {[...Array(4)].map((_, idx) => (
              <div key={idx} className="bg-[#111111] rounded-lg border border-[#333333] p-4 animate-pulse">
                <div className="h-3 bg-[#222222] rounded w-24 mb-3"></div>
                <div className="h-6 bg-[#222222] rounded w-16"></div>
              </div>
            ))}
          </div>
          
          {/* Loading Placeholder for Transaction Group */}
          <div className="w-full mt-8 border border-[#333333] rounded-lg overflow-hidden bg-[#111111]">
            <div className="p-4 animate-pulse">
              <div className="flex justify-between">
                <div className="h-5 bg-[#222222] rounded w-32"></div>
                <div className="h-5 bg-[#222222] rounded w-48"></div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Error State */}
      {error && (
        <div className="text-red-500 text-center py-8 w-full">
          <p>Error loading transactions. Please try again.</p>
          <button 
            onClick={() => refetch()}
            className="mt-4 px-4 py-2 bg-[#222222] text-white rounded-md hover:bg-[#333333] transition"
          >
            Retry
          </button>
        </div>
      )}
      
      {/* Empty Results State */}
      {searchAddress && !isLoading && !error && data && data.transactionsByDate.length === 0 && (
        <div className="text-gray-500 text-center py-8 w-full border border-[#333333] rounded-lg">
          <p>No transactions found for this address</p>
        </div>
      )}
      
      {/* Custom CSS for slider */}
      <style jsx>{`
        .slider-thumb {
          position: relative;
          z-index: 10;
        }
        
        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #f5b70a;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(245, 183, 10, 0.5);
          transition: transform 0.2s;
        }
        
        .slider-thumb::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #f5b70a;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(245, 183, 10, 0.5);
          transition: transform 0.2s;
          border: none;
        }
        
        .slider-thumb::-webkit-slider-thumb:hover {
          transform: scale(1.1);
        }
        
        .slider-thumb::-moz-range-thumb:hover {
          transform: scale(1.1);
        }
        
        @media (max-width: 640px) {
          .slider-container {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
}; 