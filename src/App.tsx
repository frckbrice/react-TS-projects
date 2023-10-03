import Heading from "./components/Heading";
import { Section } from "./components/Section";
import Counter from "./components/Counter";


const App = () => {


  return (
    <>
      <Heading title={"Title"} />
      <Section title={"Section Subtitle"}>This is the section. </Section>
      <Counter />
    </>
  );
};

export default App;
