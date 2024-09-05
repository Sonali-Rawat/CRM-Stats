// components/StatsCards.js
import React from 'react';

const StatsCards = ({ data }) => {
  if (!data || data.length === 0) return <p>Loading...</p>;

  const totalSales = data.reduce((sum, item) => sum + item.sales, 0); // Example: Summing sales
  const newCustomers = data.length;
  const conversionRate = totalSales && newCustomers ? (totalSales / newCustomers) * 100 : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
      {/* Total Sales */}
      <div className="bg-slate-300 p-6 shadow rounded">
        <h3 className="text-lg font-semibold text-black">Total Sales</h3>
        <p className="text-2xl font-bold text-black">${totalSales}</p>
      </div>

      {/* New Customers */}
      <div className="bg-slate-300 p-6 shadow rounded">
        <h3 className="text-lg font-semibold text-black">New Customers</h3>
        <p className="text-2xl font-bold text-black">{newCustomers}</p>
      </div>

      {/* Conversion Rate */}
      <div className="bg-slate-300 p-6 shadow rounded">
        <h3 className="text-lg font-semibold text-black">Conversion Rate</h3>
        <p className="text-2xl font-bold text-black">{conversionRate.toFixed(2)}%</p>
      </div>
    </div>
  );
};

export default StatsCards;
