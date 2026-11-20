import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://aashishadhikari.com"),
  title: "Aashish Adhikari — AI engineer, founder & researcher",
  description:
    "Aashish Adhikari builds AI that assesses student writing and speech. Founder of IELTSBuddy (2,500+ students), B.Sc. IT (AI & ML) Summa Cum Laude, applying for graduate study in NLP for Fall 2027.",
  authors: [{ name: "Aashish Adhikari" }],
  openGraph: {
    title: "Aashish Adhikari — Building AI that grades fairly",
    description:
      "Founder of IELTSBuddy. Researching the reliability of LLM-based assessment. Kathmandu, Nepal.",
    type: "profile",
    images: ["/photos/portrait-smile.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lora.variable} ${geist.variable} ${geistMono.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
