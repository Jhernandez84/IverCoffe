import "./styles.css";

const Modal = ({ setShowModal, item }) => {
  return (
    // El modal tendrá 3 filas para guardar datos 10,80,10
    <div className="modal-overlay">
      <div className="modal">
        <section className="modal-header-section"></section>
        <section className="modal-body-section"></section>

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
