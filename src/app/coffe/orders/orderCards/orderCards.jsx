import React, { useEffect } from "react";
import { useState } from "react";
import "./styles.css";

const OrdersCard = ({ orders, setOrderDetails, setMainOrderData }) => {
  const {
    id,
    orderCustomerName,
    orderStatus,
    orderPaymentStatus,
    orderDetails,
  } = orders;

  // console.log("Detalle del Pedido", orders.orderDetails);

  const HandleOrderCheck = (details) => {
    setOrderDetails(details);
    setMainOrderData(orders);
  };

  return (
    <>
      {/* <div className={`products-card ${!newOrder ? "disabled" : ""}`}> */}
      <div
        className="orderCard-container"
        onClick={() => HandleOrderCheck(orders.orderDetails)}
      >
        <section className="order-header">
          <h1>Orden :{id}</h1>
          <h1>Cliente: {orderCustomerName}</h1>
        </section>
        <section className="order-details">
          <p>Detalle del pedido</p>
        </section>
        <section className="order-footer">
          <progress className="progress-bar" value="50" max="100"></progress>

          {/* <p>Estado de la orden 🟢 🟡 🔴</p>
          <button type="button">Pedido Completado</button> */}
          {/* <p>{orderStatus}</p> */}
        </section>
      </div>
    </>
  );
};

export default OrdersCard;
