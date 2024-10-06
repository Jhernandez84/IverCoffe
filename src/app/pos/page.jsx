"use client";

import React, { Children, useEffect, useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "@/Context/ThemeContext/ThemeContext";
import { AuthContext } from "@/Context/UserContext/UserContext";
import { ProductContext } from "@/Context/ProductContext/ProductContext";
import POSComponent from "./pos/pos";
import OrderManagerPage from "./orders/OrderManager";
// import ReportingPage from "./reports/page";
import StockManagerPage from "./orders/StockManager/page";
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

  const orderDefault = {
    orderId: null,
    orderCustomerName: null,
    orderDate: null,
    orderDetail: cartContent,
  };
  const [orderDetails, setOrderDetails] = useState(orderDefault);

  function extractTime() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }

  const CreateNewOrder = async (CustomerName) => {
    setOrderDetails({
      orderId: await CreateRecord("Orders", {
        orderCustomerName: CustomerName,
        orderFullDate: new Date(),
        orderStatus: { Status: "Entered", StatusTimeUpdated: new Date() },
        orderPaymentStatus: "Pending",
        orderPaymentType: "null",
        orderLastUpdate: new Date(),
        orderDetails: "",
      }),
      orderCustomerName: CustomerName,
      orderDate: extractTime(),
    });
    setNewOrder(true);
    console.log(newOrder);
  };

  const handleSearchProduct = (e) => {
    setFilterField("");
    setFilterValue(e.target.value);
    console.log(filterValue);
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
              CreateNewOrder("Jonathan Hernández");
            }}
          >
            Ingresar Orden
          </div>
          <div className="NavMenu">
            {/* <div> */}
            {Categoria.map((item) => {
              return (
                <p
                  className="NavItem"
                  onClick={() => {
                    setFilterValue(item.Category);
                  }}
                >
                  {item.Categoty_Name}
                </p>
              );
            })}
            {/* </div> */}
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
        {/* Acá corté el código del POS */}
        {posViewer === "POS" ? (
          <POSComponent
            filterValue={filterValue}
            filterField={filterField}
            filterFields={filterFields}
            products={products}
            orderDetails={orderDetails}
            setOrderDetails={setOrderDetails}
            cartContent={cartContent}
          />
        ) : (
          []
        )}
        {/* {posViewer === "OMP" ? (
          <OrderManagerPage
            orderDetails={orderDetails}
            setOrderDetails={setOrderDetails}
          />
        ) : (
          []
        )}
        {posViewer === "PRO" ? <MenuManagerPage /> : []}
        {posViewer === "INV" ? <StockManagerPage /> : []} */}
      </section>
    </>
  );
};

export default CoffeManager;
