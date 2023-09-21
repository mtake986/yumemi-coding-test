'use client'; 
import { ReactNode, useContext, createContext, useState } from "react";

type ResasProviderProps = {
  children: ReactNode;
};

type ResasContextType = {
  japanStates: any;
  fetchJapanStates: () => void;
};

const ResasContext = createContext({} as ResasContextType);

export function useResas() {
  return useContext(ResasContext);
}

export function ResasProvider({ children }: ResasProviderProps) {
  const [japanStates, setJapanStates] = useState([]);

  const apiKey = "C52t390Q8f4qFws9q7vgCyaOUtAlPkGzmtWcogVY";
  const headers = { "X-API-KEY": apiKey };

  const fetchJapanStates = () => {
    // 47都道府県の一覧を取得
    // API Doc: https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html
    fetch("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
      headers,
    })
      .then((response) => response.json())
      .then((res) => {
        setJapanStates(res.result);
      });
  };

  return (
    <ResasContext.Provider
      value={{
        japanStates,
        fetchJapanStates,
      }}
    >
      {children}
    </ResasContext.Provider>
  );
}
