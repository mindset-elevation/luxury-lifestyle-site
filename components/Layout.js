import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import settings from '../content/settings.json';
import Analytics from './Analytics';

export default function Layout({ children, title, description }) {
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
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}
