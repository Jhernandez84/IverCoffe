"use client";

import { useState, useCallback, useEffect } from "react";
import "./modalstyles.css";

const Modal = ({ setShowModal, itemData, NewRecord }) => {
  const handleCreateRecord = () => {};
  const handleSaveChanges = () => {};

  const NewDataFields = {
    product_name: itemData.name,
    product_description: itemData.descripcion,
    product_image: itemData.imagen,
    product_quantity: itemData.cantidad,
    product_cost_price: itemData.PrecioCosto,
    product_sell_price: itemData.PrecioVenta,
    product_status: itemData.Disponible,
    product_alrt_min_stock: "yes",
    product_min_stock: itemData.StockMinimo,
    product_allow_neg_qty: "yes",
    product_max_neg_qty: 0,
  };

  const [newEntryData, setNewEntryData] = useState(NewDataFields);
  console.log(newEntryData)

  const getNewEntryData = useCallback(
    ({ target }) => {
      setNewEntryData({
        ...newEntryData,
        [target.name]: target.value,
      });
    },
    [newEntryData]
  );

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
          {itemData.imagen ? <img src={itemData.imagen} alt="" /> : []}
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
              <label htmlFor="product_description">Descripción del producto</label>
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
            <div className="data_grouping_3c">
              <label htmlFor="product_alrt_min_stock">Notificar Cantidad mínima</label>
              <input className="checkbox" type="checkbox" name="" id="" />
              <input
                type="number"
                name="product_alrt_min_stock"
                id="product_alrt_min_stock"
                placeholder={newEntryData.product_alrt_min_stock}
                onChange={getNewEntryData}

              />
            </div>
            <div className="data_grouping">
              <label htmlFor="product_min_stock">Cantidad mínima</label>
              <input
                type="text"
                name="product_min_stock"
                id="product_min_stock"
                placeholder={newEntryData.product_min_stock}
                onChange={getNewEntryData}

              />
            </div>
            <div className="data_grouping_3c">
              <label htmlFor="product_allow_neg_qty">¿Permite cantidad negativa?</label>
              <input className="checkbox" type="checkbox" name="product_allow_neg_qty" id="" />
              <div className="data_grouping_2">
                <label htmlFor="product_min_stock">Hasta</label>
                <input
                  type="number"
                  name="product_min_stock"
                  id="product_min_stock"
                  placeholder={newEntryData.product_allow_neg_qty}
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
              <label htmlFor="product_name">Estado</label>
              <select name="" id="">
                <option value="1">Habilitado</option>
                <option value="2">Pendiente</option>
                <option value="3">Agotado</option>
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
            <p className="btn-modal" onClick={() => setShowModal(false)}>
              Crear Ítem
            </p>
          ) : (
            <p className="btn-modal" onClick={() => setShowModal(false)}>
              Guardar
            </p>
          )}
          <p className="btn-modal" onClick={() => setShowModal(false)}>
            Duplicar
          </p>
          <p className="btn-modal" onClick={() => setShowModal(false)}>
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
