// "use client";
import Prefs from "@/components/prefs";
import styles from "./page.module.css";
import PopulationChart from "@/components/charts";
import Tabs from "@/components/tabs";
import Header from "@/components/header";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Header />
      <section className={styles.main}>
        <Prefs />
        <Tabs />
        <PopulationChart />
      </section>
    </div>
  );
}
