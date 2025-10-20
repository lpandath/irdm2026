import "./globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });
const base = process.env.NODE_ENV === "production" ? "/irdm2026" : "";

export const metadata: Metadata = {
  title: "InvenioRDM Workshop 2026 | Graz, Austria",
  description:
    "InvenioRDM 2026 Partner Meeting and Workshop, February 23-27, 2026 at TU Graz, Austria",
  icons: {
    icon: [
      {
        url: `${base}/2020-Icon-Biblio-Archiv-EN.svg`,
        sizes: "32x32",
        type: "image/svg+xml",
      },
    ],
    shortcut: `${base}/2020-Icon-Biblio-Archiv-EN.svg`,
    apple: `${base}/2020-Icon-Biblio-Archiv-EN.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href={`${base}/2020-Icon-Biblio-Archiv-EN.svg`}
          type="image/svg+xml"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
