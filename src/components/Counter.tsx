import { ReactNode } from "react";
import {
  useCounter,
  useCounterText,
} from "../Context/CounterContext";

// type CounterProps = {
//   setCount: React.Dispatch<React.SetStateAction<number>>;
//   children: ReactNode;
// };

type ChildrenType = {
  children: (n: number) => ReactNode;
};

// const Counter = ( {setCount, children}: CounterProps) => {
const Counter = ({ children }: ChildrenType) => {
  // const [count, setCount] = useState<number | null>(null);
  // const [count, setCount] = useState<number>(1); //? the type number can be infered here by typescript. so there is no need of adding type <number>.
  // const [count, setCount] = useState(1);

  const { text, handleTextInput } = useCounterText();
  const { count, increment, decrement } = useCounter();

  return (
    <>
      <h1>{children(count)}</h1>
      <div>
        <button onClick={increment}> + </button>
        <button onClick={decrement}> - </button>
      </div>
      <input type="text" onChange={handleTextInput} />
      <h2>{text}</h2>
    </>
  );
};

export default Counter;
