"use client";

import React, { useContext } from "react";
import { AuthProvider } from "@/Context/UserContext/UserContextComponent";
import { AuthContext } from "@/Context/UserContext/UserContext";

import { Inter } from "next/font/google";
import SideBarComponent from "@/Components/Sidebar/SideBar";

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({ children }) {
  // const { authUser, signInWithGoogle, signOut } = useContext(AuthContext);

  return (
    <AuthProvider>
      <div className="main-container">
        <SideBarComponent />
        {children}
      </div>
    </AuthProvider>
  );
}