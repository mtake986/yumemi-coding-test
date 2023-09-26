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
import { headers } from "@/config/config";

type ResasProviderProps = {
  children: ReactNode;
};

type ResasContextType = {
  prefs: TypePref[];
  fetchPrefs: () => void;
  // addToSelectedPrefs: (storedPref: TypePref) => void;
  // removeFromSelectedPref: (targetPref: TypePref) => void;
  // selectedPrefs: TypePref[];

  currentTab: TypeTabValue;
  switchTab: (id: number) => void;

  fetchPopulationData: (pref: TypePref) => void;
  populationData: TypePopulations[];
  removePopulationData: (pref: TypePref) => void;
  isPopulationDataLoading: boolean;

  selectAllPrefs: (prefs: TypePref[]) => void;
  unselectAllPrefs: () => void;

  setPrefs: (prefs: TypePref[]) => void;
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

  const [isPopulationDataLoading, setIsPopulationDataLoading] =
    useState<boolean>(false);

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

  // const removeFromSelectedPref = (targetPref: TypePref) => {
  //   setSelectedPrefs((prev) => {
  //     return prev.filter(
  //       (selectedPref) => selectedPref.prefName !== targetPref.prefName
  //     );
  //   });
  // };
  // const addToSelectedPrefs = (storedPref: TypePref) => {
  //   setSelectedPrefs((prev) => {
  //     return [...prev, storedPref];
  //   });
  // };

  const switchTab = (id: number) => {
    setCurrentTab(tabValues[id]);
  };

  const removePopulationData = (pref: TypePref) => {
    setIsPopulationDataLoading(true);
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
    setIsPopulationDataLoading(false);
  };

  const fetchPopulationData = (pref: TypePref) => {
    setIsPopulationDataLoading(true);
    // populationDataにデータがないから、取得する
    console.log("populationDataにデータがないから、取得する");
    fetch(
      `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?&prefCode=${pref.prefCode}`,
      { headers }
    )
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setPopulationData((prev) => {
          return [...prev, { [pref.prefName]: res.result.data }];
        });
      })
      .then(() => {
        // console.log(Object.values(populationData[0])[0][0].data[0]);
        setIsPopulationDataLoading(false);
      });
  };

  // todo: すべての都道府県のデータを取得する
  const selectAllPrefs = (prefs: TypePref[]) => {
    setIsPopulationDataLoading(true);

    // setSelectedPrefs([]);
    // setPopulationData([]);

    for (let i = 0; i < prefs.length; i++) {
      const pref = prefs[i];
      const keys = Object.keys(populationData);

      if (
        populationData.some(
          (eachPref) => Object.keys(eachPref)[0] === pref.prefName
        )
      ) {
        i === prefs.length - 1 ? setIsPopulationDataLoading(false) : null;
      } else {
        console.log(pref);
        fetch(
          `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?&prefCode=${pref.prefCode}`,
          { headers }
        )
          .then((response) => {
            return response.json();
          })
          .then((res) => {
            setPopulationData((prev) => {
              if (prev.includes({ [pref.prefName]: res.result.data })) {
                return prev;
              } else {
                return [...prev, { [pref.prefName]: res.result.data }];
              }
            });
          })
          .then(() => {
            i === prefs.length - 1 ? setIsPopulationDataLoading(false) : null;
          });
      }
    }
  };

  // todo: すべての都道府県のデータを取り除く
  const unselectAllPrefs = () => {
    // console.log(selectedPrefs.length, populationData.length);
    setIsPopulationDataLoading(true);
    // setSelectedPrefs([]);
    setPopulationData([]);
    setIsPopulationDataLoading(false);
  };

  return (
    <ResasContext.Provider
      value={{
        prefs,
        fetchPrefs,
        // addToSelectedPrefs,
        // removeFromSelectedPref,
        // selectedPrefs,

        currentTab,
        switchTab,

        fetchPopulationData,
        populationData,
        removePopulationData,
        isPopulationDataLoading,

        selectAllPrefs,
        unselectAllPrefs,
        setPrefs,
      }}
    >
      {children}
    </ResasContext.Provider>
  );
}
