import React, { useState } from 'react';
import Confetti from 'react-confetti';

const Celebration = () => {

  // const [btn, setBtn] = useState(false);

  return (
    <div className="flex justify-center items-center -my-60">
      
      {/* <button className='bg-black px-3 py-1 rounded-lg text-yellow-400' onClick={()=> setBtn(!btn)}>Lets Celebrate</button>
      {
        btn && <Confetti
        width={200}
        height={500}
        numberOfPieces={200}
        tweenDuration={1000}
      />
      } */}

       <Confetti
        width={200}
        height={500}
        numberOfPieces={200}
        tweenDuration={1000}
      />
      
    </div>
  );
};

export default Celebration;
