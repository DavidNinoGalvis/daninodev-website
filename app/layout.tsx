import { Roboto } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'David Nino - Full Stack Developer & Designer',
  description: 'Creative frontend developer building modern web experiences.',
  keywords: [
    'David Nino',
    'frontend developer',
    'web portfolio',
    'React',
    'Next.js',
    'TypeScript',
    'UI design',
    'developer portfolio',
  ],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'David Nino — Frontend Developer',
    description:
      'Explore my portfolio of web projects built with React, Next.js and creative design.',
    url: 'https://danino.dev',
    type: 'website',
    images: [
      {
        url: '/preview.png',
        width: 1200,
        height: 630,
        alt: 'David Nino portfolio preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'David Nino — Frontend Developer',
    description:
      'Creative frontend developer with a passion for modern UI and web design.',
    images: ['/preview.png'],
  },
};

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={roboto.variable}>
      <body className="relative overflow-x-hidden bg-[#121212] text-white font-sans">
        <div className="relative z-10 max-w-[1285px] mx-auto px-6">
          {children}
        </div>
      </body>
    </html>
  );
}
