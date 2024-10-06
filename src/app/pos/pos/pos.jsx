"use client";

import React, { Children, useEffect, useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "@/Context/ThemeContext/ThemeContext";
import { AuthContext } from "@/Context/UserContext/UserContext";
import { ProductContext } from "@/Context/ProductContext/ProductContext";
import CardProduct from "../listedProductsCards/cardProduct";
import CartAddedProduct from "../cartAddedProductComp/cartAddedProduct";
import {
  AddDataToLocalStorage,
  RemoveDataFromLocalStorage,
  GetDataFromLocalStorage,
} from "../../../Components/Firebase/DataManager/LocalStorage";

import { GetFireBaseData } from "@/Components/Firebase/DataManager/DataOperations";

import Modal from "../modal/modal";

import {
  CreateRecord,
  UpdateRecord,
} from "@/Components/Firebase/DataManager/DataOperations";
import Link from "next/link";

// import "./styles.css";

const POSComponent = ({
  orderDetails,
  setOrderDetails,
  filterValue,
  filterField,
}) => {
  const [getDBdata, setgetDBData] = useState(false);

  const { authUser } = useContext(AuthContext);
  const { cartContent, setCartContent } = useContext(ProductContext);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [newOrder, setNewOrder] = useState(false);
  const [products, setProducts] = useState([]);
  const [ListProducts, setListProducts] = useState([]);

  console.log(filterValue);
  console.log(filterField);

  useEffect(() => {
    console.log("Datos actualizados desde firebase");
    setProducts(ListProducts);
  }, [getDBdata]);

  // descarga la información de la nube y la pasa a BD local.
  //
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetFireBaseData("CoffeProducts"); // Wait for the promise to resolve
        AddDataToLocalStorage("fbProducts", data);
        setProducts(data); // Set the resolved data to state
        console.log("Productos Creados:", data);
      } catch (error) {
        console.error("Error fetching data:", error); // Handle any errors
      }
    };
    fetchData(); // Call the async function
  }, []);

  function calculateTotal() {
    return cartContent?.reduce((total, item) => {
      // console.log("Current item:", item);
      // console.log("Intermediate total:", total);
      // Add the product sell price to the total
      const updatedTotal = total + parseFloat(item.product_sell_price);
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
        .map((product, i) => (product.id === productId.id ? i : -1))
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
    const existingProduct = acc.find((item) => item.product_id === product.id);
    if (existingProduct) {
      existingProduct.product_sell_price =
        parseFloat(existingProduct.product_sell_price) +
        parseFloat(product.product_sell_price);
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
          {products
            .filter((product) => {
              // If no filter value is entered, return all products
              if (!filterValue) return true;
              // Filter based on a given field, e.g., 'product_name'
              if (filterField && product[filterField]) {
                return product[filterField]
                  .toString() // Convert to string in case of numbers
                  .toLowerCase()
                  .includes(filterValue.toLowerCase());
              }
              return false; // If field doesn't exist, exclude the product
            })
            .map((product, index) => {
              return (
                <CardProduct
                  key={index}
                  product={product}
                  openModal={openModal}
                  addToCart={addToCart}
                  newOrder={newOrder}
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
            <p>
              Subtotal ${" "}
              {new Intl.NumberFormat("es-CL", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(calculateTotal() / 1.19 || 0)}
            </p>
            <p>
              IVA ${" "}
              {new Intl.NumberFormat("es-CL", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(calculateTotal() * 0.19 || 0)}
            </p>
            <p>
              Total ${" "}
              {new Intl.NumberFormat("es-CL", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(calculateTotal() || 0)}
            </p>
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
