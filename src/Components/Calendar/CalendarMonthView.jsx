// components/Calendar.js
import React from "react";
import { useState } from "react";
import MyModal from "./CalendarModal";
// import "./styles.css";

const daysInMonth = (month, year) => {
  const datys = new Date(year, month + 1, 0).getDate();
  return new Date(year, month + 1, 0).getDate();
};

const getWeek = (date) => {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const days = Math.floor((date - firstDayOfYear) / (24 * 60 * 60 * 1000));
  return Math.ceil((days + firstDayOfYear.getDay() + 1) / 7);
};

const generateCalendar = (month, year) => {
  const totalDays = daysInMonth(month, year);
  const firstDayOfWeek = new Date(year, month, 1).getDay();

  const calendar = [];

  // Llena los días del mes anterior
  const prevMonthDays = daysInMonth(
    month - 1 < 0 ? 11 : month - 1,
    month - 1 < 0 ? year - 1 : year
  );
  const prevMonthStart = prevMonthDays - firstDayOfWeek + 1;
  for (let i = prevMonthStart; i <= prevMonthDays; i++) {
    calendar.push({
      day: i,
      week: getWeek(new Date(year, month - 1 < 0 ? 11 : month - 1, i)),
      isPrevMonth: true,
    });
  }

  // Llena los días del mes actual
  for (let day = 1; day <= totalDays; day++) {
    calendar.push({
      day,
      week: getWeek(new Date(year, month, day)),
      isPrevMonth: false,
      fulldate: `${year}-${month < 10 ? "0" : ""}${month + 1}-${
        day < 10 ? "0" : ""
      }${day}`,
    });
  }

  // Llena los días del mes siguiente
  const daysAfter = 42 - calendar.length;
  for (let i = 1; i <= daysAfter; i++) {
    calendar.push({
      day: i,
      week: getWeek(new Date(year, month + 1 > 11 ? 0 : month + 1, i)),
      isNextMonth: true,
    });
  }

  // console.log(calendar)
  return calendar;
};

const getMonthName = (monthNumber) => {
  const monthDate = new Date(2023, monthNumber - 1, 1); // Month is zero-based
  return monthDate.toLocaleString("es-CL", { month: "long" });
};

