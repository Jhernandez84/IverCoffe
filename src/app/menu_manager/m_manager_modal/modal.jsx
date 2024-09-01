"use client";

import "./modalstyles.css";

const Modal = ({ setShowModal, itemData }) => {
  console.log(itemData);
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
          Edición de producto - {itemData.name} -
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
                placeholder={itemData.name}
              />
            </div>
            <div className="data_grouping">
              <label htmlFor="product_name">Descripción del producto</label>
              <input
                type="text"
                name="product_name"
                id="product_name"
                placeholder={itemData.descripcion}
              />
            </div>
            <div className="data_grouping">
              <label htmlFor="product_name">Imagen del producto</label>
              <input
                type="text"
                name="product_image"
                id="product_image"
                placeholder={itemData.imagen}
              />
            </div>
            <div className="data_grouping_3c">
              <label htmlFor="product_name">Notificar Cantidad mínima</label>
              <input className="checkbox" type="checkbox" name="" id="" />
              <input
                type="number"
                name="product_name"
                id="product_name"
                placeholder={itemData.cantidad}
              />
            </div>
            <div className="data_grouping">
              <label htmlFor="product_name">Cantidad mínima</label>
              <input
                type="text"
                name="product_name"
                id="product_name"
                placeholder={itemData.StockMinimo}
              />
            </div>
            <div className="data_grouping_3c">
              <label htmlFor="product_name">¿Permite cantidad negativa?</label>
              <input className="checkbox" type="checkbox" name="" id="" />
              <div className="data_grouping_2">
                <label htmlFor="product_name">Hasta</label>
                <input
                  type="number"
                  name="product_name"
                  id="product_name"
                  placeholder="0"
                />
                <label htmlFor="product_name"> unidades.</label>
              </div>
            </div>
            <div className="data_grouping">
              <label htmlFor="product_name">Precio Costo</label>
              <input
                type="number"
                name="product_name"
                id="product_name"
                placeholder={itemData.PrecioCosto}
              />
            </div>
            <div className="data_grouping">
              <label htmlFor="product_name">Precio de Venta</label>
              <input
                type="number"
                name="product_name"
                id="product_name"
                placeholder="5000"
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
          <p className="btn-modal" onClick={() => setShowModal(false)}>
            Guardar
          </p>
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
