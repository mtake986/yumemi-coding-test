"use client";
import { tabValues } from "@/public/constants";
import { useCallback, useEffect, useState } from "react";
import { TypeTabValue } from "../contexts/type";
const useCurrentTab = () => {
  const [currentTab, setCurrentTab] = useState<TypeTabValue>(tabValues[0]);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState(null);

  const switchTab = (id: number) => {
    setCurrentTab(tabValues[id]);
    setIsPending(true);
    setError(null);
  };

  return { currentTab, isPending, error, switchTab };
};
export default useCurrentTab;
