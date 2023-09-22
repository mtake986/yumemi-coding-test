import { useResas } from "@/contexts/ResasContext";
import React from "react";
import Pref from "../pref";
import styles from "./prefs.module.css";

const Prefs = () => {
  const { prefs } = useResas();
  return (
    <section className={styles.container}>
      {prefs?.map((pref, i) => (
        <Pref key={i} pref={pref} />
      ))}
    </section>
  );
};

export default Prefs;
