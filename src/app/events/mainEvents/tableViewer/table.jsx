import React from "react";

const TableViewer = ({ event }) => {
  return (
    <tr>
      <td>
        <img src={event.eventImage} alt="Event" />
      </td>
      <td>{event.eventId}</td>
      <td>{event.eventName}</td>
      {/* <td>{event.eventDescription}</td> */}
      {/* <td>{new Date(event.eventDate).toLocaleString()}</td> */}
      <td>{event.eventLocation}</td>
      <td>{event.organizerName}</td>
      <td>{event.attendeeCapacity}</td>
      <td>{event.eventType}</td>
      <td>${event.registrationCost}</td>

      <td>{event.eventCategory}</td>
      <td>{event.eventDuration}</td>
      {/* <td>{event.tags.join(", ")}</td> */}
      <td>{event.eventVisibility}</td>
      {/* <td>{event.requireRSVP ? "Yes" : "No"}</td>
          <td>{event.eventLanguage}</td>
          <td>{event.sendAutomaticReminder ? "Yes" : "No"}</td>
          <td>{event.cancellationPolicy}</td>
          <td>
            <a href={event.registrationLink}>Register Here</a>
          </td>
          <td>
            {Object.entries(event.socialMediaLinks).map(
              ([platform, link]) => (
                <div key={platform}>
                  <a href={link}>{platform}</a>
                </div>
              )
            )}
          </td> */}
      <td>
        {/* {new Date(
              event.registrationDeadline
            ).toLocaleDateString()} */}
      </td>
    </tr>
  );
};

export default TableViewer;
