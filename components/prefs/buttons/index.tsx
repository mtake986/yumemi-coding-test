import React from "react";
import SelectAllBtn from "./selectAllBtn";
import UnselectAllBtn from "./unselectAllBtn";
import styles from "./buttons.module.css";
import { TypePref } from "@/contexts/type";
import MultipleSelectBtn from "./multipleSelectBtn";
type Props = {
  prefs: TypePref[];
};
const Buttons = ({prefs}: Props) => {
  return (
    <div className={styles.container}>
      <MultipleSelectBtn />
      <SelectAllBtn prefs = {prefs} />
      <UnselectAllBtn />
    </div>
  );
};

export default Buttons;
