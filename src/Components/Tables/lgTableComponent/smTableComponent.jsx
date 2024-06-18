"use client";
import React from "react";

const smTableComponent = () => {
    const sampledata = [
        {
          name: "Leslie Alexander",
          email: "leslie.alexander@example.com",
          role: "Co-Founder / CEO",
          imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          lastSeen: "✅",
          lastSeenDateTime: "2023-01-23T13:23Z",
        },
        {
          name: "Michael Foster",
          email: "michael.foster@example.com",
          role: "Co-Founder / CTO",
          imageUrl:
            "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          lastSeen: "✅",
          lastSeenDateTime: "2023-01-23T13:23Z",
        },
        {
          name: "Dries Vincent",
          email: "dries.vincent@example.com",
          role: "Business Relations",
          imageUrl:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          lastSeen: "✅",
        }]

    const headers = [
        "Foto",
        "Rut",
        "Nombre",
        "Apellido Paterno",
        "Apellido Materno",
        "Eliminar",
      ];

  return (
      <section className="table">
        <section className="table_body">
          <table>
            <thead>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </thead>
            <tbody>
              {sampledata.map((item, index) => (
                <tr
                  key={index}
                  className={
                    item.visibility === "visible" ? "visible" : "hidden"
                  }
                >
                  <td>
                    <img src={item.imageUrl} alt="" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>{item.lastSeen}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </section>
  );
};

export default smTableComponent;