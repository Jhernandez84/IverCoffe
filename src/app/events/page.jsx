"use client";

import React, { Children, useEffect, useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "@/Context/ThemeContext/ThemeContext";
import { AuthContext } from "@/Context/UserContext/UserContext";
import { ProductContext } from "@/Context/ProductContext/ProductContext";
import {
  CreateRecord,
  UpdateRecord,
} from "@/Components/Firebase/DataManager/DataOperations";

import Link from "next/link";
import "./styles.css";

const EventPage = () => {
  const { userThemePreference } = useContext(ThemeContext);
  const { authUser } = useContext(AuthContext);

  const events = [
    {
      eventName: "Conferencia de Tecnología 2024",
      eventDescription:
        "Un evento anual que reúne a los mejores expertos en tecnología para discutir las tendencias futuras.",
      eventDate: "2024-09-15T09:00",
      eventLocation: "Centro de Convenciones, Ciudad de México",
      organizerName: "Tech Innovators Group",
      organizerContact: "contacto@techinnovators.com",
      attendeeCapacity: 500,
      eventType: "Conferencia",
      registrationCost: 150,
      eventImage:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.pinterest.com%2Fpin%2F33565959701871294%2F&psig=AOvVaw3abT-YQYiRu2X2ZpZsCd1X&ust=1723602520658000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKiHsvT18IcDFQAAAAAdAAAAABAb",
      registrationLink: "https://eventreg.com/register",
      eventCategory: "Tecnología",
      eventDuration: "8 horas",
      tags: ["tecnología", "innovación", "conferencia"],
      eventVisibility: "Público",
      requireRSVP: true,
      eventLanguage: "Español",
      sendAutomaticReminder: true,
      emailTemplates: {
        confirmation:
          "Gracias por registrarte a la Conferencia de Tecnología 2024.",
        reminder:
          "Este es un recordatorio para la Conferencia de Tecnología 2024 el 15 de septiembre.",
      },
      cancellationPolicy:
        "Las cancelaciones se aceptan hasta 7 días antes del evento.",
      socialMediaLinks: {
        twitter: "https://twitter.com/techconference",
        facebook: "https://facebook.com/techconference",
      },
      registrationDeadline: "2024-09-10",
    },
    {
      eventName: "Taller de Fotografía",
      eventDescription:
        "Aprende las técnicas básicas y avanzadas de la fotografía en este taller intensivo.",
      eventDate: "2024-10-05T14:00",
      eventLocation: "Estudio de Arte, Buenos Aires",
      organizerName: "FotoArte",
      organizerContact: "info@fotoarte.com",
      attendeeCapacity: 25,
      eventType: "Taller",
      registrationCost: 75,
      eventImage: "https://example.com/photo-workshop.jpg",
      registrationLink: "https://eventreg.com/photo-workshop",
      eventCategory: "Arte",
      eventDuration: "4 horas",
      tags: ["fotografía", "arte", "taller"],
      eventVisibility: "Privado",
      requireRSVP: false,
      eventLanguage: "Español",
      sendAutomaticReminder: false,
      emailTemplates: {
        confirmation: "Gracias por registrarte al Taller de Fotografía.",
        reminder: "Recordatorio: Tu taller de fotografía es el 5 de octubre.",
      },
      cancellationPolicy: "No se aceptan cancelaciones.",
      socialMediaLinks: {
        instagram: "https://instagram.com/fotoarte",
      },
      registrationDeadline: "2024-10-01",
    },
  ];

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
                  <th>Description</th>
                  <th>Date & Time</th>
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
                {events.map((event, index) => (
                  <tr key={index}>
                    <td>
                      <img src={event.eventImage} alt="Event" width="150" />
                    </td>
                    <td>{event.eventName}</td>
                    <td>{event.eventDescription}</td>
                    <td>{new Date(event.eventDate).toLocaleString()}</td>
                    <td>{event.eventLocation}</td>
                    <td>{event.organizerName}</td>
                    <td>{event.attendeeCapacity}</td>
                    <td>{event.eventType}</td>
                    <td>${event.registrationCost}</td>

                    <td>{event.eventCategory}</td>
                    <td>{event.eventDuration}</td>
                    {/* <td>{event.tags.join(", ")}</td> */}
                    <td>{event.eventVisibility}</td>
                    {/* <td>{event.requireRSVP ? "Yes" : "No"}</td>
                    <td>{event.eventLanguage}</td>
                    <td>{event.sendAutomaticReminder ? "Yes" : "No"}</td>
                    <td>{event.cancellationPolicy}</td>
                    <td>
                      <a href={event.registrationLink}>Register Here</a>
                    </td>
                    <td>
                      {Object.entries(event.socialMediaLinks).map(
                        ([platform, link]) => (
                          <div key={platform}>
                            <a href={link}>{platform}</a>
                          </div>
                        )
                      )}
                    </td> */}
                    <td>
                      {new Date(
                        event.registrationDeadline
                      ).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </section>
      </section>
    </>
  );
};

export default EventPage;