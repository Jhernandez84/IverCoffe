"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/Components/Firebase/firebase";
import {
  GetFireBaseData,
  GetFireBaseDataCount,
} from "@/Components/Firebase/DataManager/DataOperations";

import "./lgTableStyles.css";

import LGTableModal from "./lgTableModal";
import LGtableModalQuickEntry from "./lgTableModalQuickEntry";

// import CardChartComponent from "@/Components/CardsCharts/CardChartComponent";
import sampledata from "@/Components/Firebase/sampledata";

const LGTableComponent = ({ tableTitle, tableHeaders, tableData }) => {
  const { user } = "Jhernand";

  const [DBEvento, setDBEvento] = useState("BDGeneralIglesia");

  const [DBdata, setDBdata] = useState([]); // Variable utilizada para tener todos los registros como base y no consultar constantemente la BD
  const [DBdataCounter, setDBdataCounter] = useState([]); // Variable utilizada para tener todos los registros como base y no consultar constantemente la BD

  useEffect(() => setDBdata(sampledata), []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (DBEvento) {
  //       try {
  //         const data = await GetFireBaseData(DBEvento);
  //         const countData = await GetFireBaseDataCount(DBEvento);
  //         setDBdata(data);
  //         setDBdataCounter(countData);
  //         console.log("FetchData triggered");
  //       } catch (error) {
  //         // Handle error if fetching data fails
  //         console.error("Error fetching data:", error);
  //       }
  //     }
  //   };

  //   fetchData(); // Call the async function to fetch and update data when DBEvento is not null
  // }, [DBEvento]);

  const headers = [
    "Foto",
    "Rut",
    "Nombres",
    "Apellidos",
    "Fech. Nac.",
    "Teléfono",
    "Estado Civil",
    "Red Asignada",
    "Grupo Iglesia",
    "Equipo de Trabajo",
    "Lugar Origen",
    "Estado Iglesia",
    "Actualizado?",
  ];

  const [isModalOpen, setModalOpen] = useState(false);
  const [addNewRecord, setAddNewRecord] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    console.log("Opening modal for item:", item.item);
    setSelectedItem(item.item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setAddNewRecord(false);
  };

  const [valueToFind, setvalueToFind] = useState("");
  const [readyToFind, setReadytoFind] = useState(false);
  const [filteredArray, setFilteredArray] = useState([]);
  const [selectedFirstFilter, setSelectedFirstFilter] = useState("");
  const [selectedSecondFilter, setselectedSecondFilter] = useState("");
  const [selectedThirdFilter, setselectedThirdFilter] = useState("");
  const [selectedFourthFilter, setselectedFourthFilter] = useState("");
  const [selectedFifthFilter, setselectedFifthFilter] = useState("");

  const [isChecked, setIsChecked] = useState(false); // State to track checkbox state

  const firstFilter = [
    { Name: "Todos", value: "" },
    { Name: "Director", value: "Director" },
    { Name: "Presidente", value: "Presidente" },
    { Name: "Vice-Presidente", value: "Vice-Presidente" },
    { Name: "SubTesorero", value: "SubTesorero" },
    { Name: "Secretario", value: "Secretario" },
    { Name: "SubSecretario", value: "SubSecretario" },
  ];

  const secondFilter = [
    { Name: "Todos", value: "" },
    { Name: "Director", value: "Director" },
    { Name: "Presidente", value: "Presidente" },
    { Name: "Vice-Presidente", value: "Vice-Presidente" },
    { Name: "SubTesorero", value: "SubTesorero" },
    { Name: "Secretario", value: "Secretario" },
    { Name: "SubSecretario", value: "SubSecretario" },
  ];
  const thirdFilter = [
    { Name: "Todos", value: "" },
    { Name: "Pastores Principales", value: "Pastores Principales" },
    { Name: "Pastores", value: "Pastores" },
    { Name: "Ancianos", value: "Ancianos" },
    { Name: "Diáconos", value: "Diaconos" },
    { Name: "Líderes", value: "Lideres" },
    { Name: "Sub-líderes", value: "Sub-Lideres" },
    { Name: "Ayudantes", value: "Ayudantes" },
    { Name: "Sin liderazgo", value: "Sin liderazgo" },
  ];
  const FourthFilter = [
    { Name: "Todos", value: "" },
    { Name: "Iver Kids", value: "Iver Kids" },
    { Name: "Iver Jóvenes", value: "Iver Jóvenes" },
    { Name: "Iver Mujeres", value: "Iver Mujeres" },
    { Name: "Iver Varones", value: "Iver Varones" },
  ];

  const FifthFilter = [
    { Name: "Todos", value: "" },
    { Name: "Iver Central", value: "Iver Central" },
    { Name: "Iver Talcahuano", value: "Iver Talcahuano" },
    { Name: "Iver La Calera", value: "Iver La Calera" },
    { Name: "Iver San Clemente", value: "Iver San Clemente" },
    { Name: "Iver Nancahua", value: "Iver Nancahua" },
  ];

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleSelectFirstFilter = (event) => {
    setSelectedFirstFilter(event.target.value);
  };
  const handleSelectSecondFilter = (event) => {
    setselectedSecondFilter(event.target.value);
  };
  const handleSelectThirdFilter = (event) => {
    setselectedThirdFilter(event.target.value);
  };
  const handleSelectFourthFilter = (event) => {
    setselectedFourthFilter(event.target.value);
  };
  const handleSelectFifthdFilter = (event) => {
    setselectedFifthFilter(event.target.value);
  };

  // Filter the data when valueToFind or DBdata changes
  useEffect(() => {
    // If DBdata is empty, there's nothing to filter
    if (!DBdata || DBdata.length === 0) {
      setFilteredArray([]); // Set filteredArray to an empty array
      return;
    }

    let searchString = null;

    // If valueToFind is empty, set filteredArray to DBdata directly
    if (isChecked) {
      searchString = "";
      if (selectedFirstFilter) {
        searchString = selectedFirstFilter.toLowerCase();
      }
      if (selectedSecondFilter)
        searchString = selectedSecondFilter.toLowerCase();
      if (selectedThirdFilter) searchString = selectedThirdFilter.toLowerCase();
      if (selectedFourthFilter)
        searchString = selectedFourthFilter.toLowerCase();
      if (selectedFifthFilter) searchString = selectedFifthFilter.toLowerCase();
    } else {
      if (!valueToFind) {
        setFilteredArray(DBdata);
        return; // Exit early to avoid unnecessary filtering
      }
      searchString = valueToFind.toLowerCase();
      // console.log(searchString);
    }

    // Filter DBdata based on the search string
    const filteredData = DBdata.filter((item) =>
      Object.values(item).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(searchString)
      )
    );

    setFilteredArray(filteredData); // Update state with filtered array
  }, [
    isChecked,
    valueToFind,
    DBdata,
    selectedFirstFilter,
    selectedSecondFilter,
    selectedThirdFilter,
    selectedFourthFilter,
    selectedFifthFilter,
  ]); // Run this effect whenever valueToFind or DBdata changes

  const handleSearchInput = (e) => {
    setvalueToFind(e.target.value);
  };

  const handleAddNewRecord = () => {
    setAddNewRecord(true);
    console.log(addNewRecord);
  };

  useEffect(() => {
    console.log(DBdata);
  }, [DBdata]);

  if (DBdata.length === 0) {
    return <div>Loading...</div>;
  } else {
    return (
      <main className="table-container">
        {isModalOpen && (
          <LGTableModal closeModal={closeModal} item={selectedItem} />
        )}
        {addNewRecord && <LGtableModalQuickEntry closeModal={closeModal} />}
        {/* <section className="charts-container">
          <div>
            <CardChartComponent
              id={"lideres"}
              CardChartData={""}
              header={"lideres"}
              text={DBdataCounter}
              text2={"Var % en últimos 3 días"}
            />
          </div>
          <div>
            <CardChartComponent
              id={"IverRegiones"}
              CardChartData={"25"}
              header={"IverRegiones"}
              text={"50"}
              text2={"Var % en últimos 3 días"}
            />
          </div>
          <div>
            <CardChartComponent
              id={3}
              CardChartData={"25"}
              header={"IverRegiones"}
              text={"50"}
              text2={"Var % en últimos 3 días"}
            />
          </div>
          <div>
            <CardChartComponent
              id={4}
              CardChartData={"25"}
              header={"IverRegiones"}
              text={"50"}
              text2={"Var % en últimos 3 días"}
            />
          </div>
        </section> */}
        <section className="table">
          <section className="table_header">
            <section className="table_header_title">
              <p> {tableTitle}</p>
            </section>
            <section className="table-header-finder">
              <input
                className="input-group"
                type="text"
                placeholder={"Buscar..."}
                onChange={handleSearchInput}
              />
            </section>
            <section className="table-header-quick-entry">
              <input
                className="btn_quick_entry"
                type="button"
                value="+ Nuevo Registro"
                onClick={handleAddNewRecord}
              />
            </section>
            <section className="table_header_filter_selector">
              <input
                type="checkbox"
                id="myCheckbox"
                checked={isChecked}
                onChange={toggleCheckbox}
              />
              <label htmlFor="myCheckbox" className="checkboxLabel">
                {} Agregar más filtros
              </label>
            </section>
          </section>
          {isChecked ? (
            <section className="table_filter_section">
              <div className="first-filter">
                <label htmlFor="options" className="input-label">
                  Filtrar por:
                </label>
                <select
                  id="options"
                  value={selectedFirstFilter}
                  onChange={handleSelectFirstFilter}
                  className="input-name"
                  defaultValue="Seleccione Directorio"
                >
                  {firstFilter.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.Name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="second-filter">
                <select
                  id="options"
                  value={selectedSecondFilter}
                  onChange={handleSelectSecondFilter}
                  className="input-name"
                >
                  <option value="Seleccione" selected disabled>
                    Seleccione
                  </option>
                  {secondFilter.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.Name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="third-filter">
                <select
                  id="options"
                  value={selectedThirdFilter}
                  onChange={handleSelectThirdFilter}
                  className="input-name"
                >
                  <option value="Seleccione" selected disabled>
                    Seleccione
                  </option>
                  {thirdFilter.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.Name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="third-filter">
                <select
                  id="options"
                  value={selectedFourthFilter}
                  onChange={handleSelectFourthFilter}
                  className="input-name"
                >
                  <option value="Seleccione" selected disabled>
                    Seleccione
                  </option>
                  {FourthFilter.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.Name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="third-filter">
                <select
                  id="options"
                  value={selectedFifthFilter}
                  onChange={handleSelectFifthdFilter}
                  className="input-name"
                >
                  <option value="Seleccione" selected disabled>
                    Seleccione
                  </option>
                  {FifthFilter.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.Name}
                    </option>
                  ))}
                </select>
              </div>
            </section>
          ) : (
            []
          )}

          <section className="table_body">
            <table>
              <thead>
                {headers.map((header, index) => (
                  // <th key={index}>{header} {<HiArrowUp/>} {<HiArrowDown/>}</th>
                  <th key={index}>{header}</th>
                ))}
              </thead>
              <tbody>
                {filteredArray.map((item, index) => (
                  <tr
                    key={index}
                    onClick={() => {
                      openModal({ item });
                    }}
                    className={
                      item.visibility === "visible" ? "visible" : "hidden"
                    }
                  >
                    {/* // <tr key={index} onClick={() => alert("clicked")}> */}
                    <td>
                      {/* <img src={item.imageUrl} alt="" /> */}
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </td>
                    <td>{item.Rut}</td>
                    {/* <td>{item.Nombres}</td> */}
                    <td>
                      {item.Nombres.charAt(0).toUpperCase() +
                        item.Nombres.slice(1).toLowerCase()}
                    </td>
                    <td>
                      {/* {item.ApellidoPaterno.charAt(0).toUpperCase() + item.ApellidoPaterno.slice(1).toLowerCase() } {item.ApellidoMaterno} */}
                      {item.ApellidoPaterno} {item.ApellidoMaterno}
                    </td>
                    <td>{item.FechaNacimiento}</td>
                    <td>{item.NumeroContacto}</td>
                    <td>{item.EstadoCivil}</td>
                    <td>{item.RedAsignada}</td>
                    <td>{item.GrupoAsignado}</td>
                    <td>{item.EquipoTrabajo}</td>
                    <td>{item.LugarOrigen}</td>
                    <td>{item.EstadoIglesia}</td>
                    <td>{item.EstadoActualizacion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </section>
        {/* <section>
        <p>pagination</p>
      </section> */}
      </main>
    );
  }
};

export default LGTableComponent;
