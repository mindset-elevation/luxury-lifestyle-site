import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from '../../components/Layout';
import Link from 'next/link';

export default function Blog({ posts }) {
  return (
    <Layout title="Blog" description="Insights from our world of luxury">
      <h1 className="text-3xl font-bold text-secondary mb-6">Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-secondary pb-8">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:underline text-secondary">
                {post.title}
              </Link>
            </h2>
            {post.date && (
              <p className="text-sm text-gray-400 mb-2">
                {new Date(post.date).toLocaleDateString()}
              </p>
            )}
            {post.excerpt && <p className="text-base">{post.excerpt}</p>}
          </article>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'content', 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames
    .filter((name) => name.endsWith('.md'))
    .map((name) => {
      const slug = name.replace(/\.md$/, '');
      const filePath = path.join(postsDirectory, name);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      return {
        slug,
        title: data.title || slug,
        date: data.date || null,
        excerpt: data.excerpt || '',
      };
    })
    .sort((a, b) => {
      const dateA = a.date ? new Date(a.date) : new Date(0);
      const dateB = b.date ? new Date(b.date) : new Date(0);
      return dateB - dateA;
    });
  return {
    props: {
      posts,
    },
  };
}
