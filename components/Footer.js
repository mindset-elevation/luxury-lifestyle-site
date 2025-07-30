import settings from '../content/settings.json';
import NewsletterForm from './NewsletterForm';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-primary border-t border-secondary py-8 px-4 mt-8">
      <div className="container mx-auto text-center">
        <h3 className="text-xl font-semibold text-secondary mb-4">Join Our Newsletter</h3>
        <NewsletterForm />
        <p className="text-sm text-gray-400 mt-8">
          © {currentYear} {settings.siteTitle}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
