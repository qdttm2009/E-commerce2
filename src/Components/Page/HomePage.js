import React from "react";
import ProductList from "../ProductList";
import Layout from "../Layout/Layout";

export default function HomePage() {
  return (
    <Layout>
      <div>
        <ProductList />
      </div>
    </Layout>
  );
}
