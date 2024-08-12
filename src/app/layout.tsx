import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from './home.module.css'
import { Header } from "./ui/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naopeke Todo",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} >
        {/* <Header/> */}
        {children}</body>
    </html>
  );
}
