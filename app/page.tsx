"use client";
import Prefs from "@/components/prefs";
import { ResasProvider, useResas } from "@/contexts/ResasContext";
import styles from "./page.module.css";
import PopulationComposition from "@/components/charts/population";
import Tabs from "@/components/tabs";
import Header from "@/components/header";
import { useQuery } from "@tanstack/react-query";
import { TypePref } from "@/contexts/type";

export default function HomePage() {
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
