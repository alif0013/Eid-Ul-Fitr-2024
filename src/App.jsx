// import React, { useState, useEffect } from 'react';

// const App = () => {
//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   function calculateTimeLeft() {
//     const difference = +new Date('2024-04-10') - +new Date();
//     let timeLeft = {};

//     if (difference > 0) {
//       timeLeft = {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60)
//       };
//     }

//     return timeLeft;
//   }

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearTimeout(timer);
//   });

//   const timerComponents = [];

//   Object.keys(timeLeft).forEach(interval => {
//     if (!timeLeft[interval]) {
//       return;
//     }

//     timerComponents.push(
//       <span>
//         {timeLeft[interval]} {interval}{' '}
//       </span>
//     );
//   });

//   return (
//     <div>
//       <h1>Countdown to Eid:</h1>
//       {timerComponents.length ? timerComponents : <span>Eid Mubarak!</span>}
//     </div>
//   );
// };

// export default App;
import React, { useState, useEffect } from 'react';

const App = () => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime === 1) {
          setShowMessage(true);
          clearInterval(timer);
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {!showMessage ? (
        <div>
          <h1>Countdown to Eid:</h1>
          <h2>{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</h2>
        </div>
      ) : (
        <div>
          <h1>Eid Mubarak!</h1>
        </div>
      )}
    </div>
  );
};

export default App;

