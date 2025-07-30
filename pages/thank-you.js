import Layout from '../components/Layout';

export default function ThankYou() {
  return (
    <Layout title="Thank You" description="Thank you for your message">
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold text-secondary mb-4">Thank you!</h1>
        <p className="text-lg">We appreciate your message and will get back to you shortly.</p>
      </div>
    </Layout>
  );
}
