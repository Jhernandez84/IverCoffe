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
  const [filterValue, setFilterValue] = useState("confites");
  const [filterField, setFilterField] = useState("product_category");

  const Categoria = [
    { Categoty_Name: "Todos", Category: "" },
    { Categoty_Name: "Dulces", Category: "dulce" },
    { Categoty_Name: "Salados", Category: "salado" },
    { Categoty_Name: "Confites", Category: "confite" },
    { Categoty_Name: "Comida", Category: "comida" },
    { Categoty_Name: "Bebidas", Category: "bebidas" },
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
            {Categoria.map((item) => {
              return (
                <p
                  onClick={() => {
                    setFilterValue(item.Category);
                  }}
                >
                  {item.Categoty_Name}
                </p>
              );
            })}
            <p>Buscar 🔍</p>
          </div>
          <div>Resumen de caja</div>
        </section>
        {/* Acá corté el código del POS */}
        {posViewer === "POS" ? (
          <POSComponent
            filterValue={filterValue}
            filterField={filterField}
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
