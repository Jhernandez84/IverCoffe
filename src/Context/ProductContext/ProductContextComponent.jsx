"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "./ProductContext";
import { signInWithPopup } from "firebase/auth";
import { auth, provider, db } from "@/Components/Firebase/firebase";

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Check if there's authentication data in localStorage
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      setAuthUser(JSON.parse(storedUser));
      console.log(authUser)
    }
  }, []);

  const signInWithGoogle = async () => {
    try {
      // Sign in with Google
      const result = await signInWithPopup(auth, provider);
      // Access user data from the authentication result
      const user = result.user;
      // User is now signed in, you can perform further actions
      const userRef = db.collection("DBUsuarios").doc(user.uid);
      const doc = await userRef.get();

      if (!doc.exists) {
        await userRef.set({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          // You can add more user data fields as needed
        });
      }

      // Store authentication data in localStorage
      localStorage.setItem("authUser", JSON.stringify(user));
      setAuthUser(user);
      router.push("/dashboard");
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  const signOut = () => {
    // Clear authentication data from localStorage
    localStorage.removeItem("authUser");
    auth.signOut();
    setAuthUser(null);
    router.push("/");
  };

  return (
    <ProductContext.Provider value={{ authUser, signInWithGoogle, signOut }}>
      {children}
    </ProductContext.Provider>
  );
};
