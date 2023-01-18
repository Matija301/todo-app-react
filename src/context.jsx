import React, { createContext, useContext } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  return <AppContext.Provider value="mjau">{children}</AppContext.Provider>;
}

export function useGlobalContext() {
  return useContext(AppContext);
}

export { AppContext, AppProvider };
