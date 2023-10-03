

import { useState } from 'react'
import PropTypes from 'prop-types'

const Counter = () => {

  // const [count, setCount] = useState<number | null>(null);
  //const [count, setCount] = useState<number>(1); //? the type number can be infered here by typescript. so there is no need of adding type number.
  const [count, setCount] = useState(1);
  return (
    <>
      <h1>count is {count} </h1> 
      <button onClick={() => setCount(prev  => prev + 1)}> + </button>
      <button onClick={() => setCount(prev => prev - 1)}> - </button>
    </>
  ) 
}

Counter.propTypes = {
  Counter: PropTypes.number,
  setCout: PropTypes.func,
};

export default Counter
