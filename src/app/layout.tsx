import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "Leandro Gama — Software Developer",
  description:
    "Portfolio de Leandro Gama, Trainee Software Developer em Santa Cruz, Madeira.",
  openGraph: {
    title: "Leandro Gama — Software Developer",
    description: "Portfolio de Leandro Gama, Trainee Software Developer na Madeira.",
    url: "https://leandrogama.com",
    siteName: "Leandro Gama",
    locale: "pt_PT",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={geist.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
