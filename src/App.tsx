import Counter from "./components/Counter";

function App() {


  return (
  <>
   <Counter>{(num: number) => <> current count: {num} </>}</Counter>
  </>
 );
}

export default App;