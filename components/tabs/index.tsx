"use client";
import { tabValues } from "@/public/constants";
import Tab from "./tab";
import styles from "./tabs.module.css";
import { useResas } from "@/contexts/ResasContext";
const Tabs = () => {
  const { currentTab, switchTab } = useResas();

  return (
    <section className={styles.container}>
      {tabValues.map((tabValue) => (
        <Tab key={tabValue.id} tabValue={tabValue} />
      ))}
    </section>
  );
};

export default Tabs;
