import Heading from "./components/Heading";
import { Section } from "./components/Section";
import Counter from "./components/Counter";
import { useState } from "react";


const App = () => {
  const [count, setCount] = useState <number>(1);

  return (
    <>
      <Heading title={"Title"} />
      <Section title={"Section Subtitle"}>This is the section. </Section>
      <Counter setCount = {setCount} > counter is {count} </Counter>
    </>
  );
};

export default App;
