import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "David Nino",
  description: "David Nino's Portfolio",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden bg-[#121212] text-white">
        {/* Iluminaciones */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#581BB7] opacity-10 blur-3xl rounded-full z-0" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#581BB7] opacity-5 blur-[120px] rounded-full z-0" />

        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
