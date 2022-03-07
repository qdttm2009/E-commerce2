import logo from "./logo.svg";
import "./App.css";
import { products } from "./Data/data";
import ProductCard from "./Components/ProductCard";
//test
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductCard />
      </header>
    </div>
  );
}

export default App;
