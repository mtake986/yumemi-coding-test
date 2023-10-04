"use client";
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
    isMultipleSelectMode,

    addToSelectedPrefs,
    removeFromSelectedPref,
    selectedPrefs,
  } = useResas();

  return (
    <li className={styles.container}>
      <input
        disabled={isPopulationDataLoading}
        checked={selectedPrefs.includes(pref)}
        id={pref.prefName}
        type="checkbox"
        className={styles.input}
        onChange={() => {
          if (selectedPrefs.includes(pref)) {
            removeFromSelectedPref(pref);
          } else {
            addToSelectedPrefs(pref);
          }

          // 複数選択中であろうとなかろうと、データを削除する
          const keys = populationData.map((data) => {
            return Object.keys(data)[0];
          });
          if (keys.includes(pref.prefName)) {
            removePopulationData(pref);
          }
          // 複数選択中でなければ、逐一追加
          if (!isMultipleSelectMode) {
            if (!keys.includes(pref.prefName)) {
              fetchPopulationData(pref);
            }
          }
          // 複数選択中であれば、逐一追加せず、最後にまとめて追加する（SubmitBtnをクリック時）
          else {
            return;
          }
        }}
      />
      <label className={styles.label} htmlFor={pref.prefName}>
        {pref.prefName}
      </label>
    </li>
  );
};

export default Pref;
