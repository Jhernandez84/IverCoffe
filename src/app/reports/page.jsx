"use client";

import React, { Children, useEffect, useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "@/Context/ThemeContext/ThemeContext";
import { AuthContext } from "@/Context/UserContext/UserContext";
import { ProductContext } from "@/Context/ProductContext/ProductContext";
// import Modal from "../modal/modal";
import "../page.module.css"

const ReportingPage = () => {
  return (
    <section className="coffe-manager-body-container">
      <section className="coffe-manager-body-products-navigation">
        <section className="coffe-manager-body-menu-container">
          <h1>Main reportes</h1>
        </section>
      </section>
    </section>
  );
};

export default ReportingPage;
