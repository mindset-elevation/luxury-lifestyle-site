import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Layout from '../../components/Layout';

export default function Post({ frontMatter, content }) {
  return (
    <Layout title={frontMatter.title} description={frontMatter.excerpt}>
      <article className="prose prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-secondary mb-4">{frontMatter.title}</h1>
        {frontMatter.date && (
          <p className="text-sm text-gray-400 mb-4">
            {new Date(frontMatter.date).toLocaleDateString()}
          </p>
        )}
        {frontMatter.coverImage && (
          <img
            src={frontMatter.coverImage}
            alt={frontMatter.title}
            className="w-full mb-6 rounded-lg"
          />
        )}
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'content', 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  const paths = filenames
    .filter((name) => name.endsWith('.md'))
    .map((name) => ({
      params: { slug: name.replace(/\.md$/, '') },
    }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postsDirectory = path.join(process.cwd(), 'content', 'posts');
  const fullPath = path.join(postsDirectory, `${params.slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  return {
    props: {
      frontMatter: data,
      content: processedContent.toString(),
    },
  };
}
