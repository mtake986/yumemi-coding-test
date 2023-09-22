import { ResasProvider } from "@/contexts/ResasContext";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
    <html lang="jp">
      <ResasProvider>
        <body className={inter.className}>{children}</body>
      </ResasProvider>
    </html>
  );
}
