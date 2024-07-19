import React, { useEffect } from "react";
import { useState } from "react";
import "./styles.css";

const OrdersCard = ({
  orders,
  setOrderDetails,
  setMainOrderData,
  setOrderMenuStatus,
}) => {
  const {
    id,
    orderCustomerName,
    orderStatus,
    orderPaymentStatus,
    orderDetails,
  } = orders;

  const HandleOrderSelected = (details) => {
    setOrderDetails(details);
    setMainOrderData(orders);
    setOrderMenuStatus(0);
  };

  return (
    <>
      {/* <div className={`products-card ${!newOrder ? "disabled" : ""}`}> */}
      <div
        className="orderCard-container"
        onClick={() => HandleOrderSelected(orders.orderDetails)}
      >
        <section className="order-header">
          <p className="TextHeader">Orden :{id}</p>
          <p className="TextClientLabel">Cliente: {orderCustomerName}</p>
          <p className="TextProductsLabel"> Productos: {orderDetails.Count}</p>
          <p className="TextProductsLabel"> Estado: {orderPaymentStatus}</p>
        </section>
        <section className="order-details">
          {/* <p>Detalle del pedido</p> */}
        </section>
        <section className="order-footer">
          <progress className="progress-bar" value={Math.random(5,10)*100} max="100"></progress>

          {/* <p>Estado de la orden 🟢 🟡 🔴</p>
          <button type="button">Pedido Completado</button> */}
          {/* <p>{orderStatus}</p> */}
        </section>
      </div>
    </>
  );
};

export default OrdersCard;
