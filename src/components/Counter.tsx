import { ReactNode, useState, useReducer } from "react";

// type CounterProps = {
//   setCount: React.Dispatch<React.SetStateAction<number>>;
//   children: ReactNode;
// };

type ChildrenType = {
  children: (n: number) => ReactNode;
};

const initState = {
  count: 0,
};

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
};

const reducer = (
  state: typeof initState,
  action: ReducerAction
): typeof initState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };

    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };

    default:
      throw new Error();
  }
};

// const Counter = ( {setCount, children}: CounterProps) => {
const Counter = ({ children }: ChildrenType) => {
  // const [count, setCount] = useState<number | null>(null);
  const [count, setCount] = useState<number>(1); //? the type number can be infered here by typescript. so there is no need of adding type number.
  // const [count, setCount] = useState(1);

  const [state, dispatch] = useReducer(reducer, initState);

  const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
  const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });
  return (
    <>
      <h1>{children(state.count)}</h1>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
    </>
  );
};

export default Counter;
