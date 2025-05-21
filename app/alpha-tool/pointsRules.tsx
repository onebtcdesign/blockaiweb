import React from 'react';

export const PointsRules: React.FC = () => {
  return (
    <div className="w-full max-w-[750px] mx-auto">
      <h3 className="text-white text-lg font-medium mb-3">Alpha Points System</h3>
      
      <div className="p-6 bg-black text-[#cccccc] border border-[#333333] rounded-lg shadow-lg w-full">
        {/* Section 1: What is the Alpha Points System? */}
        <div className="mb-6">
          <h3 className="text-base font-medium text-white mb-3">What is the Alpha Points System?</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Alpha Points are calculated based on two main factors:</li>
            <li><span className="text-[#f5b70a] font-medium">Balance</span>: The USD value of spot & Alpha tokens held over 15 days</li>
            <li><span className="text-[#f5b70a] font-medium">Trading Volume</span>: Daily USD spent buying Alpha tokens</li>
            <li>Points accumulate daily over a 15-day period</li>
            <li>Higher points lead to better platform benefits</li>
          </ul>
        </div>
        
        {/* Section 2: Balance Points */}
        <div className="mb-6">
          <h3 className="text-base font-medium text-white mb-3">Balance Points (daily)</h3>
          <div className="overflow-x-auto">
            <table className="border-collapse border border-[#333333] text-sm w-auto">
              <thead>
                <tr>
                  <th className="border border-[#333333] py-2 px-3 text-left text-[#f5b70a]">Balance</th>
                  <th className="border border-[#333333] py-2 px-3 text-left text-[#f5b70a]">Points</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#333333] py-2 px-3">$100</td>
                  <td className="border border-[#333333] py-2 px-3">1 point</td>
                </tr>
                <tr>
                  <td className="border border-[#333333] py-2 px-3">$1,000</td>
                  <td className="border border-[#333333] py-2 px-3">2 points</td>
                </tr>
                <tr>
                  <td className="border border-[#333333] py-2 px-3">$10,000</td>
                  <td className="border border-[#333333] py-2 px-3">3 points</td>
                </tr>
                <tr>
                  <td className="border border-[#333333] py-2 px-3">$100,000+</td>
                  <td className="border border-[#333333] py-2 px-3">4 points</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Section 3: Trading Volume Points */}
        <div className="mb-6">
          <h3 className="text-base font-medium text-white mb-3">Trading Volume Points (daily)</h3>
          <div className="overflow-x-auto">
            <table className="border-collapse border border-[#333333] text-sm w-auto">
              <thead>
                <tr>
                  <th className="border border-[#333333] py-2 px-3 text-left text-[#f5b70a]">Volume</th>
                  <th className="border border-[#333333] py-2 px-3 text-left text-[#f5b70a]">Points</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#333333] py-2 px-3">$2</td>
                  <td className="border border-[#333333] py-2 px-3">1 point</td>
                </tr>
                <tr>
                  <td className="border border-[#333333] py-2 px-3">$4</td>
                  <td className="border border-[#333333] py-2 px-3">2 points</td>
                </tr>
                <tr>
                  <td className="border border-[#333333] py-2 px-3">$8</td>
                  <td className="border border-[#333333] py-2 px-3">3 points</td>
                </tr>
                <tr>
                  <td className="border border-[#333333] py-2 px-3">$16</td>
                  <td className="border border-[#333333] py-2 px-3">4 points</td>
                </tr>
                <tr>
                  <td className="border border-[#333333] py-2 px-3">$32</td>
                  <td className="border border-[#333333] py-2 px-3">5 points</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm mt-2 text-[#aaaaaa]">Doubling spend adds +1 point each time</p>
          </div>
        </div>
        
        {/* Section 4: Optimal Strategy */}
        <div className="mb-6">
          <h3 className="text-base font-medium text-white mb-3">Optimal 45-Point Strategy</h3>
          <div className="overflow-x-auto">
            <table className="border-collapse border border-[#333333] text-sm w-auto">
              <thead>
                <tr>
                  <th className="border border-[#333333] py-2 px-3 text-left text-[#f5b70a]">Strategy</th>
                  <th className="border border-[#333333] py-2 px-3 text-left text-[#f5b70a]">Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#333333] py-2 px-3">Hold $100 (1pt) + trade $4 (2pt) per day</td>
                  <td className="border border-[#333333] py-2 px-3">3pt/day × 15 days = 45 points</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Section 5: How to Check Your Points */}
        <div>
          <h3 className="text-base font-medium text-white mb-3">How to Check Your Points</h3>
          <ol className="list-decimal pl-5 space-y-1 text-sm">
            <li>Open the Binance App</li>
            <li>Search 'Alpha points' in the search bar</li>
            <li>View your points breakdown on the results page</li>
          </ol>
        </div>
      </div>
    </div>
  );
}; 