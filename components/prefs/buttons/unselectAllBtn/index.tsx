"use client";
import React from "react";
import styles from "./index.module.css";
import { useResas } from "@/contexts/ResasContext";

const UnselectAllBtn = () => {
  const { unselectAllPrefs, isPopulationDataLoading, populationData } =
    useResas();

  return (
    <button
      disabled={
        isPopulationDataLoading || populationData.length === 0 ? true : false
      }
      className={`${styles.container} ${
        isPopulationDataLoading || populationData.length === 0
          ? styles.disable
          : null
      }`}
      onClick={unselectAllPrefs}
    >
      全解除
    </button>
  );
};

export default UnselectAllBtn;
