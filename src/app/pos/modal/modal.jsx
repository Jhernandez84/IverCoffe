import { useState, useCallback } from "react";
import { CreateRecord } from "@/Components/Firebase/DataManager/DataOperations";

import "./styles.css";

const Modal = ({
  setShowModal,
  setNewOrder,
  item,
  cartContent,
  setOrderDetails,
}) => {
  const orderDefault = {
    orderCustomerName: null,
    orderDetail: cartContent,
  };

  const CreateNewOrder = async () => {
    setOrderDetails({
      orderId: await CreateRecord("Orders", {
        orderCustomerName: newEntryData.orderCustomerName,
        orderFullDate: new Date(),
        // orderStatus: { Status: "Entered", StatusTimeUpdated: new Date() },
        orderStatus: "received",
        orderPaymentStatus: "Pending",
        orderPaymentType: "null",
        orderLastUpdate: new Date(),
        orderDetails: "",
      }),
      orderCustomerName: newEntryData.orderCustomerName,
      orderDate: extractTime(),
    });
    setShowModal(false);
    setNewOrder(true);
  };

  const [newEntryData, setNewEntryData] = useState(orderDefault);

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
    console.log(newEntryData.orderCustomerName);
  }, []);

  function extractTime() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }

  return (
    // El modal tendrá 3 filas para guardar datos 10,80,10
    <div className="modal-overlay">
      <div className="modal">
        <section className="modal-header-section">
          Ingrese datos de nueva orden
        </section>
        <section className="modal-body-section">
          <div className="data_grouping">
            <label htmlFor="orderCustomerName">Nombre de quién retira</label>
            <input
              type="text"
              name="orderCustomerName"
              id="orderCustomerName"
              placeholder={newEntryData.orderCustomerName}
              onChange={getNewEntryData}
            />
          </div>
        </section>
        <section className="modal-footer-section">
          <button className="btn-modal" onClick={() => CreateNewOrder()}>
            Continuar
          </button>
          <button className="btn-modal" onClick={() => setShowModal(false)}>
            Cancelar
          </button>
        </section>
      </div>
    </div>
  );
};

export default Modal;
