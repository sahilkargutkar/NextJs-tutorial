import "./App.css";
import { Counter } from "./Counter";
import ObjComp from "./Objcomponent";
import TextField from "./TextField";

function App() {
  return (
    <div className="App">
      <TextField text="hello" />
      <ObjComp person={{ name: "", surname: "" }} />
      <Counter>
        {(count, setCount) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
    </div>
  );
}

export default App;
