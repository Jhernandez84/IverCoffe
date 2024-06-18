import React from "react";

import { useState } from "react";
import CalendarMonthView from "./CalendarMonthView";
import CalendarHeaders from "./CalendarHeaders";
import CalendarWeekSummary from "./CalendarWeekSummary";
import CalendarWeekSummaryChart from "./CalendarWeekSummaryChart";
import TableData from "../Tables/TableData";
import * as HiIcons from "react-icons/hi";

const CalendarWeekView = () => {
  const [openModal, setOpenModal] = useState(false);
  const ShowModal = () => setOpenModal(true);

  const daysOfWeek = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];

  const timeSlots = [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];

  // Dummy data for availability (true) or busy (false)
  const availability = [
    {
      time: "9:00",
      occupancy: {
        monday: "true",
        tuesday: "true",
        wednesday: "true",
        thursday: "true",
        fridays: "false",
      },
    },
    {
      time: "9:30",
      occupancy: {
        monday: "true",
        tuesday: "true",
        wednesday: "true",
        thursday: "true",
        fridays: "false",
      },
    },
    {
      time: "10:00",
      occupancy: {
        monday: "true",
        tuesday: "true",
        wednesday: "true",
        thursday: "true",
        fridays: "false",
      },
    },
    {
      time: "10:30",
      occupancy: {
        monday: "true",
        tuesday: "true",
        wednesday: "true",
        thursday: "true",
      },
    },
    {
      time: "11:00",
      occupancy: {
        monday: "true",
        tuesday: "true",
        wednesday: "true",
        thursday: "true",
      },
    },
    {
      time: "11:30",
      occupancy: {
        monday: "true",
        tuesday: "true",
        wednesday: "true",
        thursday: "true",
      },
    },
    {
      time: "12:00",
      occupancy: {
        monday: "true",
        tuesday: "true",
        wednesday: "true",
        thursday: "true",
        friday: "true",
        saturday: "true",
        sunday: "true",
      },
    },
    {
      time: "12:30",
      occupancy: {
        monday: "true",
        tuesday: "true",
        wednesday: "true",
        thursday: "true",
        friday: "true",
        saturday: "true",
        sunday: "true",
      },
    },
    {
      time: "12:00",
      occupancy: {
        monday: "true",
        tuesday: "true",
        wednesday: "true",
        thursday: "true",
        friday: "true",
        saturday: "true",
        sunday: "true",
      },
    },
    {
      time: "13:00",
      occupancy: {
        monday: "true",
        tuesday: "true",
        wednesday: "true",
        thursday: "true",
        friday: "true",
        saturday: "true",
        sunday: "true",
      },
    },
    {
      time: "15:00",
      occupancy: {
        monday: "true",
        tuesday: "true",
        wednesday: "true",
        thursday: "true",
        friday: "true",
        saturday: "true",
        sunday: "true",
      },
    },
    {
      time: "16:00",
      occupancy: {
        monday: "true",
        tuesday: "true",
        wednesday: "true",
        thursday: "true",
        friday: "true",
        saturday: "true",
        sunday: "true",
      },
    },
    {
      time: "17:00",
      occupancy: {
        monday: "true",
        tuesday: "true",
        wednesday: "true",
        thursday: "true",
        friday: "true",
        saturday: "true",
        sunday: "true",
      },
    },
    {
      time: "18:00",
      occupancy: {
        monday: "true",
        tuesday: "true",
        wednesday: "true",
        thursday: "true",
        friday: "true",
        saturday: "true",
        sunday: "true",
      },
    },
  ];

  return (
    <>
      <div className="text-white dark:bg-gray-600">
        <div
          className="grid grid-cols-2 text-white dark:bg-gray-500 h-[90vh] w-full rounded-lg p-3 gap-2"
          style={{ gridTemplateColumns: "20% 80%" }}
        >
          <div
            className="grid grid-rows-3 text-white dark:bg-gray-500 h-[90vh] w-full rounded-lg"
            style={{ gridTemplateRows: "33% 33% 33%" }}
          >
            <div>
              <h1>Vista calendario</h1>
              <CalendarMonthView />
            </div>
            {/* <div>
              <h1>Resumen día</h1>
              <CalendarWeekSummary />
            </div> */}
            <div>
              <CalendarWeekSummaryChart />
            </div>
            <div>
              <h1>Personal</h1>
              <TableData />
            </div>
          </div>
          <div className="text-white dark:bg-gray-500 w-full rounded-lg">
            <div className="h-16 grid grid-cols-8 gap-4 dark:bg-gray-800 h-14 sticky top-0">
              <div className="w-full flex justify-center text-center items-center">
                Horarios
              </div>
              {daysOfWeek.map((item, index) => {
                return (
                  <div
                    className="w-full cursor-pointer flex justify-center text-center items-center "
                    key={index}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
            <div className="grid grid-rows">
              {availability.map((status, timeIndex) => (
                <div
                  className="h-16 border-b w-full grid grid-cols-8 gap-4 dark:bg-gray-600 justify-self-center text-center items-center"
                  key={timeIndex}
                >
                  <div className="col-span-1">{`${status.time}`}</div>
                  {Object.entries(status.occupancy).map(
                    ([day, availability], dayIndex) => (
                      // <Tooltip content="Existen 2 o más espacios disponibles">
                      <div
                        key={dayIndex}
                        className={
                          availability === "true"
                            ? "cursor-pointer bg-green-500 rounded col-span-1 flex justify-center text-center items-center"
                            : "cursor-not-allowed bg-red-500 rounded col-span-1 flex justify-center text-center items-center"
                        }
                        onClick={() => alert("Disponible")}
                        // onMouseEnter={()=> alert('X Disponibles')}
                      >
                        {availability === "true"
                          ? "Espacios disponibles"
                          : "Sin disponibilidad"}
                      </div>
                      // </Tooltip>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarWeekView;
