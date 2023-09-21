"use client";
import States from "@/components/States";
import { ResasProvider, useResas } from "@/contexts/ResasContext";
import { useState, useEffect } from "react";

export default function HomePage() {
  const {fetchJapanStates, japanStates} = useResas();
  useEffect(() => {
    fetchJapanStates();
    
  }, [japanStates]);

  return (
      <div>
        <h1>Japan States</h1>
        <States />
      </div>
  );
}
