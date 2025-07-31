import Layout from '../components/Layout';
import services from '../content/services.json';

// Services page to showcase luxury lifestyle services
function ServicesPage({ services }) {
  return (
    <Layout title="Our Services" description="Discover our exclusive services">
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-center"
            >
              <div className="w-full h-48 mb-4">
                <img
                  src={`/images/${service.image}`}
                  alt={service.title}
                  className="object-cover w-full h-full rounded-md"
                />
              </div>
              <h2 className="text-2xl font-semibold mb-2 text-center">
                {service.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      services,
    },
  };
}

export default ServicesPage;
