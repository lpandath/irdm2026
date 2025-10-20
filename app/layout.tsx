import "./globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InvenioRDM Workshop 2026 | Graz, Austria",
  description:
    " InvenioRDM 2026 Partner Meeting and Workshop, February 23-27, 2026 at TU Graz, Austria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
