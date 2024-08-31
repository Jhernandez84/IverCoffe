"use client";

import "../m_manager_modal/modalstyles.css";
const Modal = ({ setShowModal, item }) => {
  return (
    // El modal tendrá 3 filas para guardar datos 10,80,10
    <div className="modal-overlay">
      <div className="modal">
        <span
          className="close"
          onClick={() => {
            setShowModal(false);
          }}
        >
          &times;
        </span>
        <section className="modal-header-section">
          {/* <img src={item.Product_Img} alt="" /> */}
        </section>
        <section className="modal-body-section">
          <div className="min_data_section">
            <p>Nombre del producto</p>
            <p>Imagen del producto</p>
            <p>Descripción del producto</p>
            <p>Avisar Cantidad mínima</p>
            <p>Cantidad mínima</p>
            <p>¿Permite cantidad negativa?</p>
            <p>Valor Costo</p>
            <p>Precio Venta</p>
            <p>Disponible</p>
            <p>Promoción</p>
          </div>
          <div className="comp_data_section">
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
          </div>
        </section>

        <section className="modal-footer-section">
          <button className="btn-modal" onClick={() => setShowModal(false)}>
            Guardar
          </button>
        </section>
      </div>
    </div>
  );
};

export default Modal;
