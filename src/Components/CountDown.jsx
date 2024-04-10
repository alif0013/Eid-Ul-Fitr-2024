import React, { useState, useEffect } from "react";
import Celebration from "./Celebration";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-04-11") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        sec: Math.floor((difference / 1000) % 60),
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
        <>
          <h1 className="md:text-xl border-purple-600 border-[1px] font-medium text-green-400 p-4 rounded-md hover:border-blue-600"> {timerComponents} </h1>

        </>
      ) : (

        
        <>
          <Celebration></Celebration>
          <h1 className="text-2xl md:text-5xl rounded-md drop-shadow-md bg-black p-4 text-green-400 border-purple-600 border-[1px]  font-semibold  hover:text-blue-600 hover:drop-shadow-lg">EId Mubarak !</h1>


        </>
      )}
    </div>
  );
};

export default CountdownTimer;
