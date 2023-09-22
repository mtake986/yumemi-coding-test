"use client";
import Prefs from "@/components/prefs";
import { ResasProvider, useResas } from "@/contexts/ResasContext";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import PopulationComposition from "@/components/charts/population";
import Tabs from "@/components/tabs";
import Header from "@/components/header";

export default function HomePage() {
  const { fetchPrefs, selectedPrefs } = useResas();
  useEffect(() => {
    fetchPrefs();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <section className={styles.main}>
        <Prefs />
        <Tabs />
        <PopulationComposition />
      </section>
    </div>
  );
}
