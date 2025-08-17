import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import WsProvider from "@/components/WsProvider";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "BillTrack",
  description: "Bill Tracking App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-accent">
        <WsProvider>
          <Navbar />
          {children}
        </WsProvider>
      </body>
    </html>
  );
}
