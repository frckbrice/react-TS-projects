// import Heading from "./components/Heading";
// import { Section } from "./components/Section";
// import Counter from "./components/Counter";
import {
  useState,
  useEffect,
  useCallback,
  MouseEvent,
  KeyboardEvent,
  useMemo
} from "react";
// import List from "./components/List";


interface User {
  id: number,
  username: string
}

type fibFunct = (n: number) =>  number;






const App = () => {
  //? const [count, setCount] = useState <number>(1);
    const [users, setUsers] = useState<User[] | null>(null);
    const [count, setCount] = useState<number>(0); 
     //const [count, setCount] = useState<User>({} as User);//* you may have this one also. but it is not recommended

  const list = ["☕ Coffee", "🌮 Tacos", "💻 Code"];


  const fibonacci: fibFunct = useCallback((n) => {
    if (n < 2) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  },[]);

  const myNumber = 37;

  useEffect(() => {
    console.log('mounting');
    console.log('users', users)

    return ()  => console.log('unmounting')
  },[users ]) //? useEffect is dealing with sideEffect. it doesn't really return a value. when it comes to TS, there is nothing to do unless returning a value

  const addTwo = useCallback((e:MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement> ): void => { //? this event explicitly stated is not necessary here. we put it there for the sake of explanations.
    setCount( prev => prev + 1 )
  },[]);

  const result = useMemo<number>(
    () => fibonacci(myNumber),
    [myNumber, fibonacci]
  );

  return (
    <div className="App">
      {/* <Heading title={"Title"} />
      <Section title={"Section Subtitle"}>This is the section. </Section>
      <Counter setCount = {setCount} > counter is {count} </Counter>
      <List items={list} render={(item: string) => <span  className="bold">{item} </span>}/> */}

      <h1>{count} </h1>
      <button onClick={addTwo}>Add</button>
      <h2>{result}</h2>
    </div>
  );
};

export default App;
