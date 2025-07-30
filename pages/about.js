import fs from 'fs/promises';
import path from 'path';
import Layout from '../components/Layout';

export default function About({ about }) {
  return (
    <Layout title={about.title} description={about.title}>
      <div className="flex flex-col md:flex-row items-center gap-8">
        {about.image && (
          <img
            src={about.image}
            alt="About image"
            className="w-full md:w-1/2 object-cover rounded-lg shadow-md mb-6"
          />
        )}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-secondary mb-4">{about.title}</h1>
          <p className="text-base leading-relaxed whitespace-pre-line">{about.content}</p>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const aboutPath = path.join(process.cwd(), 'content', 'about.json');
  const json = await fs.readFile(aboutPath, 'utf8');
  const about = JSON.parse(json);
  return {
    props: {
      about,
    },
  };
}
