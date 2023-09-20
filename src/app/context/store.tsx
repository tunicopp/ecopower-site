"use client";

import ApiCity from "@/@types/api/city.api.interface";
import City from "@/@types/app/city.app.interface";
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
  cities: City[];
  currentSlide: number;
  onChangeSlide: (slide: number) => void;
}

const GlobalContext = createContext<ContextProps>({
  cardId: null,
  setCardId: () => {},
  cities: [],
  currentSlide: 1,
  onChangeSlide: () => {},
});

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [cardId, setCardId] = useState<number | null>(4);
  const [cities, setCities] = useState<City[]>([]);
  const [currentSlide, setCurrentSlide] = useState<number>(1);

  const onChangeSlide = (slide: number) => {
    setCurrentSlide(slide);
  };

  async function getCities(): Promise<City[]> {
    const response = await fetch(
      "https://ecopower-dev.fluig.cloudtotvs.com.br/ws_simulador/rest/simulador/cidades",
      {
        method: "GET",
        cache: "force-cache",
      }
    );
    const data = await response.json();

    const cities: City[] = [];
    for (const d of data as ApiCity[]) {
      const city: City = {
        code: d.codigoIBGE,
        name: d.cidade,
        state: d.estado,
      };

      cities.push(city);
    }

    return cities;
  }

  useEffect(() => {
    getCities().then((d) => setCities(d));
  }, []);

  return (
    <GlobalContext.Provider
      value={{ cardId, setCardId, cities, onChangeSlide, currentSlide }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
