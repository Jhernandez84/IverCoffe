import React from "react";
import "./styles.css";

const CartAddedProduct = ({ products }) => {
  return (
    <div className="order-container">
      <div className="order-detail-container">
        <div className="order-detail-img-container">
          <img src={products.Product_Img} alt="" />
        </div>
        <div className="order-detail-description-container">
            <div className="order-detail-description-header">cosa1</div>
            <div className="order-detail-description-desc">cosa1</div>
        </div>
      </div>
    </div>
  )
};

export default CartAddedProduct;
