'use client';

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';

interface ContextProps {
  clicksCount: number;
  setClicksCount: (clicksCount: number) => void;
}

const GlobalContext = createContext<ContextProps>({
  clicksCount: 0,
  setClicksCount: (clicksCount: number) => {},
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [clicksCount, setClicksCount] = useState(0);
  return (
    <GlobalContext.Provider value={{ clicksCount, setClicksCount }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
