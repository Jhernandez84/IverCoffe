import "./styles.css";

const Modal = ({ closeModal, setShowDetailModal, item }) => {
  console.log(item)
  return (
    // El modal tendrá 3 filas para guardar datos 10,80,10
    <div className="modal-overlay">
      <div className="modal">
        <span className="close" onClick={() => setShowDetailModal(false)}>
          &times;
        </span>
        <section className="modal-header-section">
          <img src={item.Product_Img} alt="" />
          <div>{item.Product_Desc}</div>
        </section>
        <section className="modal-body-section"></section>

        <section className="modal-footer-section">
          {/* <button className="btn-modal"> */}
          <button
            className="btn-modal"
            onClick={() => setShowDetailModal(false)}
          >
            Guardar
          </button>
        </section>
      </div>
    </div>
  );
};

export default Modal;