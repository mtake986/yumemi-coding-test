import { useResas } from "@/contexts/ResasContext";
import React from "react";
import Pref from "../pref";
import styles from "./prefs.module.css";
import { useQuery } from "@tanstack/react-query";
import { TypePref } from "@/contexts/type";
import { headers } from '@/config/config';

const Prefs = () => {
  const { data, isLoading } = useQuery<TypePref[]>({
    queryKey: ["prefectures"],
    queryFn: () =>
      fetch("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
        headers,
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          return res.result;
        }),
  });

  if (isLoading || !data) return <div>loading...</div>;
  return (
    <section className={styles.container}>
      {data?.map((pref, i) => (
        <Pref key={i} pref={pref} />
      ))}
    </section>
  );
};

export default Prefs;
