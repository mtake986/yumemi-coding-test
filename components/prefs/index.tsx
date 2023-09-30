"use client";
import Pref from "./pref";
import styles from "./prefs.module.css";
import { TypePref } from "@/contexts/type";
import { headers } from "@/config/config";
import Buttons from "./buttons";
import useFetch from "@/hooks/useFetch";

const Prefs = () => {
  const { data, isPending, error } = useFetch(
    "https://opendata.resas-portal.go.jp/api/v1/prefectures",
  );

  return (
    <section className={styles.container}>
      {error ? (
        <div className={styles.error}>{error}</div>
      ) : isPending ? (
        <div>都道府県を取得中です</div>
      ) : data ? (
        <>
          <div className={styles.prefs}>
            {data?.map((pref: TypePref, i: number) => {
              return <Pref key={i} pref={pref} />;
            })}
          </div>
          <Buttons prefs={data} />
        </>
      ) : null}
    </section>
  );
};

export default Prefs;
