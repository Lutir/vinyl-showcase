import type { Metadata } from 'next';
import { Montserrat, Prata, Pacifico } from 'next/font/google';
import "./list-view.css";
import ThemeToggle from '@/components/ThemeToggle';
import ParallaxBackground from '@/components/ParallaxBackground';

// Google Fonts
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const prata = Prata({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-display',
  display: 'swap',
});

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-accent',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vinyl Collection Showcase',
  description: 'A retro-styled showcase of my vinyl collection with a groovy 1970s aesthetic',
  keywords: ['vinyl', 'records', 'collection', 'music', '70s', 'retro'],
  authors: [{ name: 'Vinyl Collector' }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#fff8e7',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${prata.variable} ${pacifico.variable}`}>
        <ParallaxBackground />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <header className="site-header">
          <div className="header-content">
            <h1 className="site-title">Vinyl Collection</h1>
            <ThemeToggle />
          </div>
        </header>
        <main id="main-content" className="main-content">
          {children}
        </main>
        <footer className="site-footer">
          <p>© {new Date().getFullYear()} Vinyl Collection Showcase</p>
        </footer>
      </body>
    </html>
  );
}
