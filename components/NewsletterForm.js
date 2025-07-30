import settings from '../content/settings.json';

export default function NewsletterForm() {
  const endpoint = settings.newsletter?.endpoint || '';
  return (
    <form action={endpoint} method="POST" className="max-w-md mx-auto flex flex-col sm:flex-row items-center gap-3">
      <input
        type="email"
        name="email"
        required
        placeholder="Enter your email"
        className="flex-1 px-4 py-2 rounded text-gray-800"
      />
      {/* disable captcha so the form doesn't require a puzzle */}
      <input type="hidden" name="_captcha" value="false" />
      <button type="submit" className="bg-secondary text-white px-4 py-2 rounded">
        Subscribe
      </button>
    </form>
  );
}
