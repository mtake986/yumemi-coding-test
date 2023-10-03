// "use client";
import Prefs from "@/app/components/prefs";
import styles from "./page.module.css";
import PopulationChart from "@/app/components/charts";
import Tabs from "@/app/components/tabs";
import Navbar from "@/app/components/navbar";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Navbar />
      <section className={styles.main}>
        <Prefs />
        <Tabs />
        <PopulationChart />
      </section>
    </div>
  );
}
