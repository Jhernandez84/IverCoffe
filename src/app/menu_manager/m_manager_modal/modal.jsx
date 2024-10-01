"use client";

import { useState, useCallback, useEffect } from "react";
import {
  CreateRecord,
  UpdateRecord,
  DeleteRecord,
} from "@/Components/Firebase/DataManager/DataOperations";
import "./modalstyles.css";

const Modal = ({ setShowModal, itemData, NewRecord, setUpdateRecords }) => {
  const handleCreateRecord = () => {
    CreateRecord("CoffeProducts", newEntryData);
    setUpdateRecords((prevState) => !prevState); // Toggle true/false
    setShowModal(false);
  };

  const handleSaveChanges = (id) => {
    // console.log(newEntryData, id);
    UpdateRecord("CoffeProducts", id, newEntryData, "fakeuser");
    setUpdateRecords((prevState) => !prevState); // Toggle true/false
    setShowModal(false);
  };

  const handleDeleteRecord = (id) => {
    DeleteRecord("CoffeProducts", id);
    setUpdateRecords((prevState) => !prevState); // Toggle true/false
    setShowModal(false);
  };

  const NewDataFields = {
    product_id: itemData.id || null,
    product_name: itemData.product_name,
    product_description: itemData.product_description,
    product_category: itemData.category || null,
    product_sub_category: itemData.product_sub_category || null,
    product_image: itemData.product_image || null,
    product_quantity: itemData.product_quantity || 0,
    product_cost_price: itemData.product_cost_price || 0,
    product_sell_price: itemData.product_sell_price || 0,
    product_alrt_min_stock: itemData.product_alrt_min_stock || null,
    product_min_stock: itemData.product_min_stock || 0,
    product_allow_neg_qty: itemData.product_allow_neg_qty || null,
    product_max_neg_qty: itemData.product_max_neg_qty || 0,
    product_status: itemData.product_status || 'enabled',
  };

  const [newEntryData, setNewEntryData] = useState(NewDataFields);
  console.log(newEntryData);

  const getNewEntryData = useCallback(({ target }) => {
    const { name, type, value, checked } = target;

    if (type === "checkbox") {
      // Handle boolean checkbox toggle
      setNewEntryData((prevState) => ({
        ...prevState,
        [name]: checked, // Set to the current checked state
      }));
    } else {
      // Handle regular input fields
      setNewEntryData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  }, []);

  const handleBooleanToggle = (fieldName) => {
    setNewEntryData((prevState) => ({
      ...prevState,
      [fieldName]: !prevState[fieldName], // Toggle boolean field
    }));
  };

  return (
    // El modal tendrá 3 filas para guardar datos 10,80,10
    <div className="modal-overlay">
      <div className="modal">
        {/* <span
          className="close"
          onClick={() => {
            setShowModal(false);
          }}
        >
          &times;
        </span> */}
        <section className="modal-header-section">
          Edición de producto - {newEntryData.product_name} -
          {newEntryData.image ? <img src={newEntryData.image} alt="" /> : []}
        </section>
        <section className="modal-body-section">
          <div className="min_data_section">
            <div className="data_grouping">
              <label htmlFor="product_name">Nombre del producto</label>
              <input
                type="text"
                name="product_name"
                id="product_name"
                placeholder={newEntryData.product_name}
                onChange={getNewEntryData}
              />
            </div>
            <div className="data_grouping">
              <label htmlFor="product_description">
                Descripción del producto
              </label>
              <input
                type="text"
                name="product_description"
                id="product_description"
                placeholder={newEntryData.product_description}
                onChange={getNewEntryData}
              />
            </div>
            <div className="data_grouping">
              <label htmlFor="product_image">Imagen del producto</label>
              <input
                type="text"
                name="product_image"
                id="product_image"
                placeholder={newEntryData.product_image}
                onChange={getNewEntryData}
              />
            </div>
            <div className="data_grouping">
              <label htmlFor="product_category">Categoría</label>
              <select
                name="product_category"
                id="product_category"
                value={newEntryData.product_category}
                onChange={getNewEntryData}
              >
                <option value="enabled">Habilitado</option>
                <option value="pending">Pendiente</option>
                <option value="soldout">Agotado</option>
              </select>
            </div>
            <div className="data_grouping">
              <label htmlFor="product_sub_category">Sub Categoría</label>
              <select
                name="product_sub_category"
                id="product_sub_category"
                value={newEntryData.product_sub_category}
                onChange={getNewEntryData}
              >
                <option value="enabled">Habilitado</option>
                <option value="pending">Pendiente</option>
                <option value="soldout">Agotado</option>
              </select>
            </div>
            <div className="data_grouping">
              <label htmlFor="product_quantity">Cantidad Disponible</label>
              <input
                type="number"
                name="product_quantity"
                id="product_quantity"
                placeholder={newEntryData.product_quantity}
                onChange={getNewEntryData}
              />
            </div>
            <div className="data_grouping_3c">
              <label htmlFor="product_alrt_min_stock">
                Notificar Cantidad mínima
              </label>
              <input
                className="checkbox"
                type="checkbox"
                name="product_alrt_min_stock"
                id="product_alrt_min_stock"
                onClick={() => {
                  handleBooleanToggle("product_alrt_min_stock");
                }}
              />
              <div className="data_grouping_2">
                <label htmlFor="product_min_stock">Hasta</label>
                <input
                  disabled={newEntryData?.product_alrt_min_stock === true}
                  type="number"
                  name="product_min_stock"
                  id="product_min_stock"
                  placeholder={newEntryData?.product_min_stock || ""}
                  onChange={getNewEntryData}
                />
                <label htmlFor="product_name"> unidades.</label>
              </div>
            </div>
            <div className="data_grouping_3c">
              <label htmlFor="product_allow_neg_qty">
                ¿Permite cantidad negativa?
              </label>
              <input
                className="checkbox"
                type="checkbox"
                name="product_allow_neg_qty"
                id="product_allow_neg_qty"
                onClick={() => {
                  handleBooleanToggle("product_allow_neg_qty");
                }}
              />
              <div className="data_grouping_2">
                <label htmlFor="product_min_stock">Hasta</label>
                <input
                  disabled={newEntryData?.product_allow_neg_qty === true}
                  type="number"
                  name="product_min_stock"
                  id="product_min_stock"
                  placeholder={newEntryData?.product_max_neg_qty || ""}
                  onChange={getNewEntryData}
                />
                <label htmlFor="product_name"> unidades.</label>
              </div>
            </div>
            <div className="data_grouping">
              <label htmlFor="product_cost_price">Precio Costo</label>
              <input
                type="number"
                name="product_cost_price"
                id="product_cost_price"
                placeholder={newEntryData.product_cost_price}
                onChange={getNewEntryData}
              />
            </div>
            <div className="data_grouping">
              <label htmlFor="product_sell_price">Precio de Venta</label>
              <input
                type="number"
                name="product_sell_price"
                id="product_sell_price"
                placeholder={newEntryData.product_sell_price}
                onChange={getNewEntryData}
              />
            </div>
            <div className="data_grouping">
              <label htmlFor="product_status">Estado</label>
              <select
                name="product_status"
                id="product_status"
                value={newEntryData.product_status}
                onChange={getNewEntryData}
              >
                <option value="enabled">Habilitado</option>
                <option value="pending">Pendiente</option>
                <option value="soldout">Agotado</option>
              </select>
            </div>
          </div>
          {/* <div className="comp_data_section">
            <p>Modifica Inventarios?</p>
            <table>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Producto 1</td>
                  <td>Producto 2</td>
                </tr>
              </tbody>
            </table>
          </div> */}
        </section>
        <section className="modal-footer-section">
          {NewRecord === true ? (
            <p className="btn-modal" onClick={() => handleCreateRecord()}>
              Crear ítem
            </p>
          ) : (
            <p
              className="btn-modal"
              onClick={() => handleSaveChanges(newEntryData.product_id)}
            >
              Guardar
            </p>
          )}
          <p className="btn-modal" onClick={() => handleCreateRecord()}>
            Duplicar
          </p>
          <p
            className="btn-modal"
            onClick={()=> handleDeleteRecord(newEntryData.product_id)}
            // onClick={() => handleDeleteRecord(newEntryData.product_id)}
          >
            Eliminar
          </p>
          <p className="btn-modal" onClick={() => setShowModal(false)}>
            Salir
          </p>
        </section>
      </div>
    </div>
  );
};

export default Modal;
