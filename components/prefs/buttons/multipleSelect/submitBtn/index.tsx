"use client";
import React from "react";
import { useResas } from "@/contexts/ResasContext";
import styles from "./index.module.css";

const SubmitBtn = () => {
  const {
    fetchSelectedPrefsPopulationData,
    selectedPrefs,
    toggleMultipleSelectMode,
  } = useResas();

  return (
    <button
      onClick={() => {
        fetchSelectedPrefsPopulationData(selectedPrefs);
        toggleMultipleSelectMode();
      }}
      className={`${styles.container} ${styles.multipleSelectModeIsOn}`}
    >
      確定
    </button>
  );
};

export default SubmitBtn;
