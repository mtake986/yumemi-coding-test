"use client";
import React, { useEffect } from "react";
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
  } = useResas();

  return (
    <div className={styles.stateContainer}>
      <input
        disabled={isPopulationDataLoading}
        checked={
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
          const keys = populationData.map((data) => {
            return Object.keys(data)[0];
          });
          console.log(`keys: `, keys);
          console.log(
            populationData.map((data) => {
              return Object.keys(data)[0];
            })
            // 'pref: ', pref, "\npopulationData : ", populationData
          );
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
