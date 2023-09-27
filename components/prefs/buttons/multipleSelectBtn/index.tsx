"use client";
import React from "react";
import styles from "./index.module.css";
import { useResas } from "@/contexts/ResasContext";
import { TypePref } from "@/contexts/type";

const MultipleSelectBtn = () => {
  const {
    isPopulationDataLoading,
    populationData,
    toggleMultipleSelectMode,
    isMultipleSelectMode,
    fetchSelectedPrefsPopulationData,
    selectedPrefs,
  } = useResas();
  return (
    <button
      disabled={
        isPopulationDataLoading || populationData.length >= 47 ? true : false
      }
      className={`${styles.container} ${
        isPopulationDataLoading || populationData.length >= 47
          ? styles.disable
          : null
      } ${isMultipleSelectMode ? styles.multipleSelectModeIsOn : null}`}
      onClick={() => {
        if (isMultipleSelectMode) {
          fetchSelectedPrefsPopulationData(selectedPrefs);
        }
        toggleMultipleSelectMode();
      }}
    >
      {isMultipleSelectMode ? "確定" : "複数選択"}
    </button>
  );
};

export default MultipleSelectBtn;
