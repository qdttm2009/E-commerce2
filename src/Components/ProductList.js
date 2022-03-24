import React from "react";
import { products } from "../Data/data";

import ProductCard from "./ProductCard";

const ProductList = ({ searchTerm }) => {
  return products
    .filter((obj) => obj.name.toLocaleLowerCase().includes(searchTerm))
    .map((product) => {
      const discount = product.discount;

      const minPrice = product.variations.map((variation) =>
        Math.min(
          ...variation.variation_price_list.map(
            (price_list) => price_list.price_in_USD
          )
        )
      );
      const sumMin = minPrice.reduce(
        (a, b) => a + b,
        product.base_price_in_USD
      );

      const maxPrice = product.variations.map((variation) =>
        Math.max(
          ...variation.variation_price_list.map(
            (price_list) => price_list.price_in_USD
          )
        )
      );
      const sumMax = maxPrice.reduce(
        (a, b) => a + b,
        product.base_price_in_USD
      );

      return (
        <ProductCard
          key={product.id}
          name={product.name}
          discountMin={sumMin}
          discountMax={sumMax}
          discount={discount}
          images={product.images[0]}
        />
      );
    });

  /* return (
    <div key={product.id}>
      <img src={product.images[0]} alt="" className="product__img" />
      <p>{product.name}</p>
      {displayPrice(sumMin, sumMax, discount)}
    </div>
  ); */
};

export default ProductList;
