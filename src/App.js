import logo from "./logo.svg";
import "./App.css";
import { products } from "./Data/data";

import HomePage from "./Components/Page/HomePage";

function App() {
  return (
    <div className="App">
      <HomePage />
      <button className="btn btn-primary">button</button>
    </div>
  );
}

export default App;
