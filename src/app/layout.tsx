import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "AUREUS | The Sovereign Standard",
  description: "Exclusive digital asset management.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={clsx(playfair.variable, inter.variable)}>
      <body className={clsx(inter.className, "bg-[#050505] text-slate-200 antialiased bg-noise selection:bg-[#D4AF37] selection:text-black")}>
        {children}
      </body>
    </html>
  );
}
