"use client";
import React from "react";
import styles from "./index.module.css";
import { useResas } from "@/contexts/ResasContext";

const MultipleSelectOnBtn = () => {
  const {
    isPopulationDataLoading,
    populationData,
    toggleMultipleSelectMode,
    isMultipleSelectMode,
  } = useResas();

  return (
    <button
      disabled={
        isPopulationDataLoading ? true : false
      }
      className={`${styles.container} ${
        isPopulationDataLoading ? styles.disable : null
      }`}
      onClick={() => {
        toggleMultipleSelectMode();
      }}
    >
      複数選択
    </button>
  );
};

export default MultipleSelectOnBtn;
