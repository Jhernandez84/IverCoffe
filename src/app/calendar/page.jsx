"use client";
import React, { useState } from "react";
import CalendarComponent from "@/Components/CalendarComponent/CalendarComponent";

export default function Calendar() {
  const [calendarView, setCalendarView] = useState("MonthView");
  return <CalendarComponent />;
}
