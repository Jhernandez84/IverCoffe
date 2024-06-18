import React, { useEffect } from "react";
import { useState } from "react";
import CalendarModal from "./CalendarModal";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

import "./styles.css";

export const CalendarWeeklyView = () => {
  // getting new date, current year and month
  const [currDate, setCurrDate] = useState(new Date());
  const [currFormattedDate, setCurrFormattedDate] = useState(currDate.toISOString().split("T")[0]);
  const [currYear, setCurrYear] = useState(currDate.getFullYear());
  const [currMonth, setCurrMonth] = useState(currDate.getMonth());
  const [DaysArray, setDaysArray] = useState([]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const CalendarType = "week"; //'fullScreen'

  // storing full name of all months in array
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

  useEffect(() => {
    renderCalendar();
  }, [currMonth]);

  const handleCreateEvent = (date) =>{
    setSelectedDate(date);
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false);
  };

  const renderCalendar = () => {
    const firstDayOfMonth = new Date(currYear, currMonth, 1).getDay(); // getting first day of month
    const lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(); // getting last date of month
    const lastDayOfMonth = new Date(
      currYear,
      currMonth,
      lastDateOfMonth
    ).getDay(); // getting last day of month
    const lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    const days = [];

    for (let i = firstDayOfMonth; i > 0; i--) {
      // creating array of previous month last days
      const date = new Date(
        currYear,
        currMonth - 1,
        lastDateOfLastMonth - i + 1
      );
      const formattedDate = date.toISOString().split("T")[0]; // Format date as yyyy-mm-dd
      days.push({
        day: lastDateOfLastMonth - i + 1,
        thisMonth: "no",
        currentDate: "no",
        fullDate: formattedDate,
      });
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
      // creating array of all days of current month
      const date = new Date(currYear, currMonth, i);
      const formattedDate = date.toISOString().split("T")[0]; // Format date as yyyy-mm-dd
      const isActive =
        i === currDate.getDate() &&
        currMonth === new Date().getMonth() &&
        currYear === new Date().getFullYear();

      days.push({
        day: i,
        thisMonth: "yes",
        currentDate: isActive ? "yes" : "no",
        fullDate: formattedDate,
      });
    }

    for (let i = lastDayOfMonth; i < 6; i++) {
      // creating array of next month first days
      const date = new Date(currYear, currMonth + 1, i - lastDayOfMonth + 1);
      const formattedDate = date.toISOString().split("T")[0]; // Format date as yyyy-mm-dd
      days.push({
        day: i - lastDayOfMonth + 1,
        thisMonth: "no",
        currentDate: "no",
        fullDate: formattedDate,
      });
    }
    setDaysArray(days);
    console.log(DaysArray);
  };

  return (
    // <section className="calendar-container">
    <section
      className={`${
        CalendarType === "small"
          ? "calendar-container-small"
          : "calendar-container-fullScreen"
      }`}
    >
      {/* <section className="calendar-header">Header</section> */}
      {isModalOpen && (
        <CalendarModal closeModal={closeModal} item={selectedDate}/>
      )}
      <section className="calendar-render">
        <section className="calendar-render-header">
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
        <section className="calendar-render-body">
          {/* <div className="calendar-render-body-daysHeaders"> */}
          <table>
            <thead className="calendar-render-body-headers">
              <tr>Lun</tr>
              <tr>Mar</tr>
              <tr>Mier</tr>
              <tr>Juev</tr>
              <tr>Vier</tr>
              <tr>Sab</tr>
              <tr>Dom</tr>
            </thead>
            <tbody className="calendar-render-body-days">
              {DaysArray.map((day, index) => (
                <td
                  key={day.fullDate}
                  className={`${
                    day.thisMonth === "yes" ? "current" : "non-current"
                  } ${
                    day.thisMonth === "yes" && day.currentDate === "yes"
                      ? "active"
                      : ""
                  }`}
                  onClick={() => {handleCreateEvent(day.formattedDate)}}
                >
                  {day.day}
                </td>
              ))}
            </tbody>
          </table>
          {/* </div> */}
        </section>
      </section>
      <section className="calendar-footer">
        <p
          onClick={() => {
            handleGoCurrentDate();
          }}
        >
          Hoy: {`${currFormattedDate}`}
        </p>
      </section>
    </section>
  );
};
