"use client"
import React, { useEffect, useState } from 'react';

interface CountdownProps {
  targetDate: string;
}

const CountdownTimer: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = (targetDate: string): { days: number; hour: number; min: number; sec: number } => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    const timeLeft = {
      days: 0,
      hour: 0,
      min: 0,
      sec: 0,
    };

    if (difference > 0) {
      timeLeft.days = Math.floor(difference / (1000 * 60 * 60 * 24));
      timeLeft.hour = Math.floor((difference / (1000 * 60 * 60)) % 24);
      timeLeft.min = Math.floor((difference / 1000 / 60) % 60);
      timeLeft.sec = Math.floor((difference / 1000) % 60);
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const calculateAndUpdateTime = () => {
      const newTimeLeft = calculateTimeLeft(targetDate);
      setTimeLeft(newTimeLeft);
    };

    calculateAndUpdateTime();

    const intervalId = setInterval(calculateAndUpdateTime, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div className="flex mr-1 space-x-1 lg:space-x-2">
      {Object.keys(timeLeft).map((interval, index) => (
        <div key={index} className="flex flex-col bg-gray-200/60 text-gray-500 lg:bg-[#606060] w-[35px] h-[40px] lg:w-[45px] lg:h-[50px] rounded-none lg:rounded-md lg:text-white items-center">
          <span className="text-md font-semibold">{timeLeft[interval as keyof typeof timeLeft] || '0'}</span>
          <span className="text-xs lg:text-sm">{interval.charAt(0).toUpperCase() + interval.slice(1)}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;