"use client";

import React, { useState } from "react";
import { useEffect, useContext} from "react";
import { CalendarMonthlyView } from "./CalendarMonthlyView";
import { CalendarWeeklyView } from "./CalendarWeeklyView";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { ThemeContext } from "@/Context/ThemeContext/ThemeContext";
import { renderCalendar } from "./CalendarHelper";

import "./styles.css";
// Este componente va a renderizar todo el calendario

const CalendarComponent = () => {
  const { userThemePreference } = useContext(ThemeContext);

  // const [calendarView, setCalendarView] = useState("month");

  const [currDate, setCurrDate] = useState(new Date());
  const [currFormattedDate, setCurrFormattedDate] = useState(
    currDate.toISOString().split("T")[0]
  );
  const [currYear, setCurrYear] = useState(currDate.getFullYear());
  const [currMonth, setCurrMonth] = useState(currDate.getMonth());
  const [DaysArray, setDaysArray] = useState([]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const [calendarType, setCalendarType] = useState("month");

  useEffect(() => {
    renderCalendar();
  }, [currMonth]);

  useEffect(() => {
    console.log(calendarType);
  }, [calendarType]);

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const handleGoCurrentDate = () => {
    setCurrMonth(currDate.getMonth());
    setCurrYear(currDate.getFullYear());
  };

  const handleMonthChangePrev = () => {
    if (currMonth - 1 < 0) {
      setCurrYear(currYear - 1);
      setCurrMonth(11); // December is 0
    } else {
      setCurrMonth(currMonth - 1);
    }
  };

  const handleMonthChangeNext = () => {
    if (currMonth + 1 > 11) {
      setCurrYear(currYear + 1);
      setCurrMonth(0); // January is 0
    } else {
      setCurrMonth(currMonth + 1);
    }
  };

  // crear una funcion que busque los horarios seleccionados para la fecha dada y retorne si está tomada o libre
  // crear una funcion que busque los horarios seleccionados para la fecha dada y retorne si está tomada o libre

  const TimeFrame = [
    { Time: "10:00", Status: "Available" },
    { Time: "11:00", Status: "Busy", User: "Jonathan Hernandez" },
    { Time: "12:00", Status: "Busy", User: "Daniela Navarro" },
    { Time: "13:00", Status: "Busy", User: "Matias Hernandez" },
    { Time: "14:00", Status: "Available" },
    { Time: "15:00", Status: "Available" },
    { Time: "16:00", Status: "Available" },
    { Time: "17:00", Status: "Busy", User: "Jonathan" },
    { Time: "18:00", Status: "Busy", user: "Jonathan" },
    { Time: "18:30", Status: "Busy", user: "Jonathan" },
  ];

  const viewOptions = ["Week View", "Day View"];

  // tengo que considerar el usuario y la empresa para ver su calendario
  // tengo que considerar el usuario y la empresa para ver su calendario
  const WeekDays = [
    {
      weekNumber: 1,
      day: 1,
      name: "Monday",
      thisMonth: "yes",
      timeSlot: TimeFrame,
    },
    {
      weekNumber: 1,
      day: 2,
      name: "Tuesday",
      thisMonth: "yes",
      timeSlot: TimeFrame,
    },
    {
      weekNumber: 1,
      day: 3,
      name: "Wednesday",
      thisMonth: "yes",
      timeSlot: TimeFrame,
    },
    {
      weekNumber: 1,
      day: 4,
      name: "Thursday",
      thisMonth: "yes",
      timeSlot: TimeFrame,
    },
    {
      weekNumber: 1,
      day: 5,
      name: "Friday",
      thisMonth: "yes",
      timeSlot: TimeFrame,
    },
    {
      weekNumber: 1,
      day: 6,
      name: "Saturday",
      thisMonth: "yes",
      timeSlot: TimeFrame,
    },
    {
      weekNumber: 1,
      day: 7,
      name: "Sunday",
      thisMonth: "yes",
      timeSlot: TimeFrame,
    },
  ];

  return (
    <section
    className={
      userThemePreference === "Dark"
        ? "Calendar-container-component Dark"
        : "Calendar-container-component"
    }>
     {/* <section className="Calendar-container-component"> */}
      <section className="Calendar-header-and-selectors">
        <section className="calendar-render-header">
          <section className="calendar-render-header-selector">
            <div
              className={`selector WeekView ${
                calendarType === "week" ? "active" : ""
              }`}
              onClick={() => {
                setCalendarType("week");
              }}
            >
              Semana
            </div>
            <div
              className={`selector MonthView ${
                calendarType === "month" ? "active" : ""
              }`}
              onClick={() => {
                setCalendarType("month");
              }}
            >
              Mes
            </div>
            <div
              className={`selector YearView ${
                calendarType === "year" ? "active" : ""
              }`}
              onClick={() => {
                setCalendarType("year");
              }}
            >
              Año
            </div>
          </section>
          <section className="calendar-render-header-navigator">
            <HiArrowLeft
              className="arrow"
              onClick={() => {
                handleMonthChangePrev();
              }}
            />
            <p>{`${months[currMonth]} ${currYear}`}</p>
            <HiArrowRight
              className="arrow"
              onClick={() => {
                handleMonthChangeNext();
              }}
            />
          </section>
        </section>
      </section>
      {calendarType === "month" && (
        <section className="Calendar-body-container-monthview">
          <CalendarMonthlyView
            DaysArray={renderCalendar(currYear, currMonth)}
            calendarType={calendarType}
            calendarView=""
          />
        </section>
      )}
      {calendarType === "week" && (
        <section className="Calendar-body-container-weekview">
          <div className="week-calendar-selector">
            <CalendarMonthlyView
              DaysArray={renderCalendar(currYear, currMonth)}
              calendarType="small"
              calendarView=""
            />
            {/* <select value={selectedView} onChange={handleViewChange}> */}
            <select>
              {viewOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <CalendarMonthlyView
            DaysArray={WeekDays}
            calendarView="WeekView"
            // DaysArray={renderCalendar(currYear, currMonth)}
          />
        </section>
      )}
      {calendarType === "year" && (
        <section className="Calendar-body-container-yearview">
          <div className="year-calendar-selector">
            <CalendarMonthlyView
              DaysArray={renderCalendar(0, currMonth)}
              calendarType="small"
            />
            <CalendarMonthlyView
              DaysArray={renderCalendar(1, currMonth)}
              calendarType="small"
            />
            <CalendarMonthlyView
              DaysArray={renderCalendar(2, currMonth)}
              calendarType="small"
            />
            <CalendarMonthlyView
              DaysArray={renderCalendar(3, currMonth)}
              calendarType="small"
            />
            <CalendarMonthlyView
              DaysArray={renderCalendar(4, currMonth)}
              calendarType="small"
            />
            <CalendarMonthlyView
              DaysArray={renderCalendar(5, currMonth)}
              calendarType="small"
            />
            <CalendarMonthlyView
              DaysArray={renderCalendar(6, currMonth)}
              calendarType="small"
            />
            <CalendarMonthlyView
              DaysArray={renderCalendar(7, currMonth)}
              calendarType="small"
            />
            <CalendarMonthlyView
              DaysArray={renderCalendar(8, currMonth)}
              calendarType="small"
            />
            <CalendarMonthlyView
              DaysArray={renderCalendar(9, currMonth)}
              calendarType="small"
            />
            <CalendarMonthlyView
              DaysArray={renderCalendar(10, currMonth)}
              calendarType="small"
            />
            <CalendarMonthlyView
              DaysArray={renderCalendar(11, currMonth)}
              calendarType="small"
            />
          </div>
        </section>
      )}
    </section>
  );
};

export default CalendarComponent;
