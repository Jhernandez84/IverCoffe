"use client";

import React, { Children, useEffect, useState, useContext } from "react";
import { ThemeContext } from "@/Context/ThemeContext/ThemeContext";
import {
  GetFireBaseData,
  UpdateRecord,
  DeleteRecord,
} from "@/Components/Firebase/DataManager/DataOperations";
import Modal from "./m_manager_modal/modal";

import "./styles.css";
import "../page.module.css";
import "../tableStyles.css";

// import "../globals.css";

const MenuManagerPage = () => {
  const [MenuList, setMenu] = useState(null);
  const { userThemePreference } = useContext(ThemeContext);
  const [showModal, setShowModal] = useState(false);
  const [itemData, setItemData] = useState(false);
  const [isNewRecord, setIsNewRecord] = useState(false);
  const [updateRecords, setUpdateRecords] = useState();
  const [value, setSelectedValue] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetFireBaseData("CoffeProducts"); // Wait for the promise to resolve
        setMenu(data); // Set the resolved data to state
      } catch (error) {
        console.error("Error fetching data:", error); // Handle any errors
      }
    };
    fetchData(); // Call the async function
  }, [updateRecords]);

  const handleClickItem = (item) => {
    console.log("seleccionó el item: ", item);
    setItemData(item);
    setShowModal(true);
    setIsNewRecord(false);
  };

  const handleCreateItem = (item) => {
    setItemData(item);
    setShowModal(true);
    setIsNewRecord(true);
  };

  const handleQuickDelete = (item) => {
    DeleteRecord("CoffeProducts", item);
    setUpdateRecords((prevState) => !prevState); // Toggle true/false
  };

  const handleQuickAmend = (item) => {
    UpdateRecord(
      "CoffeProducts",
      item.id,
      { product_status: value },
      "fakeuser"
    );
    console.log(item);
  };

  const handleSelectorChanges = (event) => {
    setSelectedValue(event.target.value);
    console.log(event);
  };

  return (
    <>
      <section
        className={
          userThemePreference === "Dark"
            ? "coffemanager-container Dark"
            : "coffemanager-container"
        }
      >
        {showModal && (
          <Modal
            setShowModal={setShowModal}
            itemData={itemData}
            NewRecord={isNewRecord}
            setUpdateRecords={setUpdateRecords}
          />
        )}
        <section className="coffemanager-header">
          <div
            className="NewOrderEntry"
            onClick={() => {
              handleCreateItem("Jonathan Hernández");
            }}
          >
            Nuevo Menú
          </div>
          <div className="NavMenu">
            <p
              className="POS-nav-content Active"
              onClick={() => setPosViewer("POS")}
            >
              POS Coffe
            </p>
            <p className="POS-nav-content" onClick={() => setPosViewer("OMP")}>
              Gestión de órdenes
            </p>
            <p className="POS-nav-content" onClick={() => setPosViewer("PRO")}>
              Menú-Admin
            </p>
            <p className="POS-nav-content" onClick={() => setPosViewer("INV")}>
              Inventarios
            </p>
            <p className="POS-nav-content" onClick={() => setPosViewer("REP")}>
              Reportes
            </p>
          </div>
          <div>Resumen de caja</div>
        </section>
        <section className="body-container-full-width">
          <section className="table_container">
            <div className="table_header">
              <p>Lista general de menu</p>
            </div>
            <table>
              <thead className="table-col-headers">
                <tr>
                  <th>Imagen</th>
                  <th>Ítem Nombre</th>
                  <th>Descripción</th>
                  <th>Categoría</th>
                  {/* <th>Disponible</th> */}
                  <th>¿Avisar Stock?</th>
                  <th>Stock Mínimo</th>
                  <th>Precio Costo</th>
                  <th>Precio de Venta</th>
                  <th>Estado</th>
                  <th colSpan={2}>Opciones</th>
                </tr>
              </thead>
            </table>
            <div className="scrollable-table">
              <table>
                <tbody>
                  {MenuList?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td onClick={() => handleClickItem(item)}>
                          <img src={item.product_image} alt="" />
                        </td>
                        <td onClick={() => handleClickItem(item)}>
                          {item.product_name}
                        </td>
                        <td onClick={() => handleClickItem(item)}>
                          {item.product_description}
                        </td>
                        <td onClick={() => handleClickItem(item)}>
                          {item.product_category}
                        </td>
                        <td>
                          <input
                            type="number"
                            placeholder={item.product_quantity}
                            style={{ maxWidth: "80px", minHeight: "24px" }}
                            onBlur={() => alert("alert")}
                          />
                        </td>
                        <td>
                          <select>
                            <option value="1">Si</option>
                            <option value="2">No</option>
                          </select>
                        </td>
                        <td>{item.StockMinimo}</td>
                        <td>
                          <input
                            type="number"
                            placeholder={item.product_cost_price}
                            style={{ maxWidth: "80px", minHeight: "24px" }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            placeholder={item.product_sell_price}
                            style={{ maxWidth: "80px", minHeight: "24px" }}
                          />
                        </td>
                        <td>
                          <select
                            value={item.product_status}
                            onChange={() => handleSelectorChanges}
                          >
                            <option value="enabled">Habilitado</option>
                            <option value="pending">Pendiente</option>
                            <option value="soldout">Agotado</option>
                          </select>
                        </td>
                        <td
                          onClick={() => handleQuickDelete(item.id)}
                          className="btn-modal del-btn"
                        >
                          Eliminar
                        </td>
                        <td className="btn-modal del-btn">Duplicar</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default MenuManagerPage;
