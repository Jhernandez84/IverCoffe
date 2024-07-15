"use client";

import React, { useEffect, useState } from "react";
import { GetFireBaseDataAll } from "@/Components/Firebase/DataManager/DataOperations";
import OrdersCard from "./orderCards/orderCards";
import "./styles.css";
import { UpdateRecord } from "@/Components/Firebase/DataManager/DataOperations";
import { UpdateProductStatus } from "@/Components/Firebase/DataManager/DataOperations";

const OrderManagerPage = ({ orderDetails, setOrderDetails }) => {
  // console.log("detalle de la orden", orderDetails);

  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(true); // Initialize loading state
  const [mainOrderData, setMainOrderData] = useState(null);

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

  const HandleDeliveredStatus = (id, productStatus) => {
    console.log("Modificando Index", id, productStatus);
    console.log("Modificando", orderDetails);
    // need to change the array when value like id change productStatus != las value
    // UpdateRecord("Coffe", mainOrderData?.id, "", "Jonathan");
    UpdateProductStatus("Coffe", mainOrderData?.id, {
      orderDetails: orderDetails,
    });
  };

  return (
    <>
      {/* <h1>Administrador de ventas Coffe</h1> */}
      <section className="coffe-manager-body-container">
        <section className="coffe-manager-body-products-navigation">
          <section className="coffe-manager-body-menu-container">
            <div className="menu-filter orders-filter">
              <div>Todos los pedidos</div>
              <div>Pedidos Nuevos</div>
              <div>Pedidos en Proceso</div>
              <div>Pedidos Completados</div>
            </div>
            <div className="orders-container">
              {loading ? (
                <div>Loading...</div> // You can replace this with a loading spinner or any other loading indicator
              ) : orders.length > 0 ? (
                orders.map((order, index) => (
                  <OrdersCard
                    key={index}
                    orders={order}
                    setOrderDetails={setOrderDetails}
                    setMainOrderData={setMainOrderData}
                  />
                ))
              ) : (
                <div>No orders available</div> // Message when there are no orders
              )}
            </div>
          </section>
        </section>

        <div className="coffe-manager-body-order-details-container">
          <div className="order-details-header">
            {/* <div className="text">
          <p>Detalle de la orden</p>
        </div> */}
            <div className="details">
              <div>
                <div>
                  <p className="orderFinder">Orden:</p>
                </div>
                {/* <p>Hora Ingreso: {mainOrderData?.id}</p> */}
                <p>Hora Ingreso:</p>
                {/* <p>Estado: {mainOrderData?.orderStatus}</p> */}
                <p>Estado: </p>
              </div>
              <div>
                <p>{mainOrderData?.id}</p>
              </div>
              <div>
                <p>'14-07-2024'</p>
              </div>
            </div>
            <div>
              <div className="details-values"></div>
            </div>
          </div>
          <div className="products-invoice-details">
            <div className="orders-list">
              <table>
                <thead>
                  <tr>
                    <td>Img</td>
                    <td>Producto</td>
                    <td>Preparado?</td>
                  </tr>
                </thead>
                <tbody>
                  {orderDetails && orderDetails.length > 0 ? (
                    orderDetails.map((details, index) => (
                      <tr className="tr-container" key={index}>
                        <td>
                          <img
                            className="td-image"
                            src={details.Product_Img}
                            alt={details.Product_Name}
                          />
                        </td>
                        <td>
                          <p>{details.Product_Name}</p>
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id={details.Product_index}
                            checked={details.Product_Status === "Ready"}
                            onClick={() =>
                              HandleDeliveredStatus(
                                details.Product_index,
                                details.Product_Status
                              )
                            }
                          />
                          {/* <label htmlFor={index}> Entregado</label> */}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3">No order details available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="order-details-footer"></div>
        </div>
      </section>
    </>
  );
};

export default OrderManagerPage;
