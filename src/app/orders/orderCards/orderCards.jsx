import React, { useEffect } from "react";
import { useState } from "react";
import "../orderCards/styles.css";

const OrdersCard = ({
  orderDetail,
  setOrderDetails,
  setMainOrderData,
  setOrderMenuStatus,
  setShowDetailModal,
}) => {
  const {
    id,
    orderCustomerName,
    orderStatus,
    orderPaymentStatus,
    orderDetails,
  } = orderDetail;

  console.log("Detalle de la orden", orderDetail.orderDetails);

  const HandleOrderSelected = (value) => {
    setShowDetailModal(true);
    setMainOrderData(value);
    setOrderMenuStatus(0);
  };

  return (
    <>
      {/* <div className={`products-card ${!newOrder ? "disabled" : ""}`}> */}
      <div
        className="orderCard-container"
        onClick={() => HandleOrderSelected(orderDetail)}
      >
        <section className="order-header">
          <p className="TextHeader">Cliente:{orderCustomerName}</p>
          <p className="TextClientLabel">Nº Orden: {id}</p>
          <p className="TextProductsLabel"> Productos: {orderDetails.lenght}</p>
          <p className="TextProductsLabel"> Estado: {orderPaymentStatus}</p>
        </section>
        <section className="order-details">
          {/* <p>Detalle del pedido</p> */}
        </section>
        <section className="order-footer">
          <progress
            className="progress-bar"
            value={Math.random(5, 10) * 100}
            max="100"
          ></progress>

          {/* <p>Estado de la orden 🟢 🟡 🔴</p>
          <button type="button">Pedido Completado</button> */}
          {/* <p>{orderStatus}</p> */}
        </section>
      </div>
    </>
  );
};

export default OrdersCard;