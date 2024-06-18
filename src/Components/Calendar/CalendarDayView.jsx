import React from "react";

const CalendarDayView = () => {
  const List = [
    {
      Time: "09:00",
      Img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      User: "Daniela Navarro Quevedo",
    },
    {
      Time: "10:00",
      User: "Matías Hernández Navarro",
    },
    {
      Time: "11:00",
      User: "Jonathan Hernández Miranda",
    },
    {
      Time: "12:00",
      User: "Loreto Miranda",
    },
    {
      Time: "13:00",
      User: "José Hernández Flores",
    },
    {
      Time: "10:00",
      User: "Matías Hernández Navarro",
    },
    {
      Time: "11:00",
      User: "Jonathan Hernández Miranda",
    },
    {
      Time: "12:00",
      User: "Loreto Miranda",
    },
    {
      Time: "13:00",
      User: "José Hernández Flores",
    },
    {
      Time: "09:00",
      User: "Daniela Navarro Quevedo",
    },
    {
      Time: "10:00",
      User: "Matías Hernández Navarro",
    },
    {
      Time: "11:00",
      User: "Jonathan Hernández Miranda",
    },
    {
      Time: "12:00",
      User: "Loreto Miranda",
    },
    {
      Time: "13:00",
      User: "José Hernández Flores",
    },
    {
      Time: "10:00",
      User: "Matías Hernández Navarro",
    },
    {
      Time: "11:00",
      User: "Jonathan Hernández Miranda",
    },
    {
      Time: "12:00",
      User: "Loreto Miranda",
    },
    {
      Time: "13:00",
      User: "José Hernández Flores",
    },
  ];

  return (
    <>
      <div className="dark:bg-gray-700 rounded-md shadow-xl">
        <div className="grid grid-rows flex justify-center content-center p-2">
          <div className="text-center w-[100] rounded-t-md">
            {/* <div className="dark:hover:bg-teal-600 dark:hover:cursor-pointer text-center p-1 dark:bg-gray-800 rounded-t-md">
                            Hoy
                        </div> */}
            <div className="justify-center content-center h-[350px] overflow-auto rounded-t-md text-white">
              <table>
                <thead className="sticky top-0 dark:bg-gray-600 h-[40px] text-center text-base dark:bg-gray-800 ">
                  <tr>
                    <td className="w-[10%]">Horario</td>
                    {/* <td className="w-[100px]">Foto</td> */}
                    <td className="w-[500px]">Datos de la reserva</td>
                    <td className="w-[700px]">Opciones</td>
                  </tr>
                </thead>
                <tbody className="overflow-auto">
                  {List.map((e) => (
                    <tr
                      key={e.id}
                      className="dark:hover:bg-teal-600 dark:hover:cursor-pointer text-base text-center dark:transition ease-in-out animate-slide-{right}"
                    >
                      <td className="dark:hover:cursor-pointer text-center p-2 rounded-l">
                        {e.Time}
                      </td>
                      <td
                        className="dark:hover:cursor-pointer text-left p-2 grid grid-cols-2"
                        style={{ gridTemplateColumns: "20% 80%" }}
                        onClick={() => alert("Click Cliente")}
                      >
                        <img
                          className="h-12 w-12 flex-none rounded-full bg-gray-50"
                          src={e.Img}
                          alt=""
                        />
                        <div className="grid grid-rows-2">
                        {e.User}
                        <h1>última visita</h1>
                        </div>
                      </td>
                      <td className="dark:hover:cursor-pointer text-center rounded-r">
                        <div className="grid grid-cols-3 text-center p-2 rounded-r">
                          <h1
                            className="dark:hover:cursor-pointer text-center dark:hover:bg-blue-800 rounded"
                            onClick={() => alert("Recordatorio")}
                          >
                            ✉️ Recordar
                          </h1>
                          <h1
                            className="dark:hover:cursor-pointer text-center dark:hover:bg-yellow-500 rounded"
                            onClick={() => alert("Editar")}
                          >
                            📝 Editar
                          </h1>
                          <h1
                            className="dark:hover:cursor-pointer text-center dark:hover:bg-red-800 rounded"
                            onClick={() => alert("Cancelar")}
                          >
                            ❌ Cancelar
                          </h1>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarDayView;
