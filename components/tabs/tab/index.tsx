"use client";
import { TypeTabValue } from "@/contexts/type";
import React from "react";
import styles from "./tab.module.css";
import { useResas } from "@/contexts/ResasContext";

type Props = {
  tabValue: TypeTabValue;
};

const Tab = ({ tabValue }: Props) => {
  const { currentTab, switchTab } = useResas();
  return (
    <button
      data-testid="tab"
      disabled={currentTab.id === tabValue.id ? true : false}
      className={`${styles.container} ${
        currentTab.id === tabValue.id ? styles.selected : null
      }`}
      onClick={() => switchTab(tabValue.id)}
    >
      {tabValue.jp}
    </button>
  );
};

export default Tab;
