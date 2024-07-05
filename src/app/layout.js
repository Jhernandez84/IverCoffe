"use client";

import React, { useContext } from "react";
import { AuthProvider } from "@/Context/UserContext/UserContextComponent";
import { AuthContext } from "@/Context/UserContext/UserContext";
import { ThemeProvider } from "@/Context/ThemeContext/ThemeContextComponent";
import { ProductProvider } from "@/Context/ProductContext/ProductContextComponent";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBarComponent from "@/Components/Sidebar/SideBar";
import "../Components/Sidebar/styles.css";

const inter = Inter({ subsets: ["latin"] });

function InnerLayout({ children }) {
  const { authUser } = useContext(AuthContext);

  return (
    <div className="main-container">
      {authUser && authUser.emailVerified && <SideBarComponent />}
      {children}
    </div>
  );
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeProvider>
          <ProductProvider>
            <AuthProvider>
              <InnerLayout>{children}</InnerLayout>
            </AuthProvider>
          </ProductProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
