"use client";

import React from "react";
import { useState } from "react";

const MainSettingsComponent = ({ closeModal, item }) => {
//   const {
//     id,
//     Rut,
//     Nombres,
//     ApellidoPaterno,
//     ApellidoMaterno,
//     NumeroContacto,
//     FechaNacimiento,
//     imageUrl,
//     EstadoCivil,
//     EstadoIglesia,
//     EstadoActualizacion,
//   } = item;

  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptionEstadoCivil, setSelectedOptionEstadoCivil] = useState("");
  const [selectedOptionDirectorio, setSelectedOptionDirectorio] = useState("");
  const [selectedOptionLiderazgo, setSelectedOptionLiderazgo] = useState("");
  const [selectedOptionGrupoQueLider, setSelectedOptionGrupoQueLidera] = useState("");
  const [selectedOptionRedes, setSelectedOptionRedes] = useState("");
  const [selectedOptionGrupoEtario, setSelectedOptionGrupoEtario] = useState("");
  const [selectedOptionLugarOrigen, setSelectedOptionLugarOrigen] = useState("");

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
    // <section className="modal-main-data-container">
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
        <label htmlFor="" className="input-label">
          Teléfono Contacto
        </label>
        <input
          type="text"
          id="name"
          className="input-name"
          placeholder={NumeroContacto}
        />
      </div>
      <div>
        <label htmlFor="" className="input-label">
          Dirección
        </label>
        <input type="text" id="name" className="input-name"/>
      </div>
      <div>
        <label htmlFor="" className="input-label">
          Correo Electrónico
        </label>
        <input type="mail" id="name" className="input-name" />
      </div>
    </section>
  );

  const AccordionComponent2 = () => (
    <section className="two-rows-data-section">
      <section className="two-cols-data-section">
        <div>
          <label htmlFor="options" className="input-label">
            Estado Civil
          </label>
          <select
            id="options"
            value={selectedOptionEstadoCivil}
            onChange={handleSelectChangeEstadoCivil}
            className="input-name"
          >
            <option value="Seleccione" selected disabled>
              Estado Civil
            </option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          <label htmlFor="" className="input-label">
            Fecha Aniversario
          </label>
          <input
            type="date"
            id="name"
            className="input-name"
            value="2016-10-22"
            width={"30px"}
          />

          <label htmlFor="" className="input-label">
            Grupo familiar
          </label>
          <input
            type="text"
            id="name"
            className="input-name"
            // placeholder={name}
          />
        </div>
        <div className="addNewRecord">
          <button
            className="btn-modal"
            onClick={() => alert("Agregar Registro")}
          >
            Agregar nuevo
          </button>
        </div>
      </section>
      <section className="modal-personal-data-section-right">
        <section className="sm-table">
          <section className="table_body">
            <table>
              <thead>
                {headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </thead>
              <tbody>
                {sampledata.map((item, index) => (
                  <tr
                    key={index}
                    className={
                      item.visibility === "visible" ? "visible" : "hidden"
                    }
                  >
                    <td>
                      <img src={item.imageUrl} alt="" />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.role}</td>
                    <td>{item.lastSeen}</td>
                    <td>❌</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </section>
      </section>
    </section>
  );

  const AccordionComponent3 = () => (
    <section className="two-cols-data-section">
      <section className="modal-personal-data-section-left">
        <div>
          <label htmlFor="" className="input-label">
            Fec. de Integración
          </label>
          <input
            type="date"
            id="name"
            className="input-name"
            value="2024-01-01"
          />
        </div>
        <div>
          <label htmlFor="options" className="input-label">
            Participa en Directorio
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
            Nivel de Liderazgo
          </label>
          <select
            id="options"
            value={selectedOptionLiderazgo}
            onChange={handleSelectChangeLiderazgo}
            className="input-name"
          >
            <option value="Seleccione" disabled>
              Seleccione
            </option>
            {options2.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="options" className="input-label">
            Grupo que lidera
          </label>
          <select
            id="options"
            value={selectedOptionGrupoQueLider}
            onChange={handleSelectChangeGRupoQueLidera}
            className="input-name"
          >
            <option value="Seleccione" selected disabled>
              Seleccione
            </option>
            {options4.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="options" className="input-label">
            Participa en Redes
          </label>
          <select
            id="options"
            value={selectedOptionRedes}
            onChange={handleSelectChangeRedes}
            className="input-name"
          >
            <option value="Seleccione" selected disabled>
              Seleccione
            </option>
            {options3.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="options" className="input-label">
            Grupo Etario
          </label>
          <select
            id="options"
            value={selectedOptionGrupoEtario}
            onChange={handleSelectChangeGRupoEtario}
            className="input-name"
          >
            <option value="Seleccione" selected disabled>
              Seleccione
            </option>
            {options7.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="options" className="input-label">
            Lugar de origen
          </label>
          <select
            id="options"
            value={selectedOptionLugarOrigen}
            onChange={handleSelectChangeLugarOrigen}
            className="input-name"
          >
            <option value="Seleccione" selected disabled>
              Seleccione
            </option>
            {options6.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </section>
      <section className="modal-personal-data-section-right">
        <p>Historial </p>
        {options6.map((options, index) => (
          <>
            <p key={index}>{options}</p>
            <p key={index}>{options}</p>
          </>
        ))}
      </section>
    </section>
  );

  const AccordionComponent4 = () => (
    <section className="sm-table">
      <section className="table_body">
        <table>
          <thead>
            {/* {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))} */}
            <th>Nº</th>
            <th>Curso/Programa</th>
            <th>Duración</th>
            <th>Fecha Inicio</th>
            <th>Fecha Término</th>
            <th>Asistencia</th>
            <th>Terminado</th>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Escuela Liderazgo</td>
              <td>10 Clases</td>
              <td>2023-10-01</td>
              <td>2024-10-01</td>
              <td>100%</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Seminario Matrimonios</td>
              <td>10 Clases</td>
              <td>2023-10-01</td>
              <td>2024-10-01</td>
              <td>100%</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Discipulados</td>
              <td>10 Clases</td>
              <td>2023-10-01</td>
              <td>2024-10-01</td>
              <td>100%</td>
              <td>❌</td>
            </tr>
            {/* {sampledata.map((item, index) => (
              <tr
                key={index}
                className={item.visibility === "visible" ? "visible" : "hidden"}
              >
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td>{item.lastSeen}</td>
                <td>❌</td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </section>
    </section>
  );

  const accordionItems = [
    { title: "Información Personal", content: <AccordionComponent0 /> },
    { title: "Información de contacto", content: <AccordionComponent1 /> },
    { title: "Grupo familiar", content: <AccordionComponent2 /> },
    { title: "Participación en IverChile", content: <AccordionComponent3 /> },
    { title: "Capacitación - Preparación", content: <AccordionComponent4 /> },
  ];

  return (
    // El modal tendrá 3 filas para guardar datos 10,80,10
    <div className="modal-overlay">
      <div className="modal">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <section className="modal-header-section">
          {/* Editando perfil de {Rut} - {Nombres} {ApellidoPaterno} {ApellidoMaterno} */}
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
          <button className="btn-modal" onClick={() => closeModal()}>
            Guardar
          </button>
        </section>
      </div>
    </div>
  );
};

export default MainSettingsComponent;