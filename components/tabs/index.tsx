import React from "react";

import { tabValues } from "@/public/constants";
import Tab from "./tab";
import styles from './tabs.module.css'
const Tabs = () => {

  return (
    <section className={styles.container}>
      {tabValues.map((tabValue) => (
        <Tab key={tabValue.id} tabValue={tabValue} />
      ))}
    </section>
  );
};

export default Tabs;
