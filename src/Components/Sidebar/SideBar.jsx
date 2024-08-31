"use client";
import Link from "next/link";
import * as HiIcons from "react-icons/hi";

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
      SBIcon: <HiIcons.HiHome style={{ fontSize: iconSize }} />,
      SBMenu: "Dashboard",
      SBRout: "/pos",
    },
    {
      SBIcon: <HiIcons.HiBell style={{ fontSize: iconSize }} />,
      SBMenu: "Iglesia",
      SBRout: "/orders",
    },
    {
      SBIcon: <HiIcons.HiBookOpen style={{ fontSize: iconSize }} />,
      SBMenu: "Eventos",
      SBRout: "/menu_manager",
    },
    {
      SBIcon: <HiIcons.HiChartBar style={{ fontSize: iconSize }} />,
      SBMenu: "Calendario",
      SBRout: "/inventory_manager",
    },
    {
      SBIcon: <HiIcons.HiDocumentReport style={{ fontSize: iconSize }} />,
      SBMenu: "Reportes",
      SBRout: "/reports",
    },
    {
      SBIcon: <HiIcons.HiAdjustments style={{ fontSize: iconSize }} />,
      SBMenu: "Mantenedor",
      SBRout: "/settings",
    },
  ];

  return (
    <>
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
              src="https://iverchile.cl/wp-content/uploads/2023/09/iver_logo-768x391.png"
              alt=""
            />
          </section>
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
                <HiIcons.HiSun
                  style={{ fontSize: iconSize }}
                  onClick={() => setUserThemeModeLight()}
                />
              ) : (
                <HiIcons.HiMoon
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