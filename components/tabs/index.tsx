"use client";
import { tabValues } from "@/public/constants";
import Tab from "./tab";
import styles from "./tabs.module.css";
import useCurrentTab from "@/hooks/useCurrentTab";
const Tabs = () => {
  const { currentTab, switchTab } = useCurrentTab();

  return (
    <section className={styles.container}>
      {tabValues.map((tabValue) => (
        <Tab
          key={tabValue.id}
          tabValue={tabValue}
          currentTab={currentTab}
          switchTab={switchTab}
        />
      ))}
    </section>
  );
};

export default Tabs;
