import React, { useEffect, useState } from "react";
import "./styles.css";

import Modal from "./modal/modal";

const CartAddedProduct = ({ removeFromCart, products }) => {
  console.log("productos en carrito", products.Count);

  const reduceItem = (value) => {
    removeFromCart(value);
  };

  const [showDetailModal, setShowDetailModal] = useState(false);

  return (
    <div className="order-container">
      {/* {showDetailModal && <Modal closeModal={closeModal} item={selectedItem} />} */}
      {showDetailModal && <Modal setShowDetailModal={setShowDetailModal} item={products}/>}
      <div className="order-detail-container">
        <div className="order-detail-img-container">
          <img src={products.Product_Img} alt="" />
        </div>
        <div className="order-detail-description-container">
          {products.Count > 1 ? (
            <div className="text-header">
              {products.Product_Name} x {products.Count}
            </div>
          ) : (
            <div className="text-header">{products.Product_Name}</div>
          )}
          {products.Count > 1 ? (
            <div
              className="text-description expand"
              onClick={() => setShowDetailModal(true)}
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
              onClick={() => reduceItem(products.Product_id)}
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
