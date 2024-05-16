"use client";

import { createContext, useContext, useState } from "react";

const appContext = createContext({
  sessionToken: "",
  setsessionToken: (token: string) => {},
});

export const useAppContext = () => {
  const context = useContext(appContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
export default function AppProvider({
  children,
  initialSessionToken = "",
}: {
  children: React.ReactNode;
  initialSessionToken: string;
}) {
  const [sessionToken, setsessionToken] = useState(initialSessionToken);

  return (
    <appContext.Provider value={{ sessionToken, setsessionToken }}>
      {children}
    </appContext.Provider>
  );
}
