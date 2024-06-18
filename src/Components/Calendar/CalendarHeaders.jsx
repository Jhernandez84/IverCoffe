import React from 'react'
import { QuickDatePicker } from "./Calendar";

const CalendarHeaders = ({ setCalendarView }) => {

    const selectedView = (Selected) => {
        setCalendarView(Selected)
        console.log(Selected)
    }

    return (
        // <div className="text-white dark:bg-gray-600 rounded-t-lg flex items-center flex justify-between ">
        <div className="text-white dark:bg-gray-600 rounded-t-lg items-center flex">
            <div className="inline-flex justify-center rounded-md">
                <button
                    type="button"
                    className="px-4 py-2 text-sm font-medium dark:text-gray-400 dark:bg-gray-700 text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                    onClick={() => selectedView('YearView')}
                >
                    Año
                </button>
                <button
                    type="button"
                    className="px-4 py-2 text-sm font-medium dark:text-gray-400 dark:bg-gray-700 text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                    onClick={() => selectedView('MonthView')}
                >
                    Mes
                </button>
                <button
                    type="button"
                    className="px-4 py-2 text-sm font-medium dark:text-gray-400 dark:bg-gray-700 text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                    onClick={() => selectedView('WeekView')}
                >
                    Semana
                </button>
            </div>
            {/* <div className="inline-flex justify-center rounded-md">
                <button
                    type="button"
                    className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                    onClick={() => alert("Ingresar nueva reserva")}
                >
                    + Nueva Reserva
                </button>
            </div> */}
            {/* </div> */}
        </div>)
}

export default CalendarHeaders;