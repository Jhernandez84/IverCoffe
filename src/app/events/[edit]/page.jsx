"use client";
import React from "react";
import { useParams, useSearchParams } from "next/navigation";

const EventEditorPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return (
    <>
      <h1>Editor de formularios {id}</h1>
      {/* <p>ID: {id}</p> */}
      <section></section>
    </>
  );
};

export default EventEditorPage;
