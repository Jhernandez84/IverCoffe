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
          <div className="text-header">{products.Product_Name}</div>
          <div className="text-description">{products.Product_Desc}</div>
        </div>
        <div className="order-details-options-container">
          <div>
            <p className="Price">
              $ {products.Product_Price}
            </p>
          </div>
          <div>
            <p className="remove" onClick={() => alert("removed")}>
              Eliminar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartAddedProduct;
