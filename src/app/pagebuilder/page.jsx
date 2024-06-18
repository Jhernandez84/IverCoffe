import React from "react";
import LGTableComponent from "@/Components/Tables/lgTableComponent/lgTableComponent";
import sampledata from "@/Components/Firebase/sampledata";
import dynamic from "next/dynamic";

const DynamicLGTableComponent = dynamic(
  () => import("@/Components/Tables/lgTableComponent/lgTableComponent"),
  {
    ssr: false,
  }
);

const pagebuilder = () => {
  const people = [
    // Your data array...
  ];

  return (
    <DynamicLGTableComponent
      tableTitle={"Listado de hermanos activos"}
      tableData={sampledata}
    />
  );
};

export default pagebuilder;
