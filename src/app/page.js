"use client";

import Image from "next/image";
import styles from "./page.module.css";

import React, { useContext, useState } from "react";
import { AuthProvider } from "@/Context/UserContext/UserContext";
import { AuthContext } from "@/Context/UserContext/UserContext";
import { ThemeContext } from "@/Context/ThemeContext/ThemeContext";
import SideBarComponent from "@/Components/Sidebar/SideBar";

import LogInPage from "./home/page";

export default function Home() {
  const { authUser, signInWithGoogle, signOut } = useContext(AuthContext);
  const {
    userThemePreference,
    setUserThemeModeDark,
    setUserThemeModeLight,
    setUserThemeModeSystem,
  } = useContext(ThemeContext);

  const [isSidebarCollapsed, setSidebarCollapsed] = useState(true);

  return (
    <div>
      <body>
        <LogInPage
          authUser={authUser}
          signInWithGoogle={signInWithGoogle}
          signOut={signOut}
        />
      </body>
    </div>
  );
}
