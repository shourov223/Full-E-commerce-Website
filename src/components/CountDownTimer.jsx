import React, { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const [time, setTime] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56
  });
  const [isRunning, setIsRunning] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => {
          let { days, hours, minutes, seconds } = prevTime;

          if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
            setIsRunning(false);
            return prevTime;
          }

          if (seconds > 0) {
            seconds--;
          } else if (minutes > 0) {
            seconds = 59;
            minutes--;
          } else if (hours > 0) {
            seconds = 59;
            minutes = 59;
            hours--;
          } else if (days > 0) {
            seconds = 59;
            minutes = 59;
            hours = 23;
            days--;
          }

          return { days, hours, minutes, seconds };
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => setIsRunning(!isRunning);

  const handleReset = () => {
    setIsRunning(false);
    setTime({ days: 3, hours: 23, minutes: 19, seconds: 56 });
  };

  const adjustTime = (unit, increment) => {
    if (isRunning) return;

    setTime(prev => {
      const newTime = { ...prev };
      const max = unit === 'days' ? 999 : unit === 'hours' ? 23 : 59;

      newTime[unit] = Math.max(0, Math.min(max, prev[unit] + increment));
      return newTime;
    });
  };

  const formatNumber = (num) => num.toString().padStart(2, '0');

  return (
    <div className="">
      <div className="flex items-end justify-center gap-4">
        {/* Days */}
        <div className="text-center">
          <div className="text-gray-600 text-sm mb-2 font-medium">Days</div>
          <div className="relative group">
            <div className="text-[32px] font-bold leading-[30px]">
              {formatNumber(time.days)}
            </div>

          </div>
        </div>

        <div className="text-5xl font-bold text-[#E07575] pt-[12px]">:</div>

        {/* Hours */}
        <div className="text-center">
          <div className="text-gray-600 text-sm mb-2 font-medium">Hours</div>
          <div className="relative group">
            <div className="text-[32px] font-bold leading-[30px]">
              {formatNumber(time.hours)}
            </div>

          </div>
        </div>

        <div className="text-5xl font-bold text-[#E07575] pt-[12px]">:</div>

        {/* Minutes */}
        <div className="text-center">
          <div className="text-gray-600 text-sm mb-2 font-medium">Minutes</div>
          <div className="relative group">
            <div className="text-[32px] font-bold leading-[30px]">
              {formatNumber(time.minutes)}
            </div>

          </div>
        </div>

        <div className="text-5xl font-bold text-[#E07575] pt-[12px]">:</div>

        {/* Seconds */}
        <div className="text-center">
          <div className="text-gray-600 text-sm mb-2 font-medium">Seconds</div>
          <div className="relative group">
            <div className="text-[32px] font-bold leading-[30px]">
              {formatNumber(time.seconds)}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}