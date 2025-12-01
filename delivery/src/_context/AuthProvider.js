"use client";

import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = process.env.NEXT_PUBLIC_BACKEND_URL;

  const getUserById = async (localToken) => {
    try {
      const rawData = await fetch(`${url}/users/me`, {
        method: "GET",
        headers: {
          authorization: localToken,
        },
      });
      const data = await rawData.json();
      console.log(data, "data bnuu");
      setUser(data.user);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localToken = localStorage.getItem("token");

      if (localToken) {
        getUserById(localToken);
        return setToken(localToken);
      }
      return setToken("no token");
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
