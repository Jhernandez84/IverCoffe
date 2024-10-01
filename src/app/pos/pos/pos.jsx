"use client";

import React, { Children, useEffect, useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "@/Context/ThemeContext/ThemeContext";
import { AuthContext } from "@/Context/UserContext/UserContext";
import { ProductContext } from "@/Context/ProductContext/ProductContext";
import CardProduct from "../listedProductsCards/cardProduct";
import CartAddedProduct from "../cartAddedProductComp/cartAddedProduct";

import { GetFireBaseData } from "@/Components/Firebase/DataManager/DataOperations";

import Modal from "../modal/modal";

import {
  CreateRecord,
  UpdateRecord,
} from "@/Components/Firebase/DataManager/DataOperations";
import Link from "next/link";

// import "./styles.css";

const POSComponent = ({ orderDetails, setOrderDetails }) => {
  const { authUser } = useContext(AuthContext);
  const { cartContent, setCartContent } = useContext(ProductContext);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [newOrder, setNewOrder] = useState(false);
  const [products, setProducts] = useState([]);

  const [ListProducts, setListProducts] = useState([]);

  useEffect(() => {
    console.log("Cambió el item productos");
    setProducts(ListProducts);
  }, [cartContent]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetFireBaseData("CoffeProducts"); // Wait for the promise to resolve
        setProducts(data); // Set the resolved data to state
        console.log("Productos Creados:", data);
      } catch (error) {
        console.error("Error fetching data:", error); // Handle any errors
      }
    };
    fetchData(); // Call the async function
  }, [cartContent]);

  function calculateTotal() {
    return cartContent?.reduce((total, item) => {
      // console.log("Current item:", item);
      // console.log("Intermediate total:", total);
      // Add the product sell price to the total
      const updatedTotal = total + item.product_sell_price;
      // console.log("Updated total after adding:", updatedTotal);
      return updatedTotal;
    }, 0);
  }

  const addToCart = (prod) => {
    setCartContent((prevCartContent) => {
      if (Array.isArray(prevCartContent)) {
        return [
          ...prevCartContent,
          {
            ...prod,
            Product_index: prevCartContent.length,
            Product_Status: "Created",
          },
        ];
      } else {
        return [{ ...prod, Product_index: 0, Product_Status: "Pending" }];
      }
    });
  };

  const removeFromCart = (productId, index = null) => {
    setCartContent((prevCartContent) => {
      // Find all products with the given product ID
      const productIndexes = prevCartContent
        .map((product, i) => (product.id === productId ? i : -1))
        .filter((i) => i !== -1);

      // If index is not provided, remove the product with the highest index
      if (index === null) {
        index = productIndexes.length - 1;
      }
      // Remove the product at the specified index
      if (
        productIndexes.length > 0 &&
        index >= 0 &&
        index < productIndexes.length
      ) {
        const newCartContent = [...prevCartContent];
        newCartContent.splice(productIndexes[index], 1);
        return newCartContent;
      }

      return prevCartContent;
    });
  };

  const updateCart = (prod) => {
    setCartContent((prevCartContent) => [...prevCartContent, prod]);
  };

  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpenNewOrder, setModalOpenNewOrder] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    console.log("Opening modal for item:", item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    // setAddNewRecord(false);
  };

  const ConfirmOrder = () => {
    UpdateRecord(
      "Orders",
      orderDetails.orderId,
      {
        orderDetails: cartContent,
        orderPaymentType: paymentMethod,
        orderPaymentStatus: "Completed",
        orderStatus: { Status: "Preparing", StatusTimeUpdated: new Date() },
      },
      authUser.email
    );
    // Proceso para limpiar el carrito e ingresar un nuevo pedido
    // Proceso para limpiar el carrito e ingresar un nuevo pedido
    setCartContent(null);
    setNewOrder(false);
  };

  // acá comienza la sección que agrupa los pedidos por tipo de producto
  const groupedProducts = (cartContent || []).reduce((acc, product) => {
    const existingProduct = acc.find(
      (item) => item.Product_id === product.Product_id
    );
    if (existingProduct) {
      existingProduct.product_sell_price += product.product_sell_price;
      existingProduct.Count += 1;
    } else {
      acc.push({ ...product, Count: 1 });
    }
    return acc;
  }, []);

  return (
    <section className="coffe-manager-body-container">
      <section className="coffe-manager-body-products-navigation">
        <div className="menu-list">
          {products.map((product, index) => {
            return (
              <CardProduct
                key={index}
                product={product}
                openModal={openModal}
                addToCart={addToCart}
                newOrder={newOrder}
                // updateCart={updateCart}
                cartContent={groupedProducts}
                removeFromCart={removeFromCart}
              />
            );
          })}
        </div>
      </section>
      <div className="coffe-manager-body-order-details-container">
        <div className="order-details-header">
          {/* <div className="text">
          <p>Detalle de la orden</p>
        </div> */}
          <div className="details">
            <div>
              <p className="orderFinder">Orden Id:</p>
              <p>Hora Ingreso:</p>
              <p>Retira:</p>
            </div>
            <div className="details-values">
              <p>{orderDetails.orderId}</p>
              <p>{orderDetails.orderDate}</p>
              <p>{orderDetails.orderCustomerName}</p>
            </div>
          </div>
        </div>
        <div className="products-invoice-details">
          <div className="header">Detalle de esta orden</div>
          {groupedProducts.map((prod, index) => {
            return (
              <CartAddedProduct
                key={index}
                products={prod}
                removeFromCart={removeFromCart}
                setOrderDetails={setOrderDetails}
              />
            );
          })}
        </div>
        <div className="order-details-footer">
          <div className="summary">
            <p>Subtotal $ {calculateTotal() / 1.19} </p>
            <p>IVA $ {calculateTotal() * 0.19}</p>
            <p>Total $ {calculateTotal()}</p>
          </div>
          <div className="payments">
            <p onClick={() => setPaymentMethod("Transferencia")}>
              {paymentMethod === "Transferencia" ? "Transf. ✅" : "Transf."}
            </p>
            <p onClick={() => setPaymentMethod("Efectivo")}>
              {paymentMethod === "Efectivo" ? "Efectivo ✅" : "Efectivo"}
            </p>
            <p onClick={() => setPaymentMethod("Pendiente")}>
              {paymentMethod === "Pendiente" ? "Pendiente ⚠️" : "Pendiente"}
            </p>
          </div>
          <div className="processOder">
            {paymentMethod ? (
              <p className="place-order-btn" onClick={ConfirmOrder}>
                Confirmar orden
              </p>
            ) : (
              []
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default POSComponent;
