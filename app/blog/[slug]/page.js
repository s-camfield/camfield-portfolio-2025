// app/blog/[slug]/page.js (rename from .tsx to .js)
import { client } from '../../../sanity/lib/client';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { urlFor } from '../../../sanity/lib/image';
import Navigation from '../../../components/Navigation';
import { notFound } from 'next/navigation';

export const revalidate = 60; // Revalidate this page every 60 seconds

export default async function BlogPostPage({ params }) {
  // Await the params to get the slug
  const { slug } = await params;
  
  let post;
  
  try {
    post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, {
      slug
    });
  } catch (error) {
    console.error("Error fetching post:", error);
  }

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <article className="container mx-auto pt-32 px-4 pb-16 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 mb-8">
          {new Date(post.publishedAt).toLocaleDateString()}
        </p>
        
        {post.mainImage && (
          <div className="relative h-64 w-full mb-8">
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}
        
        {/* Add basic styling directly to the container */}
        <div className="blog-content">
          <PortableText value={post.body} />
        </div>
      </article>
    </main>
  );
}
