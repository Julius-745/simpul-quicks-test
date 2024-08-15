import React from "react";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const lato = Lato({ subsets: ["latin"], style: ["normal"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Simpul Quicks",
  description: "A Quicks Chat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={lato.className}>{children}</body>
      </Providers>
    </html>
  );
}
