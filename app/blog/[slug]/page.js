// app/blog/[slug]/page.js
import { client } from '../../../sanity/lib/client'; // Corrected path
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { urlFor } from '../../../sanity/lib/image'; // Corrected path
import Navigation from '../../../components/Navigation'; // Corrected path
import { notFound } from 'next/navigation';
import { portableTextComponents } from '../../../lib/portableTextComponents'; // Corrected path

export const revalidate = 60;

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  
  const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, {
    slug
  });

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
        
        <div className="blog-content">
          <PortableText 
            value={post.body} 
            components={portableTextComponents} 
          />
        </div>
      </article>
    </main>
  );
}
