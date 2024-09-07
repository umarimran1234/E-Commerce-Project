"use client"
import React, { useEffect, useState } from 'react';

interface CountdownProps {
  targetDate: string;
}

const CountdownTimer: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex space-x-2">
      {Object.keys(timeLeft).map((interval, index) => (
        <div key={index} className="flex flex-col bg-[#606060] px-2 rounded-lg text-white items-center">
          <span className="text-lg font-semibold">{timeLeft[interval as keyof typeof timeLeft] || '0'}</span>
          <span className="text-sm">{interval.charAt(0).toUpperCase() + interval.slice(1)}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
