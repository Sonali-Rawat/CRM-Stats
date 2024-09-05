"use client";

import React, { useState } from 'react';

const TimeSelector = ({ onTimeChange }) => {
  const [selectedTime, setSelectedTime] = useState('1w');

  const handleChange = (e) => {
    const newTime = e.target.value;
    setSelectedTime(newTime);
    onTimeChange(newTime); // Pass the selected time to the parent component
  };

  return (
    <div className="flex items-center space-x-4 bg-lime-600 shadow-md rounded-lg p-4 border border-gray-200">
      <label htmlFor="time-select" className="text-black text-lg font-bold">Select Time Period:</label>
      <select
        id="time-select"
        value={selectedTime}
        onChange={handleChange}
        className="bg-amber-100 border border-gray-300 rounded-lg p-2 text-black"
      >
        <option value="1d">Last 1 Day</option>
        <option value="1w">Last 1 Week</option>
        <option value="1m">Last 1 Month</option>
        {/* <option value="3m">Last 3 Months</option>
        <option value="1y">Last 1 Year</option> */}
      </select>
    </div>
  );
};

export default TimeSelector;
