"use client";

import React, { Children, useEffect, useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "@/Context/ThemeContext/ThemeContext";
import { AuthContext } from "@/Context/UserContext/UserContext";
import { ProductContext } from "@/Context/ProductContext/ProductContext";
import POSComponent from "./pos/pos";
import MenuManagerPage from "../menu_manager/page";
import Modal from "./modal/modal";
import {
  CreateRecord,
  UpdateRecord,
} from "@/Components/Firebase/DataManager/DataOperations";
import Link from "next/link";

import "./styles.css";

const CoffeManager = () => {
  const { userThemePreference } = useContext(ThemeContext);
  const { authUser } = useContext(AuthContext);
  const { cartContent, setCartContent } = useContext(ProductContext);
  const [posViewer, setPosViewer] = useState("POS");
  const [newOrder, setNewOrder] = useState(false);
  const [products, setProducts] = useState([]);
  const [filterValue, setFilterValue] = useState(null);
  const [filterField, setFilterField] = useState([
    "product_sub_category",
    "product_category",
    "product_name",
    "product_description",
  ]);

  useEffect(() => {
    console.log("calling full screen");
    enterFullScreen();
  }, []);

  const filterFields = [
    "product_sub_category",
    "product_category",
    "product_name",
    "product_description",
  ]; // Fields to search

  const Categoria = [
    { Categoty_Name: "Todos", Category: "" },
    { Categoty_Name: "Promociones", Category: "promocion" },
    { Categoty_Name: "Confites", Category: "confites" },
    { Categoty_Name: "Comida", Category: "comida" },
    { Categoty_Name: "Bebidas", Category: "bebestibles" },
    { Categoty_Name: "Pasteles", Category: "pasteleria" },
    { Categoty_Name: "Lacteos", Category: "leche" },
  ];

  const [orderDetails, setOrderDetails] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const handleSearchProduct = (e) => {
    setFilterField("");
    setFilterValue(e.target.value);
    console.log(filterValue);
  };

  const enterFullScreen = () => {
    // const elem = document.documentElement; // Full-screen the entire document
    // if (elem.requestFullscreen) {
    //   elem.requestFullscreen();
    // } else if (elem.mozRequestFullScreen) {
    //   // For Firefox
    //   elem.mozRequestFullScreen();
    // } else if (elem.webkitRequestFullscreen) {
    //   // For Chrome, Safari, Opera
    //   elem.webkitRequestFullscreen();
    // } else if (elem.msRequestFullscreen) {
    //   // For IE/Edge
    //   elem.msRequestFullscreen();
    // }
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
        <section className="coffemanager-header">
          <div
            className="NewOrderEntry"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Ingresar Orden
          </div>

          <div className="NavMenu">
            {Categoria.map((item, index) => {
              return (
                <p
                  key={index}
                  className="NavItem"
                  onClick={() => {
                    setFilterValue(item.Category);
                  }}
                >
                  {item.Categoty_Name}
                </p>
              );
            })}
          </div>
          <div className="SearchMenu">
            <input
              className="search_input"
              type="text"
              placeholder={"Buscar..."}
              onChange={handleSearchProduct}
              onClick={() => {
                setFilterValue(null);
              }}
            />
            <p>🔍</p>
          </div>
        </section>
        {showModal && (
          <Modal
            setShowModal={setShowModal}
            setNewOrder={setNewOrder}
            cartContent={cartContent}
            setOrderDetails={setOrderDetails}
          />
        )}

        <POSComponent
          filterValue={filterValue}
          filterField={filterField}
          filterFields={filterFields}
          products={products}
          orderDetails={orderDetails}
          setOrderDetails={setOrderDetails}
          cartContent={cartContent}
        />
      </section>
    </>
  );
};

export default CoffeManager;
