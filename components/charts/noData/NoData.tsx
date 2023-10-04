import React from "react";
import styles from "./index.module.css";

const NoData = () => {
  return (
    <div data-testid="noDataText" className={styles.beforeFetching}>
      都道府県を選択してください。
    </div>
  );
};

export default NoData;
