"use client";
import { ReactNode, useContext, createContext, useState } from "react";
import { TypePref, TypePrefWithRegion, TypeTabValue } from "./type";
import { useSearchParams } from "react-router-dom";
import { tabValues } from "@/public/constants";

type ResasProviderProps = {
  children: ReactNode;
};

type ResasContextType = {
  prefs: TypePref[];
  fetchPrefs: () => void;
  manageSelectedPrefs: (pref: TypePref) => void;
  selectedPrefs: TypePref[];

  currentTab: TypeTabValue;
  switchTab: (id: number) => void;

  fetchPopulationComposition: (prefCode: number) => void;
};

const ResasContext = createContext({} as ResasContextType);

export function useResas() {
  return useContext(ResasContext);
}

export function ResasProvider({ children }: ResasProviderProps) {
  const [prefs, setPrefs] = useState<TypePref[]>([]);
  const [selectedPrefs, setSelectedPrefs] = useState<TypePref[]>([]);
  const apiKey = "C52t390Q8f4qFws9q7vgCyaOUtAlPkGzmtWcogVY";
  const headers = {
    "X-API-KEY": apiKey,
    "Content-Type": "application/json;charset=UTF-8",
  };

  const fetchPrefs = () => {
    // 47都道府県の一覧を取得
    // API Doc: https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html
    fetch("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
      headers,
    })
      .then((response) => response.json())
      .then((res) => {
        setPrefs(res.result);
      });
  };
  const manageSelectedPrefs = (storedPref: TypePref) => {
    setSelectedPrefs((prev) => {
      if (prev.includes(storedPref)) {
        return prev.filter((pref) => pref.prefCode !== storedPref.prefCode);
      } else {
        return [...prev, storedPref];
      }
    });
  };

  const [currentTab, setCurrentTab] = useState<TypeTabValue>(tabValues[0]);
  const switchTab = (id: number) => {
    setCurrentTab(tabValues[id]);
  };

  const fetchPopulationComposition = (prefCode: number) => {
    fetch(
      `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?&prefCode=${prefCode}`,
      { headers }
    )
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((res) => console.log(res.result));
  };

  return (
    <ResasContext.Provider
      value={{
        prefs,
        fetchPrefs,
        manageSelectedPrefs,
        selectedPrefs,

        currentTab,
        switchTab,

        fetchPopulationComposition,
      }}
    >
      {children}
    </ResasContext.Provider>
  );
}
