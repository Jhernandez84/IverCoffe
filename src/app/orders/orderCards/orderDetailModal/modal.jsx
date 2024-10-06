"use client";

import { useState, useCallback, useEffect } from "react";
import {
  CreateRecord,
  UpdateRecord,
  DeleteRecord,
} from "@/Components/Firebase/DataManager/DataOperations";
import "./modalstyles.css";

const Modal = ({ setShowDetailModal, orderData }) => {
  // const handleCreateRecord = () => {
  //   CreateRecord("CoffeProducts", newEntryData);
  //   setUpdateRecords((prevState) => !prevState); // Toggle true/false
  //   setShowModal(false);
  // };

  // const handleSaveChanges = (id) => {
  //   // console.log(newEntryData, id);
  //   UpdateRecord("CoffeProducts", id, newEntryData, "fakeuser");
  //   setUpdateRecords((prevState) => !prevState); // Toggle true/false
  //   setShowModal(false);
  // };

  // const handleDeleteRecord = (id) => {
  //   DeleteRecord("CoffeProducts", id);
  //   setUpdateRecords((prevState) => !prevState); // Toggle true/false
  //   setShowModal(false);
  // };

  // const NewDataFields = {
  //   product_id: itemData.id || null,
  //   product_name: itemData.product_name,
  //   product_description: itemData.product_description,
  //   product_category: itemData.product_category || null,
  //   product_sub_category: itemData.product_sub_category || null,
  //   product_image: itemData.product_image || null,
  //   product_quantity: itemData.product_quantity || 0,
  //   product_cost_price: itemData.product_cost_price || 0,
  //   product_sell_price: itemData.product_sell_price || 0,
  //   product_alrt_min_stock: itemData.product_alrt_min_stock || null,
  //   product_min_stock: itemData.product_min_stock || 0,
  //   product_allow_neg_qty: itemData.product_allow_neg_qty || null,
  //   product_max_neg_qty: itemData.product_max_neg_qty || 0,
  //   product_status: itemData.product_status || "enabled",
  // };

  // const [newEntryData, setNewEntryData] = useState(NewDataFields);
  // console.log(newEntryData);

  // const getNewEntryData = useCallback(({ target }) => {
  //   const { name, type, value, checked } = target;

  //   if (type === "checkbox") {
  //     // Handle boolean checkbox toggle
  //     setNewEntryData((prevState) => ({
  //       ...prevState,
  //       [name]: checked, // Set to the current checked state
  //     }));
  //   } else {
  //     // Handle regular input fields
  //     setNewEntryData((prevState) => ({
  //       ...prevState,
  //       [name]: value,
  //     }));
  //   }
  // }, []);

  // const handleBooleanToggle = (fieldName) => {
  //   setNewEntryData((prevState) => ({
  //     ...prevState,
  //     [fieldName]: !prevState[fieldName], // Toggle boolean field
  //   }));
  // };

  return (
    // El modal tendrá 3 filas para guardar datos 10,80,10
    <div className="modal-overlay">
      <div className="modal">
        <section className="modal-header-section">
          Detalle de la orden de: {orderData.orderCustomerName}
          {/* {newEntryData.image ? <img src={newEntryData.image} alt="" /> : []} */}
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
                      <img src={detail.product_image}></img>
                    </td>
                    <td>{detail.product_name}</td>
                    <td>
                      <img src={detail.product_image}></img>
                    </td>
                    <td>
                      <input type="checkbox" checked name="" id="" />
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
