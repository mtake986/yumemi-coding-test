"use client";
import styles from "./pref.module.css";
import { useResas } from "@/contexts/ResasContext";
import { TypePref } from "@/contexts/type";

type Props = {
  pref: TypePref;
};
const Pref = ({ pref }: Props) => {
  const {
    fetchPopulationData,
    populationData,
    removePopulationData,
    isPopulationDataLoading,
    isMultipleSelectMode,

    addToSelectedPrefs,
    removeFromSelectedPref,
    selectedPrefs,
  } = useResas();

  return (
    <div className={styles.container}>
      <input
        disabled={isPopulationDataLoading}
        checked={
          selectedPrefs.includes(pref) ||
          populationData
            .map((data) => {
              return Object.keys(data)[0];
            })
            .includes(pref.prefName)
            ? true
            : false
        }
        id={pref.prefName}
        type="checkbox"
        className={styles.input}
        onChange={() => {
          if (selectedPrefs.includes(pref)) {
            removeFromSelectedPref(pref);
          } else {
            addToSelectedPrefs(pref);
          }
          if (isMultipleSelectMode) {
            return;
          }
          const keys = populationData.map((data) => {
            return Object.keys(data)[0];
          });
          if (keys.includes(pref.prefName)) {
            removePopulationData(pref);
          } else {
            fetchPopulationData(pref);
          }
        }}
      />
      <label className={styles.label} htmlFor={pref.prefName}>
        {pref.prefName}
      </label>
    </div>
  );
};

export default Pref;
