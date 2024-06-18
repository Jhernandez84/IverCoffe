import React from "react";
import './styles.css'

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

const CalendarSummary = () => {

  const iconSize = "25px"

  const Data = [
    {
      icon: <HiUserGroup style={{ fontSize: iconSize }}  />,
      type: "Redes Matrimonios",
      time: "22:00",
      location: "Talcahuano",
    },
    {
      icon: <HiAcademicCap style={{ fontSize: iconSize }}  />,
      type: "Prediacion",
      time: "19:00",
      location: "San Clemente",
    },
    { icon: <HiChartPie style={{ fontSize: iconSize }}  />, type: "Otros", time: "20:00", location: "Templo Central" },
    { icon: <HiChartPie style={{ fontSize: iconSize }}  />, type: "Otros", time: "20:00", location: "Templo Central" },
    { icon: <HiChartPie style={{ fontSize: iconSize }}  />, type: "Otros", time: "20:00", location: "Templo Central" },
    { icon: <HiChartPie style={{ fontSize: iconSize }}  />, type: "Otros", time: "20:00", location: "Templo Central" },
    { icon: <HiChartPie style={{ fontSize: iconSize }}  />, type: "Otros", time: "20:00", location: "Templo Central" },
    { icon: <HiChartPie style={{ fontSize: iconSize }}  />, type: "Otros", time: "20:00", location: "Templo Central" },
  ];

  return (
    <section className="cdr-summary-container">
      {Data.slice(0, 3).map((item, index) => {
        return (
          <section
            key={index}
            className="cdr_smry_card_event"
            onClick={() => alert("event clicked")}
          >
            {/* 3 columnas - Icono, Descripción, Horario */}
            <div className="cdr_smry_card_event_left">{item.icon}</div>
            <div className="cdr_smry_card_event_center">
              <div className="cdr_smry_card_event_center_type">{item.type}</div>
              <div className="cdr_smry_card_event_center_location">
                {item.location}
              </div>
            </div>
            <div className="cdr_smry_card_event_right">{item.time}</div>
          </section>
        );
      })}
      {Data.length > 3 ? (
        <section className="cdr_smry_more_events">
          <div>Cargar próximos {Data.length - 3} eventos</div>
        </section>
      ) : (
        []
      )}
    </section>
  );
};

export default CalendarSummary;
