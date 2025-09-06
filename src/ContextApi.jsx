// ContextApi.jsx
import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// ✅ Custom hook for using context
export const useGlobalContext = () => {
  return useContext(UserContext);
};
