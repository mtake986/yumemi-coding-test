"use client";
import { ReactNode, useContext, createContext, useState } from "react";
import { TypePopulations, TypePref, TypeTabValue } from "./type";

import { tabValues } from "@/public/constants";

type ResasProviderProps = {
  children: ReactNode;
};

type ResasContextType = {

  currentTab: TypeTabValue;
  switchTab: (id: number) => void;

  fetchPopulationData: (pref: TypePref) => void;
  populationData: TypePopulations[];
  removePopulationData: (pref: TypePref) => void;
  isPopulationDataLoading: boolean;

  fetchAllPrefsPopulationData: (prefs: TypePref[]) => void;
  removeAllPrefsPopulationData: () => void;

  toggleMultipleSelectMode: () => void;
  isMultipleSelectMode: boolean;

  addToSelectedPrefs: (targetPref: TypePref) => void;
  removeFromSelectedPref: (targetPref: TypePref) => void;
  selectedPrefs: TypePref[];
  fetchSelectedPrefsPopulationData: (selectedPrefs: TypePref[]) => void;
};

const ResasContext = createContext({} as ResasContextType);

export function useResas() {
  return useContext(ResasContext);
}

export function ResasProvider({ children }: ResasProviderProps) {
  const [selectedPrefs, setSelectedPrefs] = useState<TypePref[]>([]);

  const [currentTab, setCurrentTab] = useState<TypeTabValue>(tabValues[0]);
  const [populationData, setPopulationData] = useState<TypePopulations[]>([]);

  const [isPopulationDataLoading, setIsPopulationDataLoading] =
    useState<boolean>(false);
  const [isMultipleSelectMode, setIsMultipleSelectMode] =
    useState<boolean>(false);

  const switchTab = (id: number) => {
    setCurrentTab(tabValues[id]);
  };

  const removePopulationData = (pref: TypePref) => {
    // もしpopulationDataにすでにデータがあれば、取り除く
    setPopulationData((prev) => {
      return prev.filter(
        (eachPref) => Object.keys(eachPref)[0] !== pref.prefName,
      );
    });
  };

  // チェックボックスが押されたとき、1つの都道府県のデータを取得する
  const fetchPopulationData = (pref: TypePref) => {
    setIsPopulationDataLoading(true);
    // populationDataにデータがないから、取得する
    fetch(
      `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?&prefCode=${pref.prefCode}`,
      {
        headers: new Headers({
          "X-API-KEY": process.env.NEXT_PUBLIC_RESAS_API_KEY || "",
          "Content-Type": process.env.NEXT_PUBLIC_RESAS_CONTENT_TYPE || "",
        }),
      },
    )
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setPopulationData((prev) => {
          return [
            ...prev,
            {
              [pref.prefName]: res.result.data,
            },
          ];
        });
      })
      .then(() => {
        setTimeout(() => {
          setIsPopulationDataLoading(false);
        }, 500);
      });
  };

  // 全選択ボタンが押されたとき、すべての都道府県のデータを取得する
  const fetchAllPrefsPopulationData = (prefs: TypePref[]) => {
    setIsPopulationDataLoading(true);

    // すでに人口データがある都道府県のときに、for文に入れないようにしたい。
    // だが、loadingをfalseにするのは、for文の中で最後のデータを取得したときにしたい。
    // この両立が現時点ではできないため、全都道府県をFetchしてしまっている。
    for (let i = 0; i < prefs.length; i++) {
      const pref = prefs[i];
      if (!selectedPrefs.includes(pref)) {
        addToSelectedPrefs(pref);
      }
      fetch(
        `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?&prefCode=${pref.prefCode}`,
        {
          headers: new Headers({
            "X-API-KEY": process.env.NEXT_PUBLIC_RESAS_API_KEY || "",
            "Content-Type": process.env.NEXT_PUBLIC_RESAS_CONTENT_TYPE || "",
          }),
        },
      )
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          setPopulationData((prev) => {
            if (
              prev.some(
                (eachPrefData) =>
                  Object.keys(eachPrefData)[0] === pref.prefName,
              )
            ) {
              return prev;
            } else {
              return [
                ...prev,
                {
                  [pref.prefName]: res.result.data,
                },
              ];
            }
          });
        })
        .then(() => {
          setTimeout(() => {
            i === prefs.length - 1 ? setIsPopulationDataLoading(false) : null;
          }, 500);
        });
    }
  };

  // すべての都道府県のデータを取り除く
  const removeAllPrefsPopulationData = () => {
    setIsPopulationDataLoading(true);
    setSelectedPrefs([]);
    setPopulationData([]);
    setIsPopulationDataLoading(false);
  };

  const toggleMultipleSelectMode = () => {
    setIsMultipleSelectMode((prev) => !prev);
  };

  const addToSelectedPrefs = (targetPref: TypePref) => {
    setSelectedPrefs((prev) => {
      return [...prev, targetPref];
    });
  };

  const removeFromSelectedPref = (targetPref: TypePref) => {
    setSelectedPrefs((prev) => {
      return prev.filter(
        (selectedPref) => selectedPref.prefName !== targetPref.prefName,
      );
    });
  };

  const fetchSelectedPrefsPopulationData = (selectedPrefs: TypePref[]) => {
    if (selectedPrefs.length > 0) {
      setIsPopulationDataLoading(true);
      for (let i = 0; i < selectedPrefs.length; i++) {
        const pref = selectedPrefs[i];

        fetch(
          `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?&prefCode=${pref.prefCode}`,
          {
            headers: new Headers({
              "X-API-KEY": process.env.NEXT_PUBLIC_RESAS_API_KEY || "",
              "Content-Type": process.env.NEXT_PUBLIC_RESAS_CONTENT_TYPE || "",
            }),
          },
        )
          .then((response) => {
            return response.json();
          })
          .then((res) => {
            setPopulationData((prev) => {
              if (
                prev.some(
                  (eachPrefData) =>
                    Object.keys(eachPrefData)[0] === pref.prefName,
                )
              ) {
                return prev;
              } else {
                return [
                  ...prev,
                  {
                    [pref.prefName]: res.result.data,
                  },
                ];
              }
            });
          })
          .then(() => {
            setTimeout(() => {
              i === selectedPrefs.length - 1
                ? setIsPopulationDataLoading(false)
                : null;
            }, 500);
          });
      }
    }
  };

  return (
    <ResasContext.Provider
      value={{

        currentTab,
        switchTab,

        fetchPopulationData,
        populationData,
        removePopulationData,
        isPopulationDataLoading,

        fetchAllPrefsPopulationData,
        removeAllPrefsPopulationData,

        toggleMultipleSelectMode,
        isMultipleSelectMode,

        addToSelectedPrefs,
        removeFromSelectedPref,
        selectedPrefs,
        fetchSelectedPrefsPopulationData,
      }}
    >
      {children}
    </ResasContext.Provider>
  );
}
