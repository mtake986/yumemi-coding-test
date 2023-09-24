import React from "react";
import styles from "./index.module.css";
import { useResas } from "@/contexts/ResasContext";

const UnselectAllBtn = () => {
  const { unselectAllPrefs, isPopulationDataLoading, selectedPrefs } =
    useResas();

  return (
    <button
      disabled={
        isPopulationDataLoading || selectedPrefs.length === 0 ? true : false
      }
      className={`${styles.container} ${
        isPopulationDataLoading || selectedPrefs.length === 0
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
