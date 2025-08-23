import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import TopBar from "./topbar";
import 'katex/dist/katex.min.css';
import { AuthProvider } from "@/contexts/AuthContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <AuthProvider>
          <TopBar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
