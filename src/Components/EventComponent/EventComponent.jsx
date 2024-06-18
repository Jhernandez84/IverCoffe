"use client";
import { CalendarMonthlyView } from "../CalendarComponent/CalendarMonthlyView";
import "./StylesEC.css";
import React, { useState } from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

const EventComponent = () => {
  const viewOptions = ["1", "2", "3"];

  const [leftPanelOpen, setLeftPanelOpen] = useState(true);

  const handleLeftPanelOpen = () => {
    setLeftPanelOpen(false)
  };

  return (
    <section className="EventComponent-Container">
      <section className="EventComponent-Header">
        <div>
          <p>Seleccione</p>
        </div>
        <div>
          <p>Seleccione</p>
        </div>
        <div>
          <p>Seleccione</p>
        </div>
      </section>

      <section className="EventComponent-Body">
        <section
          className={`${
            leftPanelOpen == true
              ? "EventComponent-Body-Left-Visible"
              : "EventComponent-Body-Left"
          }`}
        >
          <div>
            <HiChevronDoubleRight onClick={handleLeftPanelOpen}/>
          </div>

          <div>{/* <CalendarMonthlyView DaysArray={null}/> */}</div>
          <div>
            <label htmlFor="">Seleccione </label>
            <select>
              {viewOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </section>
        <section className="EventComponent-Body-Right"></section>
      </section>
    </section>
  );
};

export default EventComponent;
