import "./App.css";
import ButtonDecrement from "./Components/ButtonDecrement";
import ButtonIncrement from "./Components/ButtonIncrement";
import Input from "./Components/Input";

function App() {
  return (
    <div className="App">
      <ButtonIncrement />
      <ButtonDecrement />
      <Input />
    </div>
  );
}

export default App;
