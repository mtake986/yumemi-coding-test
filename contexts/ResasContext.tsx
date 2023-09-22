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
};

const ResasContext = createContext({} as ResasContextType);

export function useResas() {
  return useContext(ResasContext);
}

export function ResasProvider({ children }: ResasProviderProps) {
  const [prefs, setPrefs] = useState<TypePref[]>([]);
  const [selectedPrefs, setSelectedPrefs] = useState<TypePref[]>([]);
  const apiKey = "C52t390Q8f4qFws9q7vgCyaOUtAlPkGzmtWcogVY";
  const headers = { "X-API-KEY": apiKey };

  const fetchPrefs = () => {
    // 47都道府県の一覧を取得
    // API Doc: https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html
    fetch("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
      headers,
    })
      .then((response) => response.json())
      .then((res) => {
        setPrefs(res.result)
      });
  };
  const manageSelectedPrefs = (storedPref: TypePref) => {
    setSelectedPrefs(prev => {
      if (prev.includes(storedPref)) {
        return prev.filter((pref) => pref.prefCode !== storedPref.prefCode);
      } else {
        return [...prev, storedPref];
      }
    });
  }

  const [currentTab, setCurrentTab] = useState<TypeTabValue>(tabValues[0]);
  const switchTab = (id: number) => {
    setCurrentTab(tabValues[id]);
  }


  return (
    <ResasContext.Provider
      value={{
        prefs,
        fetchPrefs,
        manageSelectedPrefs,
        selectedPrefs,

        currentTab,
        switchTab,
      }}
    >
      {children}
    </ResasContext.Provider>
  );
}
