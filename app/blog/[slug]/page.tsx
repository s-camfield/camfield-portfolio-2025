import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const revalidate = 60;

const query = groq`
  *[_type == "post" && slug.current == $slug][0] {
    title,
    publishedAt,
    body,
    mainImage { asset->{url} }
  }
`;

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await client.fetch(query, { slug: params.slug });

  return (
    <main className="bg-white text-gray-800">
      <Navigation />

      <article className="container mx-auto px-6 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold text-[#27bdab] mb-4">{post.title}</h1>
        <p className="text-gray-500 text-sm mb-6">
          {new Date(post.publishedAt).toDateString()}
        </p>

        {post.mainImage?.asset?.url && (
          <Image
            src={post.mainImage.asset.url}
            alt={post.title}
            width={800}
            height={400}
            className="rounded-lg mb-8"
          />
        )}

        <div className="prose prose-lg max-w-none">
          <PortableText value={post.body} />
        </div>
      </article>

      <Footer />
    </main>
  );
}