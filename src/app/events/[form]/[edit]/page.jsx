"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

import { useContext } from "react";
import { ThemeContext } from "@/Context/ThemeContext/ThemeContext";
import { AuthContext } from "@/Context/UserContext/UserContext";
import { ProductContext } from "@/Context/ProductContext/ProductContext";

import "./styles.css";
import "../././styles.css";
import ".././styles.css";

const EditorPage = () => {
  const { userThemePreference } = useContext(ThemeContext);
  const { authUser } = useContext(AuthContext);

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return (
    <>
      <section
        className={
          userThemePreference === "Dark"
            ? "coffemanager-container Dark"
            : "coffemanager-container"
        }
      >
        <section className="coffemanager-header">
          <div
            className="NewOrderEntry"
            onClick={() => {
              alert("creando evento nuevo");
            }}
          >
            Nuevo Evento
          </div>
          <div className="NavMenu">
            <p
              className="POS-nav-content Active"
              onClick={() => setPosViewer("POS")}
            >
              Lista General de Eventos
            </p>
            <p
              className="POS-nav-content" /*</div>onClick={() => setPosViewer("OMP")}*/
            >
              Vista por Eventos
            </p>
            <p className="POS-nav-content" onClick={() => setPosViewer("PRO")}>
              Configuraciones
            </p>
          </div>
          <div>Resumen de caja</div>
        </section>
        <section>
          <section className="coffe-manager-body-container">
            <section className="coffe-manager-body-products-navigation">
              <section className="coffe-manager-body-menu-container"></section>
            </section>
          </section>
          <section>
            <table cellPadding="10">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Event Name</th>
                  <th>Event ID</th>
                  {/* <th>Description</th> */}
                  {/* <th>Date & Time</th> */}
                  <th>Location</th>
                  <th>Organizer</th>
                  <th>Capacity</th>
                  <th>Type</th>
                  <th>Cost</th>
                  <th>Category</th>
                  <th>Duration</th>
                  {/* <th>Tags</th> */}
                  <th>Visibility</th>
                  {/* <th>RSVP Required</th>
                  <th>Language</th>
                  <th>Reminder</th>
                  <th>Cancellation Policy</th>
                  <th>Registration Link</th>
                  <th>Social Media</th> */}
                  <th>Registration Deadline</th>
                </tr>
              </thead>
              <tbody>
                {/* {events.map((event, index) => (
                  <TableViewer event={event} key={event.eventId} />
                ))} */}
              </tbody>
            </table>
          </section>
        </section>
      </section>
    </>
  );
};

export default EditorPage;
