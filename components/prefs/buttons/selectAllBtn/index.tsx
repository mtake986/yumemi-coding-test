import React from "react";
import styles from './index.module.css';
import { useResas } from "@/contexts/ResasContext";
import { TypePref } from "@/contexts/type";

type Props = {
  prefs: TypePref[];
};

const SelectAllBtn = ({prefs}: Props) => {
  const { selectAllPrefs } = useResas();
  return (
    <div className={styles.container} onClick={() => selectAllPrefs(prefs)}>
      全選択
    </div>
  );
};

export default SelectAllBtn;