const CalendarMonthView = ({
  month = new Date().getMonth(),
  year = new Date().getFullYear(),
  Fscreen,
}) => {
  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
    const day = currentDate.getDate();

    // Format the date as a string (optional)
    const formattedDate = `${year}-${month < 10 ? "0" : ""}${month}-${
      day < 10 ? "0" : ""
    }${day}`;
    // console.log(formattedDate)
    return formattedDate;
  };

  // Example usage
  const [monthCalendar, setMonthCalendar] = useState(month);
  const [yearCalendar, setYearCalendar] = useState(year);

  const calendar = generateCalendar(monthCalendar, yearCalendar);

  const [isModalOpen, setModalOpen] = useState(false);
  const [SelectedDate, setSelectedDate] = useState(false);
  const [showMonthSelector, setShowMonthSelector] = useState(false);
  const [calendarView, setCalendarView] = useState("default"); //Default => Calendar, Year=> Year Selector, Month => Month Selector
  const [fullScreen, setFullScreen] = useState(false);

  const initialState = () => {
    setMonthCalendar(month);
    setYearCalendar(year);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const dateHandler = (e) => {
    setSelectedDate(e);
    openModal();
  };

  const MonthsArray = [
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

  const generateYearArray = () => {
    const yearArray = Array.from(
      { length: 25 },
      (_, index) => year - 10 + index
    );
    return yearArray;
  };

  const Years = generateYearArray();

  const HandlerCalendarView = (value) => {
    calendarView == value ? setCalendarView("default") : setCalendarView(value);
  };

  return (
    <>
      {isModalOpen && (
        <MyModal onClose={closeModal} SelectedDate={SelectedDate} />
      )}
      <div className="cdr-main-container">
        <div className="cdr-secondary-container">
          <div className="cdr-header-container">
            <div className="cdr-header-container-left">
              <div
                className="cdr-selector"
                onClick={() => setMonthCalendar(monthCalendar - 1)}
              >
                <p>{`<`}</p>
              </div>
              <p
                className="cdr-selector"
                onClick={() => HandlerCalendarView("month")}
              >{`${getMonthName(monthCalendar + 1)}`}</p>
              <div
                className="cdr-selector"
                onClick={() => setMonthCalendar(monthCalendar + 1)}
              >
                <p>{`>`}</p>
              </div>
            </div>

            <div className="cdr-header-container-right">
              <div
                className="cdr-selector"
                onClick={() => setYearCalendar(year - 1)}
              >
                <p>{`<`}</p>
              </div>
              <p
                className="cdr-selector"
                onClick={() => HandlerCalendarView("year")}
              >{`${yearCalendar}`}</p>
              <div
                className="cdr-selector"
                onClick={() => setYearCalendar(year + 1)}
              >
                <p>{`>`}</p>
              </div>
            </div>
          </div>
          {calendarView == "month" ? (
            <div className="grid grid-cols-3 justify-center content-center p-4">
              {MonthsArray.map((mesNombre, index) => (
                <p
                  key={mesNombre} // Add a unique key for each element when using map
                  className={`p-2 dark:hover:cursor-pointer dark:hover:bg-teal-600 rounded {${mesNombre}== ${getMonthName()}}`}
                  onClick={() => {
                    setMonthCalendar(index);
                    HandlerCalendarView("month");
                  }}
                >
                  {mesNombre}
                </p>
              ))}
            </div>
          ) : (
            []
          )}
          {calendarView == "year" ? (
            <div className="grid grid-cols-5 justify-center content-center p-4">
              {Years.map((year) => (
                <p
                  key={year} // Using year as the key
                  className="p-2 dark:hover:cursor-pointer dark:hover:bg-teal-600 rounded"
                  onClick={() => {
                    setYearCalendar(year);
                    HandlerCalendarView("year");
                  }}
                >
                  {year}
                </p>
              ))}
            </div>
          ) : (
            []
          )}
          {calendarView == "default" ? (
            <table className="">
              <thead className="cdr-header-days">
                <tr>
                  <th>Sem</th>
                  <th>Lun</th>
                  <th>Mar</th>
                  <th>Mié</th>
                  <th>Jue</th>
                  <th>Vie</th>
                  <th>Sáb</th>
                  <th>Dom</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 6 }).map((_, weekIndex) => (
                  <tr key={weekIndex}>
                    {Array.from({ length: 8 }).map((_, dayIndex) => {
                      const dataIndex = weekIndex * 7 + dayIndex;
                      const dayInfo = calendar[dataIndex];
                      if (dayIndex === 0) {
                        return (
                          <td key={dayIndex} className="cdr-week-number">
                            {dayInfo ? dayInfo.week : ""}
                          </td>
                        );
                      }
                      if (
                        dayInfo?.isPrevMonth === true ||
                        dayInfo?.isNextMonth === true
                      ) {
                        return (
                          <td className="cdr-last-next-month" key={dayIndex}>
                            {dayInfo ? dayInfo.day : ""}
                          </td>
                        );
                      } else {
                        if (dayInfo?.fulldate === getCurrentDate()) {
                          return (
                            <td
                              onClick={() => dateHandler(dayInfo.fulldate)}
                              className="cdr-current-day"
                              key={dayIndex}
                            >
                              {dayInfo ? dayInfo.day : ""}
                            </td>
                          );
                        } else {
                          return (
                            <td
                              onClick={() => dateHandler(dayInfo.fulldate)}
                              className="cdr-current-month"
                              key={dayIndex}
                            >
                              {dayInfo ? dayInfo.day : ""}
                            </td>
                          );
                        }
                      }
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            []
          )}
          <div className="cdr-footer-container">
            <div
              className="btn-cdr-current-day"
              onClick={() => {
                initialState();
                HandlerCalendarView("default");
              }}
            >
              Hoy: {getCurrentDate()} 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarMonthView;
