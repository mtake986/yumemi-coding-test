import React from "react";
import styles from "./pref.module.css";
import { useResas } from "@/contexts/ResasContext";
import { TypePref } from "@/contexts/type";

type Props = {
  pref: TypePref;
};
const Pref = ({ pref }: Props) => {
  const {
    addToSelectedPrefs,
    removeFromSelectedPref,
    fetchPopulationData,
    populationData,
    removePopulationData,
  } = useResas();
  return (
    <div className={styles.stateContainer}>
      <input
        id={pref.prefName}
        type="checkbox"
        className={styles.input}
        onChange={() => {
          const keys = populationData.map((data) => {
            return Object.keys(data)[0];
          });
          if (keys.includes(pref.prefName)) {
            removeFromSelectedPref(pref)
            removePopulationData(pref);
          } else {
            addToSelectedPrefs(pref);
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
