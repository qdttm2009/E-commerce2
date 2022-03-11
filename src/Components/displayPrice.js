import React from "react";

const displayPrice = (min, max, discount) => {
  if (discount != 0) {
    if (min == max)
      return (
        <div>
          <p>Discount: {discount * 100}%</p>
          <p>
            {min - min * discount}$ (Old Price: {min}$){" "}
          </p>
        </div>
      );
    else
      return (
        <div>
          <p>Discount: {discount * 100}%</p>
          <p>
            {min - min * discount}$ - {max - max * discount} (Old Price: {min}$
            - {max}$){" "}
          </p>
        </div>
      );
  } else {
    if (min == max)
      return (
        <div>
          <p>{min - min * discount}$</p>
        </div>
      );
    else
      return (
        <div>
          <p>
            {min - min * discount}$ - {max - max * discount}$
          </p>
        </div>
      );
  }
};

export default displayPrice;
