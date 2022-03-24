import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "../Layout/Layout";

import ProductList from "../ProductList";

const SearchPage = () => {
  const location = useLocation();
  return (
    <Layout>
      <div>SearchPage</div>
      {console.log(location.state.searchTerm)}
      <ProductList searchTerm={location.state.searchTerm} />
    </Layout>
  );
};

export default SearchPage;
