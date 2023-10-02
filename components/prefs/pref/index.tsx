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

          // 複数選択中であろうとなかろうと、削除する
          const keys = populationData.map((data) => {
            return Object.keys(data)[0];
          });
          if (keys.includes(pref.prefName)) {
            removePopulationData(pref);
          }
          // 複数選択中でなければ、逐一追加
          // 複数選択中であれば、逐一追加せず、最後にまとめて追加する（multipleSelectBtnで追加）
          if (!isMultipleSelectMode) {
            const keys = populationData.map((data) => {
              return Object.keys(data)[0];
            });
            fetchPopulationData(pref);
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
