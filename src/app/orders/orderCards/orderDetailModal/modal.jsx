"use client";

import { useState, useCallback, useEffect } from "react";

import { updateProductStatus } from "@/Components/Firebase/DataManager/DataOperations";
import { UpdateRecord } from "@/Components/Firebase/DataManager/DataOperations";

import "./modalstyles.css";

const Modal = ({ setShowDetailModal, orderId, orderData }) => {
  const [checkedState, setCheckedState] = useState(
    new Array(orderData.orderDetails.length).fill(false)
  );

  const handleCheckboxChange = (index) => {
    // Toggle checkbox value for the corresponding row
    const updatedCheckedState = checkedState.map((item, idx) =>
      idx === index ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  const handleChangeOrderStatus = (status, index) => {
    console.log(status, index);
    if (status === "ready") {
      // Update the product status to 'pending'
      updateProductStatus("Orders", orderId, index, "pending");
    } else {
      // Handle other statuses (you can replace "shipped" with whatever status you want)
      updateProductStatus("Orders", orderId, index, "ready");
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
                    <td>{detail.count}</td>
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
          {/* <p
            className="btn-modal"
            onClick={() => handleSaveChanges(newEntryData.product_id)}
          >
            Guardar
          </p>
          <p className="btn-modal" onClick={() => handleCreateRecord()}>
            Duplicar
          </p>
          <p
            className="btn-modal"
            onClick={() => handleDeleteRecord(newEntryData.product_id)}
            // onClick={() => handleDeleteRecord(newEntryData.product_id)}
          >
            Eliminar
          </p> */}
          <p className="btn-modal" onClick={() => setShowDetailModal(false)}>
            Salir
          </p>
        </section>
      </div>
    </div>
  );
};

export default Modal;
