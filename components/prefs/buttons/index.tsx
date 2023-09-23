import React from "react";
import SelectAllBtn from "./selectAllBtn";
import UnselectAllBtn from "./unselectAllBtn";
import styles from "./buttons.module.css";
const Buttons = () => {
  return (
    <div className={styles.container}>
      <SelectAllBtn />
      <UnselectAllBtn />
    </div>
  );
};

export default Buttons;
