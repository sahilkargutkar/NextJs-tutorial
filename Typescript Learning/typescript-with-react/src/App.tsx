import "./App.css";
import ObjComp from "./Objcomponent";
import TextField from "./TextField";

function App() {
  return (
    <div className="App">
      <TextField text="hello" />
      <ObjComp person={{ name: "", surname: "" }} />
    </div>
  );
}

export default App;
