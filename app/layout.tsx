import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "David Nino - Full Stack Developer & Designer",
  description: "Creative frontend developer building modern web experiences.",
  keywords: [
    "David Nino",
    "frontend developer",
    "web portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "UI design",
    "developer portfolio",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "David Nino — Frontend Developer",
    description:
      "Explore my portfolio of web projects built with React, Next.js and creative design.",
    url: "https://danino.dev",
    type: "website",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "David Nino portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Nino — Frontend Developer",
    description:
      "Creative frontend developer with a passion for modern UI and web design.",
    images: ["/preview.png"],
  },
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

        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
