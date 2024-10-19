import React, { useEffect, useState } from "react";
import "../orderCards/styles.css";
import Modal from "./orderDetailModal/modal";
import { GetDataFromLocalStorage } from "@/Components/Firebase/DataManager/LocalStorage";

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

  const [showModal, setShowModal] = useState(false);

  const HandleOrderSelected = (value) => {
    setShowDetailModal(true);
    setMainOrderData(value);
    setOrderMenuStatus(0);
  };

  const getTotalCountForOrderId = (orderId) => {
    const LocalStoragedOrders = GetDataFromLocalStorage("orders");
    const orders = LocalStoragedOrders || [];

    // Find the order with the given order ID
    const order = orders.find((order) => order.id === orderId);

    if (!order) {
      console.log("Order not found!");
      return 0; // Return 0 if order not found
    }

    // Ensure that orderDetails is an array before using reduce
    const orderDetails = Array.isArray(order.orderDetails)
      ? order.orderDetails
      : [];

    // Sum the 'Count' field in the orderDetails array
    const totalCount = orderDetails.reduce(
      (acc, item) => acc + (item.Count || 0),
      0
    );

    return totalCount;
  };

  const getTotalReadyCountForOrderId = (orderId) => {
    const LocalStoragedOrders = GetDataFromLocalStorage("orders");
    const orders = LocalStoragedOrders || [];

    // Find the order with the given order ID
    const order = orders.find((order) => order.id === orderId);

    if (!order) {
      console.log("Order not found!");
      return 0; // Return 0 if order not found
    }

    // Ensure orderDetails is an array before using reduce
    const orderDetails = Array.isArray(order.orderDetails)
      ? order.orderDetails
      : [];

    // Filter and sum the 'Count' field for items with 'order_item_status' === 'ready'
    const readyCount = orderDetails.reduce((acc, item) => {
      return item.order_item_status === true ? acc + (item.Count || 0) : acc;
    }, 0);

    return readyCount;
  };

  const PercentageDone = (id) => {
    const totalCount = getTotalCountForOrderId(id); // Total Count of all items
    const readyCount = getTotalReadyCountForOrderId(id); // Total Count of 'ready' items

    // Ensure totalCount is not zero to avoid division by zero
    if (totalCount > 0) {
      return (100 * readyCount) / totalCount; // Correct percentage formula
    } else {
      return 0; // If no items, return 0%
    }
  };

  const percentage = PercentageDone(id);

  return (
    <>
      {/* <div className={`products-card ${!newOrder ? "disabled" : ""}`}> */}
      {showModal && (
        <Modal
          setShowDetailModal={setShowModal}
          orderId={id}
          orderData={orderDetail}
        />
      )}
      <div className="orderCard-container" onClick={() => setShowModal(true)}>
        <section className="order-header">
          <p className="TextHeader">Cliente: {orderCustomerName}</p>
          <p className="TextClientLabel">Nº Orden: {id}</p>
          <p className="TextProductsLabel">
            Total de Productos: {getTotalCountForOrderId(id)}
          </p>
          <p className="TextProductsLabel">
            Estado:{" "}
            {percentage === 100
              ? Math.round(percentage, 2) + "%" + " listo"
              : " En proceso al " + Math.round(percentage, 2) + "%"}
          </p>
        </section>
        <section className="order-details">
          {/* <p>Detalle del pedido</p> */}
        </section>
        <section className="order-footer">
          <progress
            className="progress-bar"
            value={percentage}
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
