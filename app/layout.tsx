import { ResasProvider } from "@/contexts/ResasContext";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import { ReactQueryProvider } from "./ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "都道府県別の総人口推移グラフ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <ResasProvider>
        <html lang="jp">
          <body className={inter.className} suppressHydrationWarning={true}>
            {children}
          </body>
        </html>
      </ResasProvider>
    </ReactQueryProvider>
  );
}
