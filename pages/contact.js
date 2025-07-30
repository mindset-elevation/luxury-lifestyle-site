import Layout from '../components/Layout';
import settings from '../content/settings.json';

export default function Contact() {
  return (
    <Layout title="Contact" description="Get in touch with us">
      <h1 className="text-3xl font-bold text-secondary mb-4">Contact</h1>
      <p className="mb-6">We would love to hear from you. Fill out the form below and we'll get back to you soon.</p>
      <form
        action={`https://formsubmit.co/${settings.contactEmail}`}
        method="POST"
        className="max-w-md"
      >
        <div className="mb-4">
          <input
            required
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 text-gray-800 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            required
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 text-gray-800 rounded"
          />
        </div>
        <div className="mb-4">
          <textarea
            required
            name="message"
            placeholder="Your Message"
            className="w-full px-4 py-2 text-gray-800 rounded h-32"
          />
        </div>
        {/* Hidden fields to disable captcha and redirect after submission */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="/thank-you" />
        <button type="submit" className="bg-secondary text-white px-4 py-2 rounded">
          Send Message
        </button>
      </form>
    </Layout>
  );
}
