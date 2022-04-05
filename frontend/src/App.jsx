import { useState } from "react";
import "./App.css";
import Quora from "./components/Quora";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Quora />
    </div>
  );
}

export default App;
