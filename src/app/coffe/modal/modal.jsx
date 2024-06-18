import "./styles.css";

const Modal = ({ closeModal, item }) => {
  return (
    // El modal tendrá 3 filas para guardar datos 10,80,10
    <div className="modal-overlay">
      <div className="modal">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <section className="modal-header-section">
          <img src={item.Product_Img} alt="" />
        </section>
        <section className="modal-body-section"></section>

        <section className="modal-footer-section">
          <button className="btn-modal" onClick={() => closeModal()}>
            Guardar
          </button>
        </section>
      </div>
    </div>
  );
};

export default Modal;
