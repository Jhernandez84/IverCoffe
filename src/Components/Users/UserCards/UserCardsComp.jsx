import React from "react";
import "./styles.css";
import {
  HiAdjustments,
  HiCalendar,
  HiInbox,
  HiMenu,
  HiOutlineInbox,
  History,
} from "react-icons/hi";

const UserCardsComp = () => {
  const BDdata = [
    {
      rut: "15957386",
      nombre: "Jonathan Antonio",
      foto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      apellido_paterno: "Hernandez",
      apellido_materno: "Miranda",
      telefono: "978778829",
      fec_nac: "1984-09-13",
    },
    {
      rut: "17388935",
      nombre: "Daniela",
      foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      apellido_paterno: "Navarro",
      apellido_materno: "Quevedo",
      telefono: "978772331",
      fec_nac: "1984-09-13",
    },
    {
      rut: "12096190",
      nombre: "test",
      foto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      apellidos: "test",
      telefono: "test",
      edad: "test",
    },
    {
      rut: "7831008",
      nombre: "test",
      foto: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      apellidos: "test",
      telefono: "test",
      edad: "test",
    },
    {
      rut: "7735953",
      nombre: "test",
      foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      apellidos: "test",
      telefono: "test",
      edad: "test",
    },
    {
      rut: "19419909",
      nombre: "test",
      foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      apellidos: "test",
      telefono: "test",
      edad: "test",
    },
    {
      rut: "15957386",
      nombre: "Jonathan Antonio",
      foto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      apellido_paterno: "Hernandez",
      apellido_materno: "Miranda",
      telefono: "978778829",
      fec_nac: "1984-09-13",
    },
    {
      rut: "17388935",
      nombre: "Daniela",
      foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      apellido_paterno: "Navarro",
      apellido_materno: "Quevedo",
      telefono: "978772331",
      fec_nac: "1984-09-13",
    },
  ];
  return (
    <div className="user-cards-container">
      {BDdata.map((item, index) => (
        <div key={index} className="card-container">
          <section className="card-img-section">
            {/* <img src={item.foto} alt="" /> */}
          </section>
          <section className="card-txt-section">
            <p>
              {item.nombre} {item.apellido_paterno} {item.apellido_materno}
            </p>
            <p>{item.rut}</p>
          </section>
          <section className="card-cta-section">
            <div className="card-cta-icon">
              <HiCalendar />
            </div>
            <div className="card-cta-icon">
              <HiAdjustments />
            </div>
            <div className="card-cta-icon">
              <HiOutlineInbox />
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default UserCardsComp;
