"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./styles.css";
import { Hedvig_Letters_Sans } from "next/font/google";

const LogInPage = ({ authUser, signInWithGoogle }) => {
  // Use object destructuring to receive props

  const UrlBg = "https://nttdata-solutions.com/wp-content/usermedia/artificial-intelligence-technology-2-1530x750.jpg";

  return (
    <>
      <div className="videoContainer">
        {/* <img src={UrlBg} alt="" /> */}

        {/* <video src="/blue.mov" className="videoBg" autoPlay muted loop playsInline>
          <source
            // src="public/blue.mov"
            type="video/quicktime"
          />
          Your browser does not support the video tag.
        </video> */}
        <div className="content">
          <div className="home-container">
            <h1>Bienvenido a la Intranet de IverChile</h1>
            <section className="logIn-Container">
              <section className="logInSection" onClick={signInWithGoogle}>
                <img
                  src="https://antoniofernandez.com/assets/blog/node-google-login.png"
                  alt=""
                />
                <p>Iniciar sesión con Google</p>
              </section>
              <section className="logInSection">
                <img
                  src="https://media.istockphoto.com/id/1180028723/es/vector/tel%C3%A9fono-con-el-icono-de-s%C3%ADmbolo-de-ondas-negro-simple-aislado-vector-stock-ilustraci%C3%B3n.jpg?s=612x612&w=0&k=20&c=W9TgvFdobzKSPPnhf3235H31XrGh2dtC2tsQnQ5Aroc="
                  alt=""
                />
                <p>Iniciar sesión con teléfono</p>
              </section>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogInPage;
