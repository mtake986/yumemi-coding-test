"use client";
import { TypeTabValue } from "@/contexts/type";
import React from "react";
import styles from "./tab.module.css";
import useFetch from "@/hooks/useFetch";
import useCurrentTab from "@/hooks/useCurrentTab";

type Props = {
  tabValue: TypeTabValue;
  currentTab: TypeTabValue;
  switchTab: (id: number) => void;
};

const Tab = ({ tabValue, currentTab, switchTab }: Props) => {
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
