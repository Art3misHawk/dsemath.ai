import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "@/styles/app.css";
// import "./global.css"
import "./styles/app.css";


import { SpeedInsights } from "@vercel/speed-insights/next"

import TopBar from "./Topbar-decrepit";
import Topbar from "./Topbar";
import Footer from "./Footer";
import 'katex/dist/katex.min.css';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "dsemath.ai",
  description: "an AI-powered platform for DSE Mathematics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={inter.className}>
        <Topbar />
        {children}
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
