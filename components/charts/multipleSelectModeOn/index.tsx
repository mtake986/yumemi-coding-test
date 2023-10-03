import React from "react";
import styles from "./index.module.css";

const MultipleSelectModeOn = () => {
  return (
    <div data-testid='textWhenMultipleSelectModeOn' className={styles.textWhenMultipleSelectMode}>
      複数選択中です。確定ボタンをクリックすると、データを取得し、グラフが表示されます。
    </div>
  );
};

export default MultipleSelectModeOn;
