import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import HomePage from "./Components/Page/HomePage";
import ProductDetail from "./Components/Page/ProductDetail";
import LoginPage from "./Components/Page/LoginPage";
import CartPage from "./Components/Page/CartPage";
import SearchPage from "./Components/Page/SearchPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/productdetail" exact element={<ProductDetail />} />
          <Route path="/cart" exact element={<CartPage />} />
          <Route path="/searchpage" exact element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
