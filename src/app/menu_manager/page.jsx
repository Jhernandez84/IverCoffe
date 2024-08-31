"use client";

import React, { Children, useEffect, useState, useContext } from "react";
import { ThemeContext } from "@/Context/ThemeContext/ThemeContext";
import Modal from "./m_manager_modal/modal";

import "../page.module.css";
import "../tableStyles.css";
// import "../globals.css";

const MenuManagerPage = ({ Menu }) => {
  const { userThemePreference } = useContext(ThemeContext);
  const [showModal, setShowModal] = useState(false);

  const MenuList = [
    {
      name: "Plato 1",
      descripcion: "plato de ejemplo",
      imagen: "",
      cantidad: "2",
      PrecioCosto: "2510",
      Otros: "SI",
      Disponible: "SI",
      Estado: "🟢",
      StockMinimo: "5",
    },
    {
      name: "Plato 2",
      descripcion: "plato de ejemplo",
      imagen: "",
      cantidad: "2",
      PrecioCosto: "2510",
      Otros: "SI",
      Disponible: "SI",
      Estado: "🟡",
      StockMinimo: "5",
    },
    {
      name: "Plato 3",
      descripcion: "plato de ejemplo",
      imagen: "",
      cantidad: "2",
      PrecioCosto: "2510",
      Otros: "SI",
      Disponible: "SI",
      Estado: "🔴",
      StockMinimo: "5",
    },
    {
      name: "Plato 3",
      descripcion: "plato de ejemplo",
      imagen: "",
      cantidad: "2",
      PrecioCosto: "2510",
      Otros: "SI",
      Disponible: "SI",
      Estado: "🔴",
      StockMinimo: "5",
    },
    {
      name: "Plato 3",
      descripcion: "plato de ejemplo",
      imagen: "",
      cantidad: "2",
      PrecioCosto: "2510",
      Otros: "SI",
      Disponible: "SI",
      Estado: "🟡",
      StockMinimo: "5",
    },
  ];

  return (
    <>
      <section
        className={
          userThemePreference === "Dark"
            ? "coffemanager-container Dark"
            : "coffemanager-container"
        }
      >
        {showModal && <Modal setShowModal={setShowModal} />}
        <section className="coffemanager-header">
          <div
            className="NewOrderEntry"
            onClick={() => {
              CreateNewOrder("Jonathan Hernández");
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
              <thead>
                {/* <tr> */}
                <th>Estado</th>
                <th>Imagen</th>
                <th>Ítem Nombre</th>
                <th>Descripción</th>
                <th>Disponible</th>
                <th>¿Avisar Stock?</th>
                <th>Stock Mínimo</th>
                <th>Precio Costo</th>
                <th>Precio Costo</th>
                <th>Precio Costo</th>
                <th>Precio Costo</th>
                <th colSpan={2}>Seleccione</th>
                {/* </tr> */}
              </thead>
              <tbody>
                {MenuList.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      onClick={() => {
                        setShowModal(true);
                      }}
                    >
                      <td>{item.Estado}</td>
                      <td>{item.imagen}</td>
                      <td>{item.name}</td>
                      <td>{item.descripcion}</td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          // value={item.cantidad}
                          placeholder={item.cantidad}
                        />
                      </td>
                      <td>{item.Otros}</td>
                      <td>{item.StockMinimo}</td>{" "}
                      {/* agregar condición al valor del stock*/}
                      <td>{item.PrecioCosto}</td>
                      <td>{item.PrecioCosto}</td>
                      <td>{item.PrecioCosto}</td>
                      <td>✅</td>
                      <td>❌</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>
        </section>
      </section>
      {/* </section> */}
    </>
  );
};

export default MenuManagerPage;
