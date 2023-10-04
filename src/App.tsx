import Counter from "./components/Counter";
import { CounterProvider, initState } from "./Context/CounterContext";

function App() {
  return (
    <>
      <CounterProvider count={initState.count} text={initState.text}>
        <Counter>{(num: number) => <> current count: {num} </>}</Counter>
      </CounterProvider>
    </> 
    //? The provider only expects one child. wrap the children in a fragment <></> Or Change the ChildrenType in context to : ReactElement | ReactEment[] | undefinded
  );
}

export default App;
