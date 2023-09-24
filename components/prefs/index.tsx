import React, { useEffect } from "react";
import Pref from "./pref";
import styles from "./prefs.module.css";
import { TypePref } from "@/contexts/type";
import { headers } from "@/config/config";
import Buttons from "./buttons";
import { useResas } from "@/contexts/ResasContext";
import type { FC } from "react";

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
      <div className={styles.prefs}>
        {prefs?.map((pref: TypePref, i: number) => (
          <Pref key={i} pref={pref} />
        ))}
      </div>
      <Buttons prefs = {prefs} />
    </section>
  );
};

export default Prefs;
