import React from "react";
import { useState } from "react";

const CardProduct = ({ product, openModal }) => {
  const [initialQty, setInitialQty] = useState(0);
  const [isManualQty, setIsManualQty] = useState(false);

  const enterManualQty = () => {
    setIsManualQty(true);
  };

  const handleManualQtyChange = (e) => {
    const newValue = e.target.value;
    setInitialQty(newValue);
    console.log(initialQty);
  };

  const addItem = () => {
    setInitialQty(initialQty + 1);
  };

  const reduceItem = () => {
    setInitialQty((prevQty) => Math.max(prevQty - 1, 0)); // Prevents negative quantity
  };

  const removeItem = () => {
    setInitialQty(0);
  };

  return (
    <>
      <div className="products-card">
        <p className="product-header">{product.Product_Name}</p>
        <img
          src={product.Product_Img}
          alt={product.Product_Desc}
          onClick={openModal}
        />
        <p className="product-details">{product.Product_Desc}</p>
        <p className="product-price">$ {product.Product_Price}</p>
        <div className="product-addToCart">
          {initialQty === 0 ? (
            <p
              onClick={() => {
                addItem();
              }}
            >
              Agregar
            </p>
          ) : (
            <div className="product-addToCart">
              <div>
                <p onClick={reduceItem}>{initialQty === 1 ? "🗑️" : "-"}</p>
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
                <p onClick={addItem}>+</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CardProduct;
