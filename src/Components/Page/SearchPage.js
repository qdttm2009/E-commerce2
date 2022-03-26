import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "../Layout/Layout";

import ProductList from "../ProductList";

const SearchPage = () => {
  const location = useLocation();
  return (
    <Layout>
      <h1>SearchPage</h1>

      <ProductList searchTerm={location.state.searchTerm} />
      {console.log(location.state.searchTerm)}
    </Layout>
  );
};

export default SearchPage;
