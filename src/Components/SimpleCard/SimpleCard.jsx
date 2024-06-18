"use client";

import React from "react";
import "./styles.css";

import {
  HiChartPie,
  HiHome,
  HiUserGroup,
  HiTicket,
  HiCalendar,
  HiAdjustments,
  HiUser,
  HiUsers,
  HiQuestionMarkCircle,
  HiSun,
  HiMoon,
  HiAcademicCap,
} from "react-icons/hi";

const SimpleCard = ({ CarData, Header, MaxRrows }) => {
  const iconSize = "25px";

  const Data = [
    {
      photo:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Jonathan Hernández",
      date: "2024-03-27",
      location: "Talcahuano",
    },
    {
      photo:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Daniela Navarro",
      date: "2024-03-28",
      location: "San Clemente",
    },
    {
      photo:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Pastor Roberto Carlos",
      date: "2024-11-12",
      location: "Templo Central",
    },
    {
      photo:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Pastora Gabriela Peña",
      date: "2024-11-12",
      location: "Templo Central",
    },
    {
      photo:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Jonathan Hernández",
      date: "2024-03-27",
      location: "Talcahuano",
    },
    {
      photo:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Daniela Navarro",
      date: "2024-03-28",
      location: "San Clemente",
    },
    {
      photo:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Pastor Roberto Carlos",
      date: "2024-11-12",
      location: "Templo Central",
    },
    {
      photo:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Pastora Gabriela Peña",
      date: "2024-11-12",
      location: "Templo Central",
    },

  ];

  return (
    <section className="bdc-container">
      <div className="bdc-container-header">{Header}</div>
      {Data.slice(0, MaxRrows).map((item, index) => {
        return (
          <section
            key={index}
            className="bdc-detail"
            onClick={() => alert("birthday clicked")}
          >
            {/* 3 columnas - Icono, Descripción, Horario */}
            <div className="bdc-detail-photo">
              <img src={item.photo} />
            </div>
            <div className="bdc-detail-name-date">
              <div className="bdc-detail-center-name">{item.name}</div>
              <div className="bdc-detail-center-date">{item.date}</div>
            </div>
            <div>
              <input className="bcd-evt-btn" type="button" value="ver" />
            </div>
          </section>
        );
      })}
    </section>
  );
};

export default SimpleCard;
