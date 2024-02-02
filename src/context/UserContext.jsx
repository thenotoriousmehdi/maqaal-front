import React, { createContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("maqaalToken"));

  useEffect(() => {
    const fetchUser = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };

      const response = await fetch(
        "http://127.0.0.1:8000/users/me",
        requestOptions
      );

      if (!response.ok) {
        setToken(null);
      }
      localStorage.setItem("maqaalToken", token);
    };
    fetchUser();
  }, [token]);

  return (
    <UserContext.Provider value={[token, setToken]}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext; // Export UserContext as the default export
