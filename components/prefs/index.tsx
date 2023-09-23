
import React from "react";
import Pref from "../pref";
import styles from "./prefs.module.css";
import { TypePref } from "@/contexts/type";
import { headers } from "@/config/config";


const getPrefs = async () => {
  const res = await fetch(
    "https://opendata.resas-portal.go.jp/api/v1/prefectures",
    {
      headers,
    }
  );
  const data = await res.json();
  return data.result;
};

const Prefs = async () => {
  const prefs = await getPrefs();
  return (
    <section className={styles.container}>
      {prefs?.map((pref: TypePref, i: number) => (
        <Pref key={i} pref={pref} />
      ))}
    </section>
  );
};


export default Prefs;
