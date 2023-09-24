import React from "react";
import styles from './index.module.css';
import { useResas } from "@/contexts/ResasContext";
import { TypePref } from "@/contexts/type";

type Props = {
  prefs: TypePref[];
};

const SelectAllBtn = ({prefs}: Props) => {
  const { selectAllPrefs, isPopulationDataLoading, selectedPrefs } = useResas();
  return (
    <button
      disabled={
        isPopulationDataLoading || selectedPrefs.length >= 47 ? true : false
      }
      className={`${styles.container} ${
        isPopulationDataLoading || selectedPrefs.length === 47
          ? styles.disable
          : null
      }`}
      onClick={() => selectAllPrefs(prefs)}
    >
      全選択
    </button>
  );
};

export default SelectAllBtn;
