"use client";

import React, { Children, useEffect, useState, useContext } from "react";
import { ThemeContext } from "@/Context/ThemeContext/ThemeContext";
import { GetFireBaseData } from "@/Components/Firebase/DataManager/DataOperations";
import Modal from "./m_manager_modal/modal";

import "../page.module.css";
import "../tableStyles.css";

// import "../globals.css";

const MenuManagerPage = () => {
  const [MenuList, setMenu] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetFireBaseData("CoffeProducts"); // Wait for the promise to resolve
        setMenu(data); // Set the resolved data to state
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error); // Handle any errors
      }
    };
    fetchData(); // Call the async function
  }, []);

  const { userThemePreference } = useContext(ThemeContext);
  const [showModal, setShowModal] = useState(false);
  const [itemData, setItemData] = useState(false);
  const [isNewRecord, setIsNewRecord] = useState(false);

  const handleClickItem = (item) => {
    setItemData(item);
    setShowModal(true);
    setIsNewRecord(false);
  };

  const handleCreateItem = (item) => {
    setItemData(item);
    setShowModal(true);
    setIsNewRecord(true);
  };

  const Menu1List = [
    {
      name: "Plato 1",
      descripcion: "plato de ejemplo",
      imagen:
        "https://images-gmi-pmc.edge-generalmills.com/5722b9dc-deaa-497b-8581-a79af9cf1002.jpg",
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
        {showModal && (
          <Modal
            setShowModal={setShowModal}
            itemData={itemData}
            NewRecord={isNewRecord}
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
              <thead>
                {/* <tr> */}
                <th></th>
                <th>Imagen</th>
                <th>Ítem Nombre</th>
                <th>Descripción</th>
                <th>Disponible</th>
                <th>¿Avisar Stock?</th>
                <th>Stock Mínimo</th>
                <th>Precio Costo</th>
                <th>Precio de Venta</th>
                <th>Estado</th>
                <th colSpan={2}>Opciones</th>
                {/* </tr> */}
              </thead>
              <tbody>
                {MenuList?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td
                        onClick={() => {
                          handleClickItem(item);
                        }}
                      >
                        {item.product_status}
                      </td>
                      <td
                        onClick={() => {
                          handleClickItem(item);
                        }}
                      >
                        <img src={item.product_image} alt="" />
                      </td>
                      <td
                        onClick={() => {
                          handleClickItem(item);
                        }}
                      >
                        {item.product_name}
                      </td>
                      <td
                        onClick={() => {
                          handleClickItem(item);
                        }}
                      >
                        {item.product_description}
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          // value={item.cantidad}
                          placeholder={item.product_quantity}
                          style={{ maxWidth: "80px", minHeight: "24px" }} // Set the correct max-width here
                        />
                      </td>
                      <td>
                        <select name="" id="">
                          <option value="1">Si</option>
                          <option value="2">No</option>
                        </select>
                      </td>
                      <td>{item.StockMinimo}</td>{" "}
                      {/* agregar condición al valor del stock*/}
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          // value={item.cantidad}
                          placeholder={item.product_cost_price}
                          style={{ maxWidth: "80px", minHeight: "24px" }} // Set the correct max-width here
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name=""
                          id=""
                          // value={item.cantidad}
                          placeholder={item.product_sell_price}
                          style={{ maxWidth: "80px", minHeight: "24px" }} // Set the correct max-width here
                        />
                      </td>
                      <td>
                        <select name="" id="">
                          <option value="1">Habilitado</option>
                          <option value="2">Pendiente</option>
                          <option value="3">Agotado</option>
                        </select>
                      </td>
                      <td className="del-btn">Eliminar</td>
                      <td className="del-btn">Duplicar</td>
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