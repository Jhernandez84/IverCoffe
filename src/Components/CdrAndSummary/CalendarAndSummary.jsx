"use client";
import React from "react";
import CalendarMonthView from "../Calendar/CdrMonthViewer/CalendarMonthView";
import CalendarSummary from "./CalendarSummary";
import "./styles.css";

const CalendarAndSummary = () => {
  return (
    <section className="cdr-smry-commp-container">
      <div className="cdr-header-calendar">
        <p>Calendario</p>
      </div>
      <div className="cdr-top-calendar">
        <CalendarMonthView ShowTodayBtn={'false'} />
      </div>
      <div className="cdr-body-calendar">
        <p>Eventos para la fecha seleccionada</p>
      </div>
      <div className="cdr-bottom-calendar">
        <CalendarSummary />
      </div>
    </section>
  );
};

export default CalendarAndSummary;