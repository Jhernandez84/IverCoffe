"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "@/Context/ThemeContext/ThemeContext";
import { AuthContext } from "@/Context/UserContext/UserContext";
import { ProductContext } from "@/Context/ProductContext/ProductContext";
import { GetFireBaseDataAll } from "@/Components/Firebase/DataManager/DataOperations";
import OrdersCard from "./orderCards/orderCards";
import "../styles.css";
import "./styles.css";

const orderManagerPage = () => {
  const { userThemePreference } = useContext(ThemeContext);
  const { cartContent, setCartContent } = useContext(ProductContext);

  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const DBEvento = "Coffe"; // Replace with the actual collection name
        const data = await GetFireBaseDataAll(DBEvento);
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false); // Update loading state
      }
    };

    fetchOrders();
  }, []);

  return (
    <>
      <section
        className={
          userThemePreference === "Dark"
            ? "coffemanager-container Dark"
            : "coffemanager-container"
        }
      >
        {/* <h1>Administrador de ventas Coffe</h1> */}
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
            <Link href="/coffe" className="POS-nav-content">
              <p>POS Coffe</p>
            </Link>
            <Link href="/coffe/orders" className="POS-nav-content">
              <p>Gestión de órdenes</p>
            </Link>
            <Link href="/coffe/products" className="POS-nav-content">
              <p>Productos</p>
            </Link>
            <Link href="/coffe/inventory" className="POS-nav-content">
              <p>Inventarios</p>
            </Link>
            <Link href="/coffe/reports" className="POS-nav-content">
              <p>Reportes</p>
            </Link>
          </div>
          <div>Resumen de caja</div>
        </section>

        <section className="coffe-manager-body-container">
          <section className="coffe-manager-body-products-navigation">
            <section className="coffe-manager-body-menu-container">
              <div className="menu-filter orders-filter">
                {/* acá va un map para los tipos/categorias de productos */}
                <div>Todos los pedidos</div>
                <div>Pedidos Entrantes</div>
                <div>Pedidos en Proceso</div>
                <div>Pedidos Completados</div>
                {/* acá va un map para los tipos/categorias de productos */}
                <div>
                  <div>Buscar... 🔍</div>
                </div>
              </div>
              <div className="menu-list orders-container">
                {loading ? (
                  <div>Loading...</div> // You can replace this with a loading spinner or any other loading indicator
                ) : orders.length > 0 ? (
                  orders.map((order, index) => (
                    <OrdersCard key={index} orders={order} />
                  ))
                ) : (
                  <div>No orders available</div> // Message when there are no orders
                )}
              </div>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

//     <section className="header">
//       <section>
//         {/* se mantiene el menú de navegación para buscar en base al estado de pedido */}
//         <div>
//           <p>Pedidos nuevos</p>
//           <p>En preparación</p>
//           <p>Terminados</p>
//           <p>Buscar Pedido</p>
//         </div>
//       </section>

//       <section>
//         <h1>Nuevas Ordenes</h1>
//         {/* vista principal por tarjetas */}
//         <p>valores</p>
//         <p>Order ID</p>
//         <p>Nombre del pedido</p>
//         <p>cantidad de productos</p>
//         <p>indicador de estado</p>
//         {/* Al hacer click se ve el detalle en un cuadro Modal */}
//       </section>
//     </section>
//   );
// };

export default orderManagerPage;
