"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import CalendarModal from "./CalendarModal";
import CalendarModalAppointments from "./CalendarModalAppointments";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { renderCalendar } from "./CalendarHelper";

import "./styles.css";

export const CalendarMonthlyView = ({
  DaysArray,
  calendarType,
  calendarView,
}) => {
  // getting new date, current year and month
  const [currDate, setCurrDate] = useState(new Date());
  const [currFormattedDate, setCurrFormattedDate] = useState(
    currDate.toISOString().split("T")[0]
  );

  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalAppointmentOpen, setModalAppointmentOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleCreateEvent = (date) => {
    console.log("New Event" + date);
    setSelectedDate(date);
    setModalOpen(true);
  };

  const handlAppointmentTime = (date, time) => {
    console.log("appointment" + date.day);
    setSelectedDate(date.day);
    setSelectedTime(time);
    setModalAppointmentOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalAppointmentOpen(false);
  };

  return (
    // <section className="calendar-container">
    <section
      className={`${
        calendarType === "small"
          ? "calendar-container-small"
          : "calendar-container-fullScreen"
      }`}
    >
      {/* <section className="calendar-header">Header</section> */}
      {isModalAppointmentOpen && (
        <CalendarModalAppointments
          closeModal={closeModal}
          item={selectedDate}
          time={selectedTime}
        />
      )}
      {isModalOpen && (
        <CalendarModal closeModal={closeModal} item={selectedDate} />
      )}
      <section className="calendar-render">
        <section className="calendar-render-body">
          {/* <div className="calendar-render-body-daysHeaders"> */}
          <table>
            <thead className="calendar-render-body-headers">
              {calendarView === "WeekView" ? (
                DaysArray.map((day, index) => (
                  <tr key={index}>Lunes ( {day.day} )</tr>
                ))
              ) : (
                <>
                  <tr>Lun</tr>
                  <tr>Mar</tr>
                  <tr>Mier</tr>
                  <tr>Juev</tr>
                  <tr>Vier</tr>
                  <tr>Sab</tr>
                  <tr>Dom</tr>
                </>
              )}
            </thead>
            <tbody className="calendar-render-body-days">
              {calendarView === "WeekView"
                ? DaysArray.map((day, index) => (
                    <td key={day.fullDate} className="WeekViewAvailability">
                      {day.timeSlot.map((time, timeIndex) => (
                        <>
                          <div
                            key={timeIndex}
                            className={`${
                              time.Status === "Available"
                                ? "timeSelector Available"
                                : "timeSelector Busy"
                            }`}
                            onClick={() => {
                              if (
                                time.Status === "Available" &&
                                calendarView === "WeekView"
                              ) {
                                handlAppointmentTime(day);
                              } else {
                                handleCreateEvent(date);
                              }
                            }}
                          >
                            <p className="timeFrame">{time.Time}</p>
                            <p className="userDetails">
                              {time.User ? time.User : "Disponible"}
                            </p>
                          </div>
                        </>
                      ))}
                    </td>
                  ))
                : DaysArray.map((day, index) => (
                    <td
                      key={day.fullDate}
                      className={`${
                        day.thisMonth === "yes" ? "current" : "non-current"
                      } ${
                        day.thisMonth === "yes" && day.currentDate === "yes"
                          ? "active"
                          : ""
                      }`}
                      onClick={() => {
                        handleCreateEvent(day.formattedDate);
                      }}
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
