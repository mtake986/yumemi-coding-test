import React from "react";
import SelectAllBtn from "./selectAllBtn";
import UnselectAllBtn from "./unselectAllBtn";
import styles from "./buttons.module.css";
import { TypePref } from "@/contexts/type";
import { useResas } from "@/contexts/ResasContext";
import SubmitBtn from "./multipleSelect/submitBtn";
import MultipleSelectOnBtn from "./multipleSelect/MultipleSelectOnBtn";

type Props = {
  prefs: TypePref[];
};
const Buttons = ({ prefs }: Props) => {
  const {
    isMultipleSelectMode,
  } = useResas();

  return (
    <div className={styles.container}>
      {isMultipleSelectMode ? <SubmitBtn /> : <MultipleSelectOnBtn />}
      <SelectAllBtn prefs={prefs} />
      <UnselectAllBtn />
    </div>
  );
};

export default Buttons;
