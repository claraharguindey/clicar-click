"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface ContextProps {
  clicksCount: number;
  gridDisplayed: boolean;
  setClicksCount: (clicksCount: number) => void;
  setGridDisplayed: (gridDisplayed: boolean) => void;
}

const GlobalContext = createContext<ContextProps>({
  clicksCount: 0,
  gridDisplayed: false,
  setClicksCount: (clicksCount: number) => {},
  setGridDisplayed: (gridDisplayed: boolean) => {},
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [clicksCount, setClicksCount] = useState(0);
  const [gridDisplayed, setGridDisplayed] = useState(false);
  
  return (
    <GlobalContext.Provider
      value={{ clicksCount, setClicksCount, gridDisplayed, setGridDisplayed }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
