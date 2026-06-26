import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WolfBackdrop from "@/components/WolfBackdrop";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "iZ Studio — Kadim iz, modern duruş.",
  description:
    "Bozkır geometrisi ve kadim Türk sembollerinden ilham alan, modern ve rafine erkek giyim.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${sans.variable} ${serif.variable}`}>
      <body className="relative flex min-h-screen flex-col bg-void font-sans antialiased">
        <WolfBackdrop />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
