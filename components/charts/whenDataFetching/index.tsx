import React from "react";
import styles from "./index.module.css";
import { useResas } from "@/contexts/ResasContext";

const WhenPplDataFetching = () => {
  const { populationData, selectedPrefs } = useResas();

  return (
    <div className={styles.fetching}>
      <p data-testid='text'>データを取得しています。</p>
      <p>
        <span className={styles.percent}>
          {Math.ceil((populationData.length / selectedPrefs.length) * 100)}%
        </span>
        完了
      </p>
    </div>
  );
};

export default WhenPplDataFetching;
