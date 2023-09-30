"use client";

import React, { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<any[]>([]);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 47都道府県の一覧を取得
    // API Doc: https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html
    fetch(url, {
      headers: new Headers({
        "X-API-KEY": process.env.NEXT_PUBLIC_RESAS_API_KEY || "",
        "Content-Type": process.env.NEXT_PUBLIC_RESAS_CONTENT_TYPE || "",
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return response.json();
      })
      .then((res) => {
        setData(res.result);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;