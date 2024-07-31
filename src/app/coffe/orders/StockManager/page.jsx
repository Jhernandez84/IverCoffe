import React, { Children, useEffect, useState } from "react";

const StockManagerPage = () => {
  return (
    <section className="coffe-manager-body-container">
      <section className="coffe-manager-body-products-navigation">
        <section className="coffe-manager-body-menu-container">
          <div className="menu-filter">
            {/* acá va un map para los tipos/categorias de productos */}
            <div>Inventarios </div>
            <div>Gráfico de algo</div>
            <div>Resumen de caja</div>
            <div>Resumen de caja</div>
            <div>Resumen de caja</div>
            {/* acá va un map para los tipos/categorias de productos */}
            <div>
              <div>Buscar... 🔍</div>
            </div>
          </div>
          <div className="menu-list"></div>
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

export default StockManagerPage;
