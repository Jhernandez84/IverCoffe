import { useState } from "react";

export const renderCalendar = (targetYear, targetMonth) => {
  //   const [currFormattedDate, setCurrFormattedDate] = useState(
  //     currDate.toISOString().split("T")[0]
  //   );

  const currDate = new Date();
  const currYear = currDate.getFullYear();
  const currMonth = currDate.getMonth();

  console.log(currDate);
  const firstDayOfMonth = new Date(targetYear, targetMonth, 1).getDay(); // getting first day of month
  const lastDateOfMonth = new Date(targetYear, targetMonth + 1, 0).getDate(); // getting last date of month
  const lastDayOfMonth = new Date(
    targetYear,
    targetMonth,
    lastDateOfMonth
  ).getDay(); // getting last day of month
  const lastDateOfLastMonth = new Date(targetYear, targetMonth, 0).getDate(); // getting last date of previous month
  const days = [];

  for (let i = firstDayOfMonth; i > 0; i--) {
    // creating array of previous month last days
    const date = new Date(
      targetYear,
      targetMonth - 1,
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
    const date = new Date(targetYear, targetMonth, i);
    const formattedDate = date.toISOString().split("T")[0]; // Format date as yyyy-mm-dd
    const isActive =
      i === currDate.getDate() &&
      targetMonth === new Date().getMonth() &&
      targetYear === new Date().getFullYear();

    days.push({
      day: i,
      thisMonth: "yes",
      currentDate: isActive ? "yes" : "no",
      fullDate: formattedDate,
    });
  }

  for (let i = lastDayOfMonth; i < 6; i++) {
    // creating array of next month first days
    const date = new Date(targetYear, targetMonth + 1, i - lastDayOfMonth + 1);
    const formattedDate = date.toISOString().split("T")[0]; // Format date as yyyy-mm-dd
    days.push({
      day: i - lastDayOfMonth + 1,
      thisMonth: "no",
      currentDate: "no",
      fullDate: formattedDate,
    });
  }
  return days;
};
