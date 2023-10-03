import Heading from "./components/Heading";
import { Section } from "./components/Section";
import Counter from "./components/Counter";
import { useState } from "react";
import List from "./components/List";


const App = () => {
  const [count, setCount] = useState <number>(1);

  const list = ["☕ Coffee", "🌮 Tacos", "💻 Code"];

  return (
    <>
      <Heading title={"Title"} />
      <Section title={"Section Subtitle"}>This is the section. </Section>
      <Counter setCount = {setCount} > counter is {count} </Counter>
      <List items={list} render={(item: string) => <span  className="bold">{item} </span>}/>

    </>
  );
};

export default App;
