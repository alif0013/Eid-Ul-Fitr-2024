import React from 'react';
import Countdown from './Components/CountDown';
import Banner from './Components/Banner';

const App = () => {
  return (
    <div>
      <div>
        <Banner/>
      </div>
      <Countdown/>
    </div>
  );
};

export default App;