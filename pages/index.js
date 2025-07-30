import fs from 'fs/promises';
import path from 'path';
import Layout from '../components/Layout';

export default function Home({ home }) {
  return (
    <Layout title={home.title} description={home.subtitle}>
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
          {home.title}
        </h1>
        <p className="text-lg mb-6">{home.subtitle}</p>
        {home.heroImage && (
          <img
            src={home.heroImage}
            alt="Hero"
            className="w-full h-64 object-cover rounded-lg shadow-md mb-8"
          />
        )}
      </section>
      {home.sections &&
        home.sections.map((section, idx) => (
          <section key={idx} className="mb-12">
            <h2 className="text-2xl font-semibold text-secondary mb-2">
              {section.title}
            </h2>
            <p className="text-base leading-relaxed">{section.text}</p>
          </section>
        ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const homePath = path.join(process.cwd(), 'content', 'home.json');
  const json = await fs.readFile(homePath, 'utf8');
  const home = JSON.parse(json);
  return {
    props: {
      home,
    },
  };
}
