// components/StatsPage.js
"use client"; // Add this to make it a Client Component

import React, { useState, useEffect } from 'react';
import StatsCards from './StatsCards';
import Charts from './Charts';
import TimeSelector from './TimeSelector';
import { fetchData } from '../utils/fetchData';

const StatsPage = () => {
  const [data, setData] = useState([]); // State to hold fetched data
  const [timeWindow, setTimeWindow] = useState('1w'); // Default time window

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData(timeWindow);
      setData(fetchedData);
    };

    getData(); // Fetch data when the time window changes
  }, [timeWindow]); // Re-fetch data on time window change

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-black">CRM Statistics</h1>

      {/* Time Selector */}
      <TimeSelector setTimeWindow={setTimeWindow} />

      {/* Dynamic Stats Cards */}
      <StatsCards data={data} />

      {/* Dynamic Charts */}
      <Charts data={data} />
    </div>
  );
};

export default StatsPage;
