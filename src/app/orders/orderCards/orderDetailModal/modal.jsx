"use client";

import { useState, useCallback, useEffect } from "react";

import { updateProductStatus } from "./dbhelper";
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

  console.log("Detalle de la orden", orderId, orderData.orderDetails);

  const updt_Record = (detail) => {
    UpdateRecord("Orders", orderId, detail, "me");
  };

  const handleChangeOrderStatus = (status, index) => {
    if (status === "ready") {
      // Update the product status to 'pending'
      updateProductStatus("DBIverChile", orderData, index, "pending");
    } else {
      // Handle other statuses (you can replace "shipped" with whatever status you want)
      updateProductStatus("DBIverChile", orderData, index, "ready");
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
                    <td>
                      <img
                        src={detail.product_image}
                        alt={detail.product_name}
                      ></img>
                    </td>
                    <td>
                      <div className="container">
                        <input
                          type="checkbox"
                          className="checkbox"
                          id={`checkbox-${index}`}
                          checked={detail.order_item_status}
                          // onChange={() => handleCheckboxChange(index)}
                          onChange={() => updt_Record(detail.order_item_status)}
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
