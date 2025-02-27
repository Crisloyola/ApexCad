import type { Metadata } from "next";
import {Inter } from "next/font/google";
import "./globals.css";


const InterFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: "400",
});


export const metadata: Metadata = {
  title: "ApexCAD",
  description: "Cursos propedéuticos para la universidad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${InterFont.variable} ${InterFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
