import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-04-10") - +new Date();
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

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="flex justify-center my-5">
      {timerComponents.length ? (
        <h1 className="md:text-xl font-medium text-green-400 p-4 bg-white rounded"> {timerComponents} </h1>
      ) : (
        <span className="text-2xl md:text-5xl rounded-md drop-shadow-md bg-white p-4 text-green-400 font-mono font-semibold hover:bg-rose-500 hover:text-white hover:drop-shadow-lg">EId Mubarak!</span>
      )}
    </div>
  );
};

export default CountdownTimer;
