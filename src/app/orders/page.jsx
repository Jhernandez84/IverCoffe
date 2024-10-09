// pages/index.js or any other Next.js component file
"use client";

import React, { useContext, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { ThemeContext } from "@/Context/ThemeContext/ThemeContext";
import { AuthContext } from "@/Context/UserContext/UserContext";

import { GetMainOrdersData } from "@/Components/Firebase/DataManager/DataOperations";
import { GetFireBaseDataAll } from "@/Components/Firebase/DataManager/DataOperations";

import OrdersCard from "./orderCards/orderCards";
import Modal from "./orderCards/orderDetailModal/modal";

import { UpdateRecord } from "@/Components/Firebase/DataManager/DataOperations";
import { updateProductStatus } from "@/Components/Firebase/DataManager/DataOperations";
import {
  AddDataToLocalStorage,
  GetDataFromLocalStorage,
} from "../../Components/Firebase/DataManager/LocalStorage";

// import "./styles.css";
import "../page.module.css";
import "./styles.css";

// const OrderManagerPage = ({ orderDetails, setOrderDetails }) => {
const OrderManagerPage = () => {
  const { userThemePreference } = useContext(ThemeContext);
  const { authUser } = useContext(AuthContext);

  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(true); // Initialize loading state
  const [mainOrderData, setMainOrderData] = useState(null);
  const [orderMenuStatus, setOrderMenuStatus] = useState(0);

  const [showDetailModal, setShowDetailModal] = useState(false);

  const [filterValue, setFilterValue] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const DBEvento = "Orders"; // Replace with your actual collection name
        const firebaseData = await GetFireBaseDataAll(DBEvento);
        // Compare the number of records in local storage vs Firebase
        const localOrders = GetDataFromLocalStorage("orders");
        if (!localOrders || localOrders.length < firebaseData.length) {
          // Update local storage if Firebase has more data
          AddDataToLocalStorage("orders", firebaseData);
          setOrders(firebaseData); // Update state with Firebase data
          console.log("Fetched and saved new orders from Firebase");
        } else {
          console.log("Using local stored orders as they are up to date");
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false); // Update loading state
      }
    };

    const LocalStoragedOrders = GetDataFromLocalStorage("orders");
    setOrders(LocalStoragedOrders || []); // Set initial state from local storage if it exists
    console.log("Loaded orders from local storage", LocalStoragedOrders);

    fetchOrders(); // Fetch new data if needed
  }, []);

  console.log("detalle de la orden", mainOrderData);

  const HandleDeliveredStatus = (id, productStatus) => {
    console.log(mainOrderData.id);
    updateProductStatus("Coffe", mainOrderData.id, id, productStatus);
  };

  const convertTimestampToDate = (timestamp) => {
    const date = new Date(timestamp);
    // return date.toLocaleString(undefined, options);
  };

  const OrderStatus = [
    { Categoty_Name: "Todos", Category: "" },
    { Categoty_Name: "Nuevos", Category: "received" },
    { Categoty_Name: "En Proceso", Category: "processing" },
    { Categoty_Name: "Entregados", Category: "delivered" },
  ];

  console.log(filterValue);

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
            {OrderStatus.map((item, index) => {
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
          <div>Resumen de caja</div>
        </section>
        <>
          {/* <h1>Administrador de ventas Coffe</h1> */}
          <section className="coffe-manager-body-container-full">
            {showDetailModal && (
              <Modal
                setShowDetailModal={setShowDetailModal}
                orderData={mainOrderData}
              />
            )}
            {/* <section className="coffe-manager-body-products-navigation"> */}
            <section className="orders-container-full">
              {loading ? (
                <div>Loading...</div> // You can replace this with a loading spinner or any other loading indicator
              ) : orders?.length > 0 ? (
                orders
                  .filter((order) => {
                    if (!filterValue) return true; // If no filterValue, return all orders
                    return order.orderStatus === filterValue; // Adjust "someField" to the field you want to filter by
                  })
                  .map((order, index) => (
                    <OrdersCard
                      key={index}
                      orderDetail={order}
                      setMainOrderData={setMainOrderData}
                      setOrderMenuStatus={setOrderMenuStatus}
                      setShowDetailModal={setShowDetailModal}
                    />
                  ))
              ) : (
                <div>Al parecer aún no hay pedidos</div> // Message when there are no orders
              )}
            </section>
          </section>
        </>
      </section>
    </>
  );
};

export default OrderManagerPage;
