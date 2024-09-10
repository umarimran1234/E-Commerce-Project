"use client"
import React, { useEffect, useState } from 'react';

interface CountdownProps {
  targetDate: string;
}

const CountdownTimer: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = (targetDate: string): { days: number; hours: number; minutes: number; seconds: number } => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    const timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft.days = Math.floor(difference / (1000 * 60 * 60 * 24));
      timeLeft.hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      timeLeft.minutes = Math.floor((difference / 1000 / 60) % 60);
      timeLeft.seconds = Math.floor((difference / 1000) % 60);
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