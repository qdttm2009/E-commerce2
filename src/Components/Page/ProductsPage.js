import React from "react";
import ProductList from "../ProductList";
import Layout from "../Layout/Layout";

export default function ProductsPage() {
  return (
    <Layout>
      <h1>Products</h1>
      <ProductList />
    </Layout>
  );
}
