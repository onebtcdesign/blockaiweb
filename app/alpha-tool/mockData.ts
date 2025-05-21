// Mock data interfaces
export interface AlphaToolData {
  address: string;
  totalTransactions: number;
  totalValueUSD: number;
  todayTransactions: number;
  todayPoints: number;
  tokenSummary: TokenSummary[];
  transactionsByDate: TransactionGroup[];
  language?: "en" | "zh";
  
  // New fields for enhanced UI
  todayVolume: {
    amount: number;
    spendMoreForPoint: number;
  };
  todayEstimatedPoints: {
    points: number;
    pointsForNextTier: number;
  };
  totalStats: {
    totalVolume: number;
    spendMoreForAirdrop: number;
    totalPoints: number;
    pointsNeededForAirdrop: number;
  };
  todayOverview: {
    trades: number;
    gasUsed: number;
    projects: number;
    amounts: number;
  };
}

export interface TokenSummary {
  token: string;
  inflow: number;
  outflow: number;
  net: number;
}

export interface TransactionGroup {
  date: string;
  txCount: number;
  bnbUsed: number;
  usdOutflow: number;
  points: number;
  transactions: DetailedTransaction[];
}

export interface DetailedTransaction {
  hash: string;
  time: string;
  token: string;
  inAmount: number | null;
  outAmount: number | null;
  gas: number;
  status: "Completed" | "Pending" | "Failed";
  project?: string; // Added project field
}

// Mock API fetcher
export const fetchAlphaData = async (address: string): Promise<AlphaToolData> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1200));
  
  // Generate mock data
  return getMockData(address);
};

