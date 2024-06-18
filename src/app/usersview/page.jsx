"use client";
import React, { useContext } from "react";
import dynamic from "next/dynamic";
import sampledata from "@/Components/Firebase/sampledata";
import { ThemeContext } from "@/Context/ThemeContext/ThemeContext";
import MyChart from "@/Components/Charts/ChartBuilder";
import "./styles.css";

const LGTableComponent = dynamic(() =>
  import("@/Components/Tables/lgTableComponent/lgTableComponent")
);

const UsersView = () => {
  const { userThemePreference } = useContext(ThemeContext);

  return (
    <>
      <section
        className={
          userThemePreference === "Dark"
            ? "Members-container Dark"
            : "Members-container"
        }
      >
        <div className="Members-header">Acá va el encabezado</div>
        <div className="Members-visual-filters">
          <div className="Members-filters">
            <p className="Members-filters-title">Opciones</p>
            <p>Visualizar:</p>
            <span>
              <p>Filtros:</p>
              <select class="dropdown">
                <optgroup label="Group 1">
                  <option value="option1_1">Option 1.1</option>
                  <option value="option1_2">Option 1.2</option>
                </optgroup>
                <optgroup label="Group 2">
                  <option value="option2_1">Option 2.1</option>
                  <option value="option2_2">Option 2.2</option>
                </optgroup>
                <optgroup label="Group 3">
                  <option value="option3_1">Option 3.1</option>
                  <option value="option3_2">Option 3.2</option>
                </optgroup>
              </select>
            </span>
            <p>Agregar nuevo</p>
          </div>
          <div className="Members-charts">
            <MyChart chrTitle="Gráfico 1" chrDataLabel="Visualización 1" />
            <MyChart chrTitle="Gráfico 1" chrDataLabel="Visualización 1" />
          </div>
        </div>
        <div>
          <LGTableComponent
            tableTitle="Vista general de hermanos"
            tableData={sampledata}
          />
        </div>
      </section>
    </>
  );
};

export default UsersView;