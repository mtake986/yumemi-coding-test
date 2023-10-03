"use client";
import React from "react";
import styles from "./index.module.css";
import { useResas } from "@/contexts/ResasContext";
import { TypePref } from "@/contexts/type";

type Props = {
  prefs: TypePref[];
};

const SelectAllBtn = ({ prefs }: Props) => {
  const {
    fetchAllPrefsPopulationData,
    isPopulationDataLoading,
    populationData,
    isMultipleSelectMode,
  } = useResas();
  return (
    <button
      disabled={
        isPopulationDataLoading ||
        populationData.length >= 47 ||
        isMultipleSelectMode
          ? true
          : false
      }
      className={`${styles.container} ${
        isPopulationDataLoading ||
        populationData.length === 47 ||
        isMultipleSelectMode
          ? styles.disable
          : null
      }`}
      onClick={() => fetchAllPrefsPopulationData(prefs)}
    >
      全選択
    </button>
  );
};

export default SelectAllBtn;