// Mock data generator function
export const getMockData = (address: string): AlphaToolData => {
  // Base data with variations based on address
  const baseData = {
    address,
    totalTransactions: 122,
    totalValueUSD: 16201.86,
    todayTransactions: 18,
    todayPoints: 12,
    tokenSummary: [
      { token: "BNB", inflow: 2.145, outflow: 1.023, net: 1.122 },
      { token: "USDT", inflow: 3450.75, outflow: 2100.25, net: 1350.50 },
      { token: "BTC", inflow: 0.012, outflow: 0.008, net: 0.004 },
      { token: "ETH", inflow: 0.55, outflow: 0.32, net: 0.23 }
    ],
    
    // New data fields for enhanced UI
    todayVolume: {
      amount: 3450.75,
      spendMoreForPoint: 550.25
    },
    todayEstimatedPoints: {
      points: 12,
      pointsForNextTier: 3
    },
    totalStats: {
      totalVolume: 16201.86,
      spendMoreForAirdrop: 28798.14,
      totalPoints: 122,
      pointsNeededForAirdrop: 23
    },
    todayOverview: {
      trades: 8,
      gasUsed: 0.023,
      projects: 4,
      amounts: 1287.45
    },
    
    transactionsByDate: [
      {
        date: "May 21, 2025",
        txCount: 8,
        bnbUsed: 0.023,
        usdOutflow: 1287.45,
        points: 12,
        transactions: [
          {
            hash: "0x7d21c4cdd97c9c867301112a494d3401695d9c3a568168ae175d92d9a1559b23",
            time: "14:21:21",
            token: "BNB",
            inAmount: 0.5,
            outAmount: null,
            gas: 0.002,
            status: "Completed" as "Completed" | "Pending" | "Failed",
            project: "BNB Chain"
          },
          {
            hash: "0x9e831c674dd0c61db5b72ec6918a8738139e2ed71f87e43bc97c4371d0a9c908",
            time: "12:15:04",
            token: "USDT",
            inAmount: null,
            outAmount: 245.75,
            gas: 0.003,
            status: "Completed" as "Completed" | "Pending" | "Failed",
            project: "Tether"
          },
          {
            hash: "0x3f8c1e96367c9a05d70da4b88ada70ce826f1d6aa53ea61896213ffdcc3c7425",
            time: "10:35:17",
            token: "ETH",
            inAmount: 0.12,
            outAmount: null,
            gas: 0.004,
            status: "Completed" as "Completed" | "Pending" | "Failed",
            project: "Ethereum"
          },
          {
            hash: "0x6c91e242740cf537e98567bf25d0aae27c492250e4e39c33126b34638ad7c563",
            time: "09:22:58",
            token: "BTC",
            inAmount: null,
            outAmount: 0.002,
            gas: 0.001,
            status: "Completed" as "Completed" | "Pending" | "Failed",
            project: "Bitcoin"
          },
          {
            hash: "0x2d4b1cd27e95dddf8adf7596a8ea323bff23c9c0df7f175df5ed1bdc44320fd1",
            time: "08:17:33",
            token: "USDT",
            inAmount: 550.25,
            outAmount: null,
            gas: 0.0015,
            status: "Completed" as "Completed" | "Pending" | "Failed",
            project: "Tether"
          },
          {
            hash: "0x8f452d4fe92d44e12b0bd01c747a033cd5ec8d5aa73c9d8a87fc325a72588a7c",
            time: "07:45:12",
            token: "BNB",
            inAmount: null,
            outAmount: 0.25,
            gas: 0.001,
            status: "Completed" as "Completed" | "Pending" | "Failed",
            project: "BNB Chain"
          },
          {
            hash: "0xa6f7b73fc3b80f95f3c08abb2de331f84c1723a78cb5c82068af3929eaf4efa5",
            time: "06:30:44",
            token: "USDT",
            inAmount: null,
            outAmount: 125.50,
            gas: 0.0025,
            status: "Completed" as "Completed" | "Pending" | "Failed",
            project: "Tether"
          },
          {
            hash: "0xb3c4a5d6e7f8901234567890abcdef1234567890abcdef1234567890abcdef12",
            time: "05:15:27",
            token: "ETH",
            inAmount: 0.05,
            outAmount: null,
            gas: 0.002,
            status: "Completed" as "Completed" | "Pending" | "Failed",
            project: "Ethereum"
          }
        ]
      },
      {
        date: "May 20, 2025",
        txCount: 10,
        bnbUsed: 0.035,
        usdOutflow: 2350.15,
        points: 18,
        transactions: [
          {
            hash: "0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f3",
            time: "18:42:11",
            token: "BNB",
            inAmount: 0.75,
            outAmount: null,
            gas: 0.003,
            status: "Completed" as "Completed" | "Pending" | "Failed",
            project: "BNB Chain"
          },
          {
            hash: "0x4g5h6i7j8k9l0m1n2o3p4q5r6s7t8u9v0w1x2y3z4a5b6c7d8e9f0g1h2i3j4k5l6",
            time: "16:37:24",
            token: "USDT",
            inAmount: null,
            outAmount: 875.35,
            gas: 0.004,
            status: "Completed" as "Completed" | "Pending" | "Failed",
            project: "Tether"
          },
          {
            hash: "0x7m8n9o0p1q2r3s4t5u6v7w8x9y0z1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9",
            time: "14:25:53",
            token: "BTC",
            inAmount: 0.005,
            outAmount: null,
            gas: 0.005,
            status: "Completed" as "Completed" | "Pending" | "Failed",
            project: "Bitcoin"
          },
          {
            hash: "0x0s1t2u3v4w5x6y7z8a9b0c1d2e3f4g5h6i7j8k9l0m1n2o3p4q5r6s7t8u9v0w1x2",
            time: "12:18:47",
            token: "ETH",
            inAmount: null,
            outAmount: 0.15,
            gas: 0.0025,
            status: "Completed" as "Completed" | "Pending" | "Failed",
            project: "Ethereum"
          },
          {
            hash: "0x3y4z5a6b7c8d9e0f1g2h3i4j5k6l7m8n9o0p1q2r3s4t5u6v7w8x9y0z1a2b3c4d5",
            time: "10:05:32",
            token: "USDT",
            inAmount: 1250.60,
            outAmount: null,
            gas: 0.003,
            status: "Completed" as "Completed" | "Pending" | "Failed",
            project: "Tether"
          },
          {
            hash: "0x6e7f8g9h0i1j2k3l4m5n6o7p8q9r0s1t2u3v4w5x6y7z8a9b0c1d2e3f4g5h6i7j8",
            time: "08:53:19",
            token: "BNB",
            inAmount: null,
            outAmount: 0.35,
            gas: 0.0015,
            status: "Completed" as "Completed" | "Pending" | "Failed",
            project: "BNB Chain"
          },
          {
            hash: "0x9k0l1m2n3o4p5q6r7s8t9u0v1w2x3y4z5a6b7c8d9e0f1g2h3i4j5k6l7m8n9o0p1",
            time: "06:47:05",
            token: "USDT",
            inAmount: null,
            outAmount: 350.75,
            gas: 0.002,
            status: "Completed" as "Completed" | "Pending" | "Failed",
            project: "Tether"
          },
          {
            hash: "0x2q3r4s5t6u7v8w9x0y1z2a3b4c5d6e7f8g9h0i1j2k3l4m5n6o7p8q9r0s1t2u3v4",
            time: "04:38:52",
            token: "ETH",
            inAmount: 0.08,
            outAmount: null,
            gas: 0.0035,
            status: "Completed" as "Completed" | "Pending" | "Failed",
            project: "Ethereum"
          },
          {
            hash: "0x5w6x7y8z9a0b1c2d3e4f5g6h7i8j9k0l1m2n3o4p5q6r7s8t9u0v1w2x3y4z5a6b7",
            time: "02:27:39",
            token: "BTC",
            inAmount: null,
            outAmount: 0.003,
            gas: 0.002,
            status: "Completed" as "Completed" | "Pending" | "Failed",
            project: "Bitcoin"
          },
          {
            hash: "0x8c9d0e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2a3b4c5d6e7f8g9h0",
            time: "00:19:26",
            token: "BNB",
            inAmount: 0.4,
            outAmount: null,
            gas: 0.0025,
            status: "Completed" as "Completed" | "Pending" | "Failed",
            project: "BNB Chain"
          }
        ]
      }
    ],
    language: "en" as "en" | "zh"
  };
  
  return baseData;
}; 