import { Header } from "@/components/Header";
import "./globals.css";

import { Bowlby_One_SC, DM_Mono } from "next/font/google";
import { SVGFilters } from "@/components/SvgFilters";

const bowlby = Bowlby_One_SC({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-bowlby-sc",
});

const bmMono = DM_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-dm-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bowlby.variable} ${bmMono.variable} antialiased font-mono font-medium text-zinc-800`}
      >
        <main>
          <Header />
          {children}
        </main>
        <SVGFilters />
      </body>
    </html>
  );
}
