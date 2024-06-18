"use client";

const people = [
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
  },
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "✅",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
];

export default function TableData() {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg dark:bg-gray-700 w-[320px] p-2">
        {/* <div className="justify-center content-center justify-items-center text-base dark:text-white dark:bg-gray-800 m-2 h-[40px] rounded-t-lg">
          <h1 className="text-center text-base pt-2">Equipo disponible</h1>
        </div> */}
        <div className="justify-center content-center h-[350px] overflow-x-auto rounded-t-md text-white">
          <table>
            <thead className="sticky top-0 dark:bg-gray-600 h-[40px] text-center text-base dark:bg-gray-800 ">
              <tr className="flex flex-wrap p-2 text-center w-[250px]">
                <td className="dark:w-[35%] grid grid-cols-2 items-center justify-center">
                  <input
                    className="rounded-full items-center self-center dark:hover:cursor-pointer ml-3"
                    type="checkbox"
                    name=""
                    id=""
                    checked="true"
                    // onMouseOver={()=>alert('mouse entered')}
                  />
                  <p className="text-left">Todos</p>
                </td>
                <td className="dark:w-[30%] dark:text-right pl-10"> Nombre</td>
                <td className="dark:w-[35%] dark:text-right pl-20"> Estado </td>
              </tr>
            </thead>
            <tbody className="overflow-x-auto">
              {people.map((person) => {
                return (
                  <tr key={person.email} className="flex gap-x-6 py-5 ">
                    <td className="pl-5 flex">
                      <input
                        className="rounded-full items-center self-center dark:hover:cursor-pointer"
                        type="checkbox"
                        name=""
                        id=""
                        checked="true"
                        // onMouseOver={()=>alert('mouse entered')}
                      />
                    </td>
                    <td className="">
                      <img
                        className="h-12 w-12 flex-none rounded-full bg-gray-50"
                        src={person.imageUrl}
                        alt=""
                      />
                    </td>
                    <td>
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                          {person.name}
                        </p>
                        <p className="text-xs dark:text-white">{person.role}</p>
                      </div>
                    </td>
                    <td>
                      <div className="min-w-0 flex-auto justify-center items-center">
                        <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-white justify-center items-center">
                          {person.lastSeen}
                        </p>
                        <p></p>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
