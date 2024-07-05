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
}) => {
  
  const [initialQty, setInitialQty] = useState(0);
  const [isManualQty, setIsManualQty] = useState(false);

  // console.log(initialQty)

  useEffect(() => {
    cartContent.forEach((cartProduct) => {
      if (product.Product_id === cartProduct.Product_id) {
        if (cartProduct.Count >= 1) {
          // console.log(
          //   product.Product_id,
          //   cartProduct.Product_id,
          //   cartProduct.Count
          // );
          setInitialQty(cartProduct.Count);
          console.log(
            "Product ID:",
            product.Product_id,
            "Product Qty:",
            cartProduct.Count,
            Date()
          );
        } else {
          setInitialQty(0);
        }
      }
    });
  }, [cartContent, setInitialQty]);

  const enterManualQty = () => {
    setIsManualQty(true);
  };

  const handleManualQtyChange = (e) => {
    const newValue = e.target.value;
    setInitialQty(newValue);
  };

  const addItem = (product) => {
    addToCart(product);
  };

  const reduceItem = (product, index) => {
    if (initialQty === 1) {
      setInitialQty(0);
    } else {
      setInitialQty(initialQty - 1);
    }
    removeFromCart(product);

    // setInitialQty((prevQty) => Math.max(prevQty - 1, 0)); // Prevents negative quantity
  };

  return (
    <>
      <div className="products-card">
        <img
          src={product.Product_Img}
          alt={product.Product_Desc}
          onClick={openModal}
        />
        <p className="product-header">
          {product.Product_Name} ${product.Product_Price}
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
                    reduceItem(product.Product_id);
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
