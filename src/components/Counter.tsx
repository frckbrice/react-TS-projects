

import React, { ReactNode, useState } from 'react'


type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
 
  children: ReactNode;
};

const Counter = ( {setCount, children}: CounterProps) => {

  // const [count, setCount] = useState<number | null>(null);
  //const [count, setCount] = useState<number>(1); //? the type number can be infered here by typescript. so there is no need of adding type number.
  // const [count, setCount] = useState(1);
  return (
    <>
      <h1>{children} </h1>
      <button onClick={() => setCount((prev) => prev + 1)}> + </button>
      <button onClick={() => setCount((prev) => prev - 1)}> - </button>
    </>
  ); 
}



export default Counter
