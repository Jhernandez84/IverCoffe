"use client";

import React, { Children, useEffect, useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "@/Context/ThemeContext/ThemeContext";
import { AuthContext } from "@/Context/UserContext/UserContext";
import { ProductContext } from "@/Context/ProductContext/ProductContext";
import CardProduct from "./listedProductsCards/cardProduct";
import CartAddedProduct from "./cartAddedProductComp/cartAddedProduct";
import POSComponent from "./pos/pos";
import OrderManagerPage from "./orders/OrderManager";
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
      orderId: await CreateRecord("Coffe", {
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
        {/* Acá corté el código del POS */}
        {posViewer === "POS" ? (
          <POSComponent
            products={products}
            orderDetails={orderDetails}
            setOrderDetails={setOrderDetails}
            cartContent={cartContent}
          />
        ) : (
          []
        )}
        {posViewer === "OMP" ? (
          <OrderManagerPage
            orderDetails={orderDetails}
            setOrderDetails={setOrderDetails}
          />
        ) : (
          []
        )}
        {posViewer === "PRO" ? "PRODUCTOS" : []}
        {posViewer === "INV" ? "INVENTARIOS" : []}
        {posViewer === "REP" ? "REPORTES" : []}
      </section>
    </>
  );
};

export default CoffeManager;
