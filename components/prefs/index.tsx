"use client";
import Pref from "./pref";
import styles from "./prefs.module.css";
import { TypePref } from "@/contexts/type";
import Buttons from "./buttons";
import useFetch from "@/hooks/useFetch";

const Prefs = () => {
  const { data, isPending, error } = useFetch(
    "https://opendata.resas-portal.go.jp/api/v1/prefectures",
  );

  return (
    <section data-testid='prefsContainer' className={styles.container}>
      {error ? (
        <div className={styles.error}>{error}</div>
      ) : isPending ? (
        <div>都道府県を取得中です</div>
      ) : data ? (
        <>
          <ul className={styles.prefs}>
            {data?.map((pref: TypePref, i: number) => {
              return <Pref key={i} pref={pref} />;
            })}
          </ul>
          <Buttons prefs={data} />
        </>
      ) : !data ? (
        <div>都道府県が見つかりませんでした</div>
      ) : null}
    </section>
  );
};

export default Prefs;
