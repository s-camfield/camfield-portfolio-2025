// app/blog/page.js (rename from .tsx to .js)
import Navigation from '../../components/Navigation';
import { client } from '../../sanity/lib/client';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '../../sanity/lib/image';

export const revalidate = 60; // Revalidate this page every 60 seconds

export default async function BlogPage() {
  let posts = [];
  
  try {
    // Try to fetch posts from Sanity
    posts = await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
      _id, title, slug, mainImage, publishedAt
    }`);
  } catch (error) {
    console.error("Error fetching posts:", error);
    // Continue with empty posts array if there's an error
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <div className="container mx-auto pt-32 px-4 pb-16">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link key={post._id} href={`/blog/${post.slug.current}`} className="block">
                <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  {post.mainImage && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={urlFor(post.mainImage).url()}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h2 className="text-xl font-semibold">{post.title}</h2>
                    <p className="text-sm text-gray-500 mt-2">
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-lg text-gray-700">
            No blog posts available yet. Check back soon!
          </p>
        )}
      </div>
    </main>
  );
}
