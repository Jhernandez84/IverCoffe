"use client";

import { useState, useCallback, useEffect } from "react";
import { GetDataFromLocalStorage } from "@/Components/Firebase/DataManager/LocalStorage";
import { updateProductStatus } from "@/Components/Firebase/DataManager/DataOperations";
import { UpdateRecord } from "@/Components/Firebase/DataManager/DataOperations";

import "./modalstyles.css";

const Modal = ({ setShowDetailModal, orderId, orderData }) => {
  const [checkedState, setCheckedState] = useState(
    new Array(orderData.orderDetails.length).fill(false)
  );

  const [orderDetailsss, setOrderDetails] = useState([]);

  useEffect(() => {
    const OrderItems = GetDataFromLocalStorage("orders");

    if (OrderItems) {
      // Find the order with the given orderId
      const order = OrderItems.find((order) => order.id === orderId);
      // Set the orderDetails state if the order is found
      if (order) {
        setOrderDetails(order.orderDetails || []);
      } else {
        console.log("Order not found!");
      }
    }
  }, []);

  const updateOrderItemStatus = (orderId, itemIndex) => {
    // Retrieve the current orders from local storage
    const LocalStoragedOrders = GetDataFromLocalStorage("orders");
    let orders = LocalStoragedOrders || [];

    // Find the order with the given orderId
    orders = orders.map((order) => {
      if (order.id === orderId) {
        // Ensure the index is valid
        if (order.orderDetails && order.orderDetails[itemIndex]) {
          // Update 'order_item_status' from 'ready' to 'pending' for the item at the given index
          if (order.orderDetails[itemIndex].order_item_status === "ready") {
            order.orderDetails[itemIndex].order_item_status = "pending";
          } else {
            order.orderDetails[itemIndex].order_item_status = "ready";
          }
        }
      }
      return order; // Return the updated order
    });

    // Save the updated orders back to local storage
    localStorage.setItem("orders", JSON.stringify(orders));

    console.log(
      `Order item at index ${itemIndex} in order ${orderId} updated from 'ready' to 'pending'.`
    );
  };

  // Example usage
  const handleChangeOrderStatus = (status, index) => {
    if (status === "ready") {
      // Update the product status to 'pending'
      updateProductStatus("Orders", orderId, index, "pending");
      updateOrderItemStatus(orderId, index);
    } else {
      // Handle other statuses (you can replace "shipped" with whatever status you want)
      updateProductStatus("Orders", orderId, index, "ready");
      updateOrderItemStatus(orderId, index); // Update the item at index 2
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <section className="modal-header-section">
          Detalle de la orden de: {orderData.orderCustomerName}
        </section>
        <section className="modal-body-section">
          <table>
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {orderData.orderDetails.map((detail, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img
                        src={detail.product_image}
                        alt={detail.product_name}
                      ></img>
                    </td>
                    <td>{detail.product_name}</td>
                    <td>{detail.Count}</td>
                    <td>
                      <div className="container">
                        <input
                          type="checkbox"
                          className="checkbox"
                          id={`checkbox-${index}`}
                          checked={detail.order_item_status}
                          // onChange={() => handleCheckboxChange(index)}
                          onChange={() =>
                            handleChangeOrderStatus(
                              detail.order_item_status,
                              index
                            )
                          }
                        />
                        <label className="switch" htmlFor={`checkbox-${index}`}>
                          <span className="slider"></span>
                        </label>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
        <section className="modal-header-section">
          {/* Detalle de la orden de: {orderData.orderStatus} */}
          {/* {newEntryData.image ? <img src={newEntryData.image} alt="" /> : []} */}
        </section>
        <section className="modal-footer-section">
          <p
            className="btn-modal"
            onClick={() => handleDeleteRecord(newEntryData.product_id)}
          >
            Cancelar Pedido
          </p>
          <p className="btn-modal" onClick={() => setShowDetailModal(false)}>
            Salir
          </p>
        </section>
      </div>
    </div>
  );
};

export default Modal;
