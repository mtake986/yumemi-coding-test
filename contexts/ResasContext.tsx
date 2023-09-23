"use client";
import { ReactNode, useContext, createContext, useState } from "react";
import {
  TypePopulations,
  TypePref,
  TypePrefWithRegion,
  TypeTabValue,
} from "./type";
import { useSearchParams } from "react-router-dom";
import { tabValues } from "@/public/constants";
import {headers} from '@/config/config';

type ResasProviderProps = {
  children: ReactNode;
};

type ResasContextType = {
  prefs: TypePref[];
  fetchPrefs: () => void;

  addToSelectedPrefs: (storedPref: TypePref) => void;
  removeFromSelectedPref: (targetPref: TypePref) => void;
  selectedPrefs: TypePref[];

  currentTab: TypeTabValue;
  switchTab: (id: number) => void;

  fetchPopulationData: (pref: TypePref) => void;
  populationData: TypePopulations[];
  removePopulationData: (pref: TypePref) => void;
  isChartLoading: boolean;
};

const ResasContext = createContext({} as ResasContextType);

export function useResas() {
  return useContext(ResasContext);
}

export function ResasProvider({ children }: ResasProviderProps) {
  const [prefs, setPrefs] = useState<TypePref[]>([]);
  const [selectedPrefs, setSelectedPrefs] = useState<TypePref[]>([]);

  const [currentTab, setCurrentTab] = useState<TypeTabValue>(tabValues[0]);
  const [populationData, setPopulationData] = useState<TypePopulations[]>([]);

  const [isChartLoading, setIsChartLoading] = useState<boolean>(false);

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

  const removeFromSelectedPref = (targetPref: TypePref) => {
    setSelectedPrefs((prev) => {
      return prev.filter(
        (selectedPref) => selectedPref.prefName !== targetPref.prefName
      );
    });
  };
  const addToSelectedPrefs = (storedPref: TypePref) => {
    setSelectedPrefs((prev) => {
      return [...prev, storedPref];
    });
  };

  const switchTab = (id: number) => {
    setCurrentTab(tabValues[id]);
  };

  const removePopulationData = (pref: TypePref) => {
    setIsChartLoading(true);
    const keys = populationData.map((data) => {
      return Object.keys(data)[0];
    });
    // もしpopulationDataにすでにデータがあれば、取り除く
    console.log("populationDataにすでにデータがあるから、取り除く");
    setPopulationData(
      populationData.filter(
        (eachPref) => Object.keys(eachPref)[0] !== pref.prefName
      )
    );
    setIsChartLoading(false);
  };

  const fetchPopulationData = (pref: TypePref) => {
    setIsChartLoading(true);
    // populationDataにデータがないから、取得する
    console.log("populationDataにデータがないから、取得する");
    fetch(
      `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?&prefCode=${pref.prefCode}`,
      { headers }
    )
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((res) => {
        setPopulationData((prev) => {
          return [...prev, { [pref.prefName]: res.result.data }];
        });
      })
      .then(() => setIsChartLoading(false));
  };

  // todo: すべての都道府県のデータを取得する
  const selectAllPrefs = () => {
    setIsChartLoading(true);

    const prefCodes = prefs.map((pref) => pref.prefCode);
    fetch(
      `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?&prefCode=${pref.prefCode}`,
      { headers }
    )
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((res) => {
        setPopulationData((prev) => {
          return [...prev, { [pref.prefName]: res.result.data }];
        });
      })
      .then(() => setIsChartLoading(false));
  };

  // todo: すべての都道府県のデータを取り除く
  const unselectAllPrefs = () => {};

  return (
    <ResasContext.Provider
      value={{
        prefs,
        fetchPrefs,
        addToSelectedPrefs,
        removeFromSelectedPref,
        selectedPrefs,

        currentTab,
        switchTab,

        fetchPopulationData,
        populationData,
        removePopulationData,
        isChartLoading,
      }}
    >
      {children}
    </ResasContext.Provider>
  );
}
