import React from "react";
import styles from "./pref.module.css";
import { useResas } from "@/contexts/ResasContext";
import { TypePref } from "@/contexts/type";

type Props = {
  pref: TypePref;
};
const Pref = ({ pref }: Props) => {
  const { manageSelectedPrefs } = useResas();
  return (
    <div className={styles.stateContainer}>
      <input
        id={pref.prefName}
        type="checkbox"
        className={styles.input}
        onChange={() => manageSelectedPrefs(pref)}
      />
      <label className={styles.label} htmlFor={pref.prefName}>
        {pref.prefName}
      </label>
    </div>
  );
};

export default Pref;
