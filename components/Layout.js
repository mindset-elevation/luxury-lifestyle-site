import Head from 'next/head';
import { useState, useEffect } from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import settings from '../content/settings.json';
import Analytics from './Analytics';

export default function Layout({ children, title, description }) {
    const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || settings.themeMode || 'light';
    }
    return settings.themeMode || 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const pageTitle = title ? `${title} | ${settings.siteTitle}` : settings.siteTitle;
  const pageDesc = description || settings.siteDescription;
  return (
    <div className="flex flex-col min-h-screen font-custom">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:type" content="website" />
      </Head>
            <Navbar onToggleTheme={toggleTheme} theme={theme} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}
