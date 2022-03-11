import React from "react";
import { useState } from "react";
import { products } from "../Data/data";
import displayPrice from "./displayPrice";

const ProductList = () => {
  return products.map((product) => {
    const minPrice = product.variations.map((variation) =>
      Math.min(
        ...variation.variation_price_list.map(
          (price_list) => price_list.price_in_USD
        )
      )
    );

    const maxPrice = product.variations.map((variation) =>
      Math.max(
        ...variation.variation_price_list.map(
          (price_list) => price_list.price_in_USD
        )
      )
    );

    const sumMin = minPrice.reduce((a, b) => a + b, product.base_price_in_USD);
    const sumMax = maxPrice.reduce((a, b) => a + b, product.base_price_in_USD);
    const discount = product.discount;

    return (
      <div key={product.id}>
        <img src={product.images[0]} alt="" className="product__img" />
        <p>{product.name}</p>
        {displayPrice(sumMin, sumMax, product.discount)}
      </div>
    );
  });

  /* return (
      <div key={product.id}>
        <img src={product.images[0]} alt="" className="product__img" />
        <p>{product.name}</p>
        <p>
          Price: 
        </p>
      </div>
    ); */
};

export default ProductList;
