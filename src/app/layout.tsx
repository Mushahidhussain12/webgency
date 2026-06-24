'use client';

import Lenis from 'lenis';

import { Montserrat } from 'next/font/google';
import { useEffect, useState } from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Loader from '@/components/ui/Loader';

const montserrat = Montserrat({ subsets: ['latin'] });

import '@/shared/styles/globals.scss';
import 'lenis/dist/lenis.css';



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [dimension, setDimension] = useState<any>(null);



  useEffect(() => {
    // Optimized type-safe Lenis configuration for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2, // standard duration for smooth transitions
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // standard easing function
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0, // standard scroll speed
      touchMultiplier: 1.0,
      infinite: false,
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', resize);
    rafId = requestAnimationFrame(raf);
    resize();

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      lenis.destroy();
    };
  }, []);
  return (
    <html lang="en">
      <head>
        <title>Coderizz - Innovative Software Agency from Pakistan | Web & Mobile Development</title>
        <meta name="description" content="Coderizz is an innovative software agency from Pakistan specializing in web development, mobile apps, UI/UX design, and branding. We turn ideas into reality." />
        <meta name="keywords" content="software agency, web development, mobile app development, UI UX design, branding, Pakistan, React, Next.js, Flutter" />
        <meta name="author" content="Coderizz" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://coderizz.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Coderizz - Innovative Software Agency from Pakistan" />
        <meta property="og:description" content="We design, develop, and deliver web and mobile applications that inspire trust, growth, and innovation." />
        <meta property="og:url" content="https://coderizz.com/" />
        <meta property="og:site_name" content="Coderizz" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Coderizz - Innovative Software Agency from Pakistan" />
        <meta name="twitter:description" content="We design, develop, and deliver web and mobile applications that inspire trust, growth, and innovation." />

        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* JSON-LD: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Coderizz",
              "url": "https://coderizz.com",
              "logo": "https://coderizz.com/favicon.svg",
              "description": "An innovative software agency from Pakistan specializing in web development, mobile apps, UI/UX design, and branding.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Karachi",
                "addressCountry": "PK"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+92-300-123-4567",
                "contactType": "customer service",
                "email": "hello@coderizz.com",
                "availableLanguage": ["English", "Urdu"]
              },
              "sameAs": [
                "https://linkedin.com",
                "https://instagram.com",
                "https://github.com"
              ]
            })
          }}
        />

        {/* JSON-LD: WebSite with SearchAction (enables sitelinks search box) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Coderizz",
              "url": "https://coderizz.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://coderizz.com/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* JSON-LD: SiteNavigationElement (helps Google generate sitelinks) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "SiteNavigationElement",
                  "position": 1,
                  "name": "About",
                  "description": "Learn about our team and mission",
                  "url": "https://coderizz.com/#about"
                },
                {
                  "@type": "SiteNavigationElement",
                  "position": 2,
                  "name": "Services",
                  "description": "Web development, mobile apps, design and branding",
                  "url": "https://coderizz.com/#services"
                },
                {
                  "@type": "SiteNavigationElement",
                  "position": 3,
                  "name": "Our Process",
                  "description": "How we work from discovery to launch",
                  "url": "https://coderizz.com/#process"
                },
                {
                  "@type": "SiteNavigationElement",
                  "position": 4,
                  "name": "Technologies",
                  "description": "Tools and frameworks we build with",
                  "url": "https://coderizz.com/#technologies"
                },
                {
                  "@type": "SiteNavigationElement",
                  "position": 5,
                  "name": "Testimonials",
                  "description": "What our clients say about working with us",
                  "url": "https://coderizz.com/#testimonials"
                },
                {
                  "@type": "SiteNavigationElement",
                  "position": 6,
                  "name": "Contact",
                  "description": "Get in touch to discuss your project",
                  "url": "https://coderizz.com/#contact"
                }
              ]
            })
          }}
        />

        {/* Theme initialization */}
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
