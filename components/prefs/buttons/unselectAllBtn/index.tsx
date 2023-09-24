import React from "react";
import styles from "./index.module.css";
import { useResas } from "@/contexts/ResasContext";

const UnselectAllBtn = () => {
  const { unselectAllPrefs } = useResas();

  return (
    <div className={styles.container} onClick={unselectAllPrefs}>
      全解除
    </div>
  );
};

export default UnselectAllBtn;
