// app/blog/page.tsx

import { groq } from 'next-sanity';
// Update the import path below if your client file is located elsewhere, e.g. '../../sanity/lib/client' or 'sanity/lib/client'
import { client } from '../../sanity/lib/client';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: { asset: { url: string } };
  publishedAt: string;
};

export const revalidate = 60;

export default async function BlogPage() {
  const query = groq`*[_type == "post"] | order(publishedAt desc){
    _id, title, slug, mainImage{asset->{url}}, publishedAt
  }`;

  const posts: Post[] = await client.fetch(query);

  return (
    <main>
      <Navigation />

      <section className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-[#27bdab] mb-10">Blog</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {posts.map((post) => (
              <Link key={post._id} href={`/blog/${post.slug.current}`}>
                <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                  {post.mainImage?.asset?.url && (
                    <Image
                      src={post.mainImage.asset.url}
                      alt={post.title}
                      width={800}
                      height={400}
                      className="object-cover w-full h-60"
                    />
                  )}
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-sm text-gray-500">
                      {new Date(post.publishedAt).toDateString()}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}