import React from "react";
import { products } from "../Data/data";

const ProductCard = () => {
  return products.map((product) => {
    return (
      <div key={product.id}>
        <img src={product.images[0]} alt="" className="product__img" />
        <p>{product.name}</p>
      </div>
    );
  });
};

export default ProductCard;
