import React from "react";
import "./styles.css";

const CartAddedProduct = ({ products }) => {
  return (
    <div className="order-container">
      <div className="order-detail-container">
        <div className="order-detail-img-container">
          <img src={products?.Product_Img} alt="" />
        </div>
        <div className="order-detail-description-container">
          <div className="text-header">Producto ejemplo</div>
          <div className="text-description">$ 1.500 x X = 1$.500</div>
        </div>
        <div className="order-details-options-container">
          <p className="options delete" onClick={() => alert("removed")}>
            $ Total
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartAddedProduct;