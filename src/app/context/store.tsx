"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface ContextProps {
  cardId: number | null;
  setCardId: Dispatch<SetStateAction<number | null>>;
}

const GlobalContext = createContext<ContextProps>({
  cardId: null,
  setCardId: () => {},
});

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [cardId, setCardId] = useState<number | null>(4);

  return (
    <GlobalContext.Provider value={{ cardId, setCardId }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
