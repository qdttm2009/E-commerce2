import React from "react";
import displayPrice from "./displayPrice";

const ProductCard = ({
  id,
  name,
  discountMin,
  discountMax,
  discount,
  images,
}) => {
  return (
    <div>
      <img src={images} alt="" className="product__img" />
      <div>{name}</div>

      <div>{displayPrice(discountMin, discountMax, discount)}</div>
    </div>
  );
};

export default ProductCard;
