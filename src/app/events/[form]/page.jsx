"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

import { useContext } from "react";
import { ThemeContext } from "@/Context/ThemeContext/ThemeContext";
import { AuthContext } from "@/Context/UserContext/UserContext";
import { ProductContext } from "@/Context/ProductContext/ProductContext";

import "./styles.css";
import "../././styles.css";

const FormRender = () => {
  const { userThemePreference } = useContext(ThemeContext);
  const { authUser } = useContext(AuthContext);

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return (
    <>
      <section
        className={
          userThemePreference === "Dark"
            ? "coffemanager-container Dark"
            : "coffemanager-container"
        }
      >
        <section>
          <section className="coffe-manager-body-container">
            <section className="coffe-manager-body-products-navigation">
              <section className="coffe-manager-body-menu-container"></section>
            </section>
          </section>
          <section>
            <table cellPadding="10">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Event Name</th>
                  <th>Event ID</th>
                  {/* <th>Description</th> */}
                  {/* <th>Date & Time</th> */}
                  <th>Location</th>
                  <th>Organizer</th>
                  <th>Capacity</th>
                  <th>Type</th>
                  <th>Cost</th>
                  <th>Category</th>
                  <th>Duration</th>
                  {/* <th>Tags</th> */}
                  <th>Visibility</th>
                  {/* <th>RSVP Required</th>
                  <th>Language</th>
                  <th>Reminder</th>
                  <th>Cancellation Policy</th>
                  <th>Registration Link</th>
                  <th>Social Media</th> */}
                  <th>Registration Deadline</th>
                </tr>
              </thead>
              <tbody>
                {/* {events.map((event, index) => (
                  <TableViewer event={event} key={event.eventId} />
                ))} */}
              </tbody>
            </table>
          </section>
        </section>
      </section>
    </>
  );
};

export default FormRender;
