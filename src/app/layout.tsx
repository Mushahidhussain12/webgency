'use client';

import Lenis from 'lenis';

import { Montserrat } from 'next/font/google';
import { useEffect, useState } from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Loader from '@/components/ui/Loader';

const montserrat = Montserrat({ subsets: ['latin'] });

import '@/shared/styles/globals.scss';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [dimension, setDimension] = useState<any>(null);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', resize);
    requestAnimationFrame(raf);
    resize();

    requestAnimationFrame(raf);
  }, []);
  return (
    <html lang="ru">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme');
                const theme = savedTheme || 'dark';
                document.documentElement.classList.add(theme);
                document.documentElement.style.colorScheme = theme;
                document.body.style.backgroundColor = theme === 'dark' ? '#000000' : '#ffffff';
                document.body.style.transition = 'none';
                // Force immediate style application
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
      </head>
      <body className={montserrat.className}>
        <ThemeProvider>
          <Loader />
          <main>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
