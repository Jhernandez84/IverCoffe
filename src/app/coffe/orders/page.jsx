import React from "react";
import "./styles.css";

const orderManagerPage = () => {
  return (
    <section className="header">
      <section>
        {/* se mantiene el menú de navegación para buscar en base al estado de pedido */}
        <div>
          <p>Pedidos nuevos</p>
          <p>En preparación</p>
          <p>Terminados</p>
          <p>Buscar Pedido</p>
        </div>
      </section>

      <section>
        <h1>Nuevas Ordenes</h1>
        {/* vista principal por tarjetas */}
        <p>valores</p>
        <p>Order ID</p>
        <p>Nombre del pedido</p>
        <p>cantidad de productos</p>
        <p>indicador de estado</p>
        {/* Al hacer click se ve el detalle en un cuadro Modal */}
      </section>
    </section>
  );
};

export default orderManagerPage;