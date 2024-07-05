import React, { useEffect } from "react";
import "./styles.css";

const CartAddedProduct = ({ removeFromCart, products }) => {

  console.log('productos en carrito', products.Count)

  const reduceItem = (value) => {
    removeFromCart(value);
  };

  return (
    <div className="order-container">
      <div className="order-detail-container">
        <div className="order-detail-img-container">
          <img src={products.Product_Img} alt="" />
        </div>
        <div className="order-detail-description-container">
          <div className="text-header">{products.Product_Name}</div>
          {products.Count > 1 ? (
            <div
              className="text-description expand"
              onClick={() => alert("details")}
            >
              Ver detalle del pedido
            </div>
          ) : (
            <div className="text-description">{products.Product_Desc}</div>
          )}
        </div>
        <div className="order-details-options-container">
          <div>
            <p className="Price">$ {products.Product_Price}</p>
          </div>
          <div>
            <p
              className="remove"
              onClick={() =>
                reduceItem(products.Product_id)
              }
            >
              Eliminar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartAddedProduct;
