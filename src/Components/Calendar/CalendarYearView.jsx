import React from 'react'
import CalendarMonthView from './CalendarMonthView';

const CalendarYearView = ({ year }) => {
    return (
        <>
            <div className='grid grid-rows-3 p-6'>
                <div className='grid grid-cols-4 p-4'>
                    <CalendarMonthView month={0} />
                    <CalendarMonthView month={1} />
                    <CalendarMonthView month={2} />
                    <CalendarMonthView month={3} />
                </div>
                <div className='grid grid-cols-4 p-4'>
                    <CalendarMonthView month={4} />
                    <CalendarMonthView month={5} />
                    <CalendarMonthView month={6} />
                    <CalendarMonthView month={7} />
                </div>
                <div className='grid grid-cols-4 p-4'>
                    <CalendarMonthView month={8} />
                    <CalendarMonthView month={9} />
                    <CalendarMonthView month={10} />
                    <CalendarMonthView month={11} />
                </div>
            </div>
        </>
    )
}

export default CalendarYearView;