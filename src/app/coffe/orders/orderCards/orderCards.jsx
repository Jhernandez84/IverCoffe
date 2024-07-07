import React, { useEffect } from "react";
import { useState } from "react";
import "./styles.css";

const OrdersCard = ({ orders }) => {
  const {
    id,
    orderCustomerName,
    orderStatus,
    orderPaymentStatus,
    orderDetails,
  } = orders;

  // console.log(orderDetails);

  return (
    <>
      {/* <div className={`products-card ${!newOrder ? "disabled" : ""}`}> */}
      <div className="orderCard-container">
        <section className="order-header">
          <h1>ID de la orden :{id}</h1>
          <h1>Cliente:{orderCustomerName}</h1>
        </section>
        <section className="order-details">
          <p>Detalle del pedido:</p>
          <div className="orders-list">
            {/* Crear tabla para visualizar mejor el producto */}
            {orderDetails?.map((list, index) => {
              return (
                <>
                  <img src={list.Product_Img} alt="" />
                  <div>
                    {list.Product_Name}
                    <input type="checkbox" name="" id="" />
                  </div>
                </>
              );
            })}
          </div>
          {/* <p className="product-details">{product.Product_Desc}</p> */}
          {/* <p className="product-price">$ {product.Product_Price}</p> */}
        </section>
        <section className="order-footer">
          <p>Estado de la orden 🟢🟡</p>
          {/* <p>{orderStatus}</p> */}
        </section>
      </div>
    </>
  );
};

export default OrdersCard;
