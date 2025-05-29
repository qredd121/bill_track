import type { Metadata } from "next";
import "./globals.css";

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
      <body className="bg-accent">{children}</body>
    </html>
  );
}
