"use client";

import React from "react";
import { useState } from "react";

const CalendarModalAppointments = ({ closeModal, item, time }) => {
  // const {
  //   selectedDate,
  //   // Rut,
  //   // Nombres,
  //   // ApellidoPaterno,
  //   // ApellidoMaterno,
  //   // NumeroContacto,
  //   // FechaNacimiento,
  //   // imageUrl,
  //   // EstadoCivil,
  //   // EstadoIglesia,
  //   // EstadoActualizacion,
  // } = item;

  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const [selectedOptionDirectorio, setSelectedOptionDirectorio] =
    useState("SI");
  const [selectedOptionLugarOrigen, setSelectedOptionLugarOrigen] =
    useState("");

  const handleSelectChangeEstadoCivil = (event) => {
    setSelectedOptionEstadoCivil(event.target.value);
  };
  const handleSelectChangeDirectorio = (event) => {
    setSelectedOptionDirectorio(event.target.value);
  };
  const handleSelectChangeLiderazgo = (event) => {
    setSelectedOptionLiderazgo(event.target.value);
  };
  const handleSelectChangeGRupoQueLidera = (event) => {
    setSelectedOptionGrupoQueLidera(event.target.value);
  };
  const handleSelectChangeRedes = (event) => {
    setSelectedOptionRedes(event.target.value);
  };
  const handleSelectChangeGRupoEtario = (event) => {
    setSelectedOptionGrupoEtario(event.target.value);
  };
  const handleSelectChangeLugarOrigen = (event) => {
    setSelectedOptionLugarOrigen(event.target.value);
  };

  const options = ["Soltero", "Casado", "Separado", "Viudo"];
  const options2 = [
    "Pastor",
    "Coord. General",
    "Anciano",
    "Diacono",
    "Líder",
    "Otro",
  ];

  const options3 = ["Si", "No"];
  const options4 = [
    "No Aplica",
    "Jóvenes",
    "Señoritas",
    "Gral Jóvenes",
    "Mujeres",
    "Varones",
    "Niños",
  ];
  const options5 = [
    "No",
    "Director",
    "Presidente",
    "Vice-Presidente",
    "Tesorero",
    "SubTesorero",
    "Secretario",
    "SubSecretario",
  ];
  const options6 = [
    "Templo Central",
    "Iver Talcahuano",
    "Iver San Clemente",
    "Iver Nancahua",
  ];
  const options7 = [
    "No Aplica",
    "Jóvenes",
    "Señoritas",
    "Mujeres",
    "Varones",
    "Niños",
    "Preadolescentes",
    "Adolescentes",
  ];

  const sampledata = [
    {
      name: "Leslie Alexander",
      email: "leslie.alexander@example.com",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "✅",
      lastSeenDateTime: "2023-01-23T13:23Z",
    },
    {
      name: "Michael Foster",
      email: "michael.foster@example.com",
      role: "Co-Founder / CTO",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "✅",
      lastSeenDateTime: "2023-01-23T13:23Z",
    },
    {
      name: "Dries Vincent",
      email: "dries.vincent@example.com",
      role: "Business Relations",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "✅",
    },
  ];

  const headers = [
    "Foto",
    "Rut",
    "Nombre",
    "Apellido Paterno",
    "Apellido Materno",
    "Eliminar",
  ];

  const AccordionComponent0 = () => (
    <section className="modal-personal-data-section">
      <div className="modal-personal-data-section-container">
        <div className="modal-personal-data-section-right-col">
          <div>
            <div>
              <label htmlFor="" className="input-label">
                Nombres
              </label>
              <input
                type="text"
                id="name"
                className="input-name"
                // placeholder={Nombres}
              />
            </div>
            <div>
              <label htmlFor="" className="input-label">
                Apellido Paterno
              </label>
              <input
                type="text"
                id="name"
                className="input-name"
                // placeholder={ApellidoPaterno}
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="name" className="input-label">
                apellido Materno
              </label>
              <input
                type="text"
                id="name"
                className="input-name"
                // placeholder={ApellidoMaterno}
                // value={apellido_materno}
              />
            </div>
            <div>
              <label htmlFor="" className="input-label">
                Fecha Nacimiento
              </label>
              <input
                type="date"
                id="name"
                className="input-name"
                // placeholder={FechaNacimiento}
              />
            </div>
          </div>
        </div>
        <div className="modal-personal-data-section-left-col">
          <div className="input-personal-data-img">
            {/* <img src={imageUrl} alt={Nombres} /> */}
          </div>
        </div>
      </div>
    </section>
  );

  const AccordionComponent1 = () => (
    <section className="modal-personal-data-section">
      <div>
        <label htmlFor="options" className="input-label">
          Tipo actividad:
        </label>
        <select
          id="options"
          value={selectedOptionDirectorio}
          onChange={handleSelectChangeDirectorio}
          className="input-name"
        >
          <option value="Seleccione" selected disabled>
            Seleccione
          </option>
          {options5.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="options" className="input-label">
          Responsable:
        </label>
        <select
          id="options"
          value={selectedOptionDirectorio}
          onChange={handleSelectChangeDirectorio}
          className="input-name"
        >
          <option value="Seleccione" selected disabled>
            Seleccione
          </option>
          {options5.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <button className="btn-modal" onClick={() => closeModal()}>
        Guardar
      </button>
    </section>
  );

  const AccordionComponent2 = () => (
    <section className="two-rows-data-section">
      <button className="btn-modal" onClick={() => closeModal()}>
        Guardar
      </button>
    </section>
  );

  const accordionItems = [
    { title: "Información Personal", content: <AccordionComponent0 /> },
    {
      title: "Asignar tarea / responsabilidad",
      content: <AccordionComponent1 />,
    },
    { title: "Agregar agenda", content: <AccordionComponent2 /> },
    // { title: "Grupo familiar", content: <AccordionComponent2 /> },
  ];

  return (
    // El modal tendrá 3 filas para guardar datos 10,80,10
    <div className="modal-overlay">
      <div className="modal">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <section className="modal-header-section">
          Reservando un cupo para el {item} a las {time} horas.
        </section>
        <section className="modal-body-section">
          {accordionItems.map((item, index) => (
            <div
              key={index}
              className={`accordion-item ${
                index === activeIndex ? "active" : ""
              }`}
            >
              <div
                className="accordion-header"
                onClick={() => handleToggle(index)}
              >
                {item.title}
              </div>
              <div className="accordion-content">
                {index === activeIndex && item.content}
              </div>
            </div>
          ))}
        </section>

        <section className="modal-footer-section">
          {/* <button className="btn-modal" onClick={() => closeModal()}>
            Guardar
          </button> */}
        </section>
      </div>
    </div>
  );
};

export default CalendarModalAppointments;
