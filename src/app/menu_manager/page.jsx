"use client";

import React, { Children, useEffect, useState } from "react";

const MenuManagerPage = () => {
  const MenuList = [
    {
      name: "Plato 1",
      descripcion: "plato de ejemplo",
      imagen: "",
      cantidad: "2",
      PrecioCosto: "2510",
      Otros: "SI",
      Disponible: "SI",
      Estado: "🟢",
      StockMinimo: "5",
    },
    {
      name: "Plato 2",
      descripcion: "plato de ejemplo",
      imagen: "",
      cantidad: "2",
      PrecioCosto: "2510",
      Otros: "SI",
      Disponible: "SI",
      Estado: "🟡",
      StockMinimo: "5",
    },
    {
      name: "Plato 3",
      descripcion: "plato de ejemplo",
      imagen: "",
      cantidad: "2",
      PrecioCosto: "2510",
      Otros: "SI",
      Disponible: "SI",
      Estado: "🔴",
      StockMinimo: "5",
    },
    {
      name: "Plato 3",
      descripcion: "plato de ejemplo",
      imagen: "",
      cantidad: "2",
      PrecioCosto: "2510",
      Otros: "SI",
      Disponible: "SI",
      Estado: "🔴",
      StockMinimo: "5",
    },
    {
      name: "Plato 3",
      descripcion: "plato de ejemplo",
      imagen: "",
      cantidad: "2",
      PrecioCosto: "2510",
      Otros: "SI",
      Disponible: "SI",
      Estado: "🟡",
      StockMinimo: "5",
    },
  ];

  return (
    <section className="coffe-manager-body-container">
      <section className="coffe-manager-body-products-navigation">
        <section className="coffe-manager-body-menu-container">
          <div className="menu-filter">
            {/* acá va un map para los tipos/categorias de productos */}
            <div>Esta venta </div>
            <div>Gráfico de algo</div>
            <div>Resumen de caja</div>
            <div>Resumen de caja</div>
            <div>Resumen de caja</div>
            {/* acá va un map para los tipos/categorias de productos */}
            <div>
              <div>Buscar... 🔍</div>
            </div>
          </div>
          <div className="menu-list">
            <div></div>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Estado</th>
                    <th>Imagen</th>
                    <th>Ítem Nombre</th>
                    <th>Descripción</th>
                    <th>Disponible</th>
                    <th>¿Avisar Stock?</th>
                    <th>Stock Mínimo</th>
                    <th>Precio Costo</th>
                    <th colSpan={2}>Seleccione</th>
                  </tr>
                </thead>
                <tbody>
                  {MenuList.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.Estado}</td>
                        <td>{item.imagen}</td>
                        <td>{item.name}</td>
                        <td>{item.descripcion}</td>
                        <td>
                          <input
                            type="number"
                            name=""
                            id=""
                            // value={item.cantidad}
                            placeholder={item.cantidad}
                          />
                        </td>
                        <td>{item.Otros}</td>
                        <td>{item.StockMinimo}</td> {/* agregar condición al valor del stock*/}
                        <td>{item.PrecioCosto}</td>
                        <td>✅</td>
                        <td>❌</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
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
              <p className="orderFinder">Orden Id:</p>
              <p>Hora Ingreso:</p>
              <p>Retira:</p>
            </div>
            <div className="details-values"></div>
          </div>
        </div>
        <div className="products-invoice-details">
          <div className="header">Detalle de esta orden</div>
        </div>
        <div className="order-details-footer"></div>
      </div>
    </section>
  );
};

export default MenuManagerPage;
