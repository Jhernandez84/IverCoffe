"use client";
import Link from "next/link";
import * as HiIcons from "react-icons/hi";
import {
  HiChartPie,
  HiHome,
  HiUserGroup,
  HiTicket,
  HiCalendar,
  HiAdjustments,
  HiUser,
  HiUsers,
  HiQuestionMarkCircle,
  HiSun,
  HiMoon,
  HiCreditCard,
  HiCurrencyDollar,
  HiFingerPrint
} from "react-icons/hi";
// import Tooltip from "../Tooltips/Tooptip";

import "../Sidebar/styles.css";

import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "@/Context/UserContext/UserContext";
import { ThemeContext } from "@/Context/ThemeContext/ThemeContext";

const SideBarComponent = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const { authUser, signInWithGoogle, signOut } = useContext(AuthContext);
  const {
    userThemePreference,
    setUserThemeModeDark,
    setUserThemeModeLight,
    setUserThemeModeSystem,
  } = useContext(ThemeContext);
  // const [sideBarWidth, setSideBarWidth] = useState("100px");

  const defaultImageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Icon-round-Question_mark.jpg/1200px-Icon-round-Question_mark.jpg";

  useEffect(() => {
    setSidebarCollapsed(true);
  }, []);

  const toggleShowSideBar = () => {
    setShowSideBar((prevShowSideBar) => !prevShowSideBar);
    setSidebarCollapsed((previsSidebarCollapsed) => !previsSidebarCollapsed);
  };

  const [isSidebarCollapsed, setSidebarCollapsed] = useState(true);

  const iconSize = "30px";

  const SideBarMenu = [
    {
      SBIcon: <HiChartPie style={{ fontSize: iconSize }} />,
      SBMenu: "Dashboard",
      SBRout: "/dashboard",
    },
    {
      SBIcon: <HiUserGroup style={{ fontSize: iconSize }} />,
      SBMenu: "Iglesia",
      SBRout: "/usersview",
      SBSMContent: [
        {
          SBIcon: <HiUserGroup style={{ fontSize: iconSize }} />,
          SBMenu: "Redes",
          SBRout: "/redes",
        },
        {
          SBIcon: <HiUserGroup style={{ fontSize: iconSize }} />,
          SBMenu: "Grupos",
          SBRout: "/teamgroupsn",
        },
      ],
    },
    {
      SBIcon: <HiTicket style={{ fontSize: iconSize }} />,
      SBMenu: "Eventos",
      SBRout: "/events",
    },
    {
      SBIcon: <HiCalendar style={{ fontSize: iconSize }} />,
      SBMenu: "Calendario",
      SBRout: "/calendar",
    },
    {
      SBIcon: <HiAdjustments style={{ fontSize: iconSize }} />,
      SBMenu: "Mantenedor",
      SBRout: "/usersettings",
    },
    {
      SBIcon: <HiCurrencyDollar style={{ fontSize: iconSize }} />,
      SBMenu: "Coffe",
      SBRout: "/coffe",
    },
    {
      SBIcon: <HiQuestionMarkCircle style={{ fontSize: iconSize }} />,
      SBMenu: "Ayuda",
      SBRout: "/",
    },
  ];

  return (
    <>
      {/* <div className="sbar-container"> */}
      <div
        className={
          userThemePreference === "Dark"
            ? "sbar-container Dark"
            : "sbar-container"
        }
      >
        <div
          className={
            userThemePreference === "Dark" && isSidebarCollapsed === true
              ? "collapsed-sidebar side-bar Dark"
              : isSidebarCollapsed === true
              ? "collapsed-sidebar side-bar"
              : "expanded-sidebar side-bar Dark"
          }
        >
          {/* {() => (setShowSideBar(true), setSidebarCollapsed(false))}
          {() => (setShowSideBar(false), setSidebarCollapsed(true))} */}
          <section className="sidebar-logo-section">
            <img
              // src="data:image/png;base64,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"
              src="https://iverchile.cl/wp-content/uploads/2023/09/iver_logo-768x391.png"
              alt=""
            />
          </section>
          <p className="sidebar-content-icon">Menú</p>
          {SideBarMenu.map((item, index) => (
            <div key={index} className="sidebar-content-container">
              <Link href={item.SBRout} className="sidebar-link-content">
                {/* debe estar en 2 columnas */}
                <div className="sidebar-link-main-content">
                  {/* <div className="sidebar-content-icon"> {item.SBIcon}</div> */}
                  <div className="sidebar-content-icon">{item.SBIcon}</div>
                  <div className="sidebar-content-text">{item.SBMenu}</div>
                </div>
              </Link>
            </div>
          ))}
          <section className="sidebar-account-settings">
            <img
              src={authUser ? authUser.photoURL : defaultImageUrl}
              alt="salir"
              onClick={signOut}
            />
            <div className="sidebar-account-settings-drkMode">
              {userThemePreference === "Dark" ? (
                <HiSun
                  style={{ fontSize: iconSize }}
                  onClick={() => setUserThemeModeLight()}
                />
              ) : (
                <HiMoon
                  style={{ fontSize: iconSize }}
                  onClick={() => setUserThemeModeDark()}
                />
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SideBarComponent;
