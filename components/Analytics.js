import { useEffect } from 'react';
import settings from '../content/settings.json';

export default function Analytics() {
  useEffect(() => {
    const id = settings.gaTrackingId;
    if (!id) return;
    // Inject script tag for Google Tag Manager
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    script.async = true;
    document.head.appendChild(script);
    // Initialise data layer
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', id);
  }, []);
  return null;
}
