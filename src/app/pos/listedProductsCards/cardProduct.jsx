import React, { useEffect } from "react";
import { useState } from "react";
import "./styles.css";

const CardProduct = ({
  product,
  cartContent,
  openModal,
  addToCart,
  updateCart,
  removeFromCart,
  newOrder,
}) => {
  const [initialQty, setInitialQty] = useState(0);
  const [isManualQty, setIsManualQty] = useState(false);

  useEffect(
    () => {
      cartContent.forEach((cartProduct) => {
        if (product.id === cartProduct.id) {
          if (cartProduct.Count > 0) {
            console.log(
              "Producto agregado",
              product.id,
              "Producto en el carro",
              cartProduct.id
              //   cartProduct.Count
            );
            setInitialQty(cartProduct.Count);
            console.log(
              "Product ID:",
              product.id,
              "Product Qty:",
              cartProduct.Count,
              Date()
            );
          } else {
            setInitialQty(0);
          }
        }
      });
    },
    [cartContent],
    [initialQty]
  );

  const enterManualQty = () => {
    setIsManualQty(true);
  };

  const handleManualQtyChange = (e) => {
    const newValue = e.target.value;
    setInitialQty(newValue);
  };

  const addItem = (product) => {
    console.log("agregando producto:", product);
    addToCart(product);
    console.log(initialQty);
  };

  const reduceItem = (product, index) => {
    console.log("reduce item:", product);
    removeFromCart(product);
    if (initialQty === 1) {
      setInitialQty(0);
    } else {
      setInitialQty(initialQty - 1);
    }
    // setInitialQty((prevQty) => Math.max(prevQty - 1, 0)); // Prevents negative quantity
  };

  return (
    <>
      <div className={`products-card ${!newOrder ? "disabled" : ""}`}>
        <img
          src={product.product_image}
          alt={product.product_description}
          onClick={openModal}
        />
        <p className="product-header">
          {product.product_name} ${parseFloat(product.product_sell_price)}
        </p>
        {/* <p className="product-details">{product.Product_Desc}</p> */}
        {/* <p className="product-price">$ {product.Product_Price}</p> */}
        <div className="product-addToCart">
          {initialQty === 0 ? (
            <p
              onClick={() => {
                addItem(product);
              }}
            >
              Agregar
            </p>
          ) : (
            <div className="product-addToCart">
              <div>
                <p
                  onClick={() => {
                    reduceItem(product);
                  }}
                >
                  {initialQty === 1 ? "🗑️" : "-"}
                </p>
              </div>
              <div className="product-addToCart-divider">
                {isManualQty === false ? (
                  <p onClick={enterManualQty}> {initialQty}</p>
                ) : (
                  <input
                    className="product-addToCart-manualQty"
                    value={initialQty}
                    onChange={handleManualQtyChange}
                    onBlur={() => setIsManualQty(false)}
                    type="number"
                    name=""
                    id=""
                    placeholder={initialQty}
                  />
                )}
              </div>
              <div>
                <p
                  onClick={() => {
                    addItem(product);
                  }}
                >
                  +
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CardProduct;
