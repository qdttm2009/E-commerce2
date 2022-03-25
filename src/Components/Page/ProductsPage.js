import React from "react";
import ProductList from "../ProductList";
import Layout from "../Layout/Layout";

export default function ProductsPage() {
  return (
    <Layout>
      <div>Products</div>
      <ProductList />
    </Layout>
  );
}
