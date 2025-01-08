import type { Metadata } from "next";
import { Geist, Geist_Mono, Knewave } from "next/font/google";
import "./globals.css";

const knewave = Knewave({
  weight: "400",
  variable: "--font-knewave",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inspirationally",
  description: "Get inspired by the best quotes from your favorite movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${knewave.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
