"use client";

import React from "react";
import { useState, useEffect } from "react";
import { ProductContext } from "./ProductContext";

export const ProductProvider = ({ children }) => {
  const [cartContent, setCartContent] = useState([]);
  return (
    <ProductContext.Provider value={{ cartContent, setCartContent }}>
      {children}
    </ProductContext.Provider>
  );
};
