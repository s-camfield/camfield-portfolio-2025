import { client } from '../../sanity/lib/client'
import { groq } from 'next-sanity'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '../../sanity/lib/image'

// Types
interface Post {
  _id: string
  title: string
  slug: { current: string }
  mainImage?: { asset: { _ref: string } }
  publishedAt: string
}

export const revalidate = 60 // Revalidate this page every 60 seconds

export default async function BlogPage() {
  const posts = await client.fetch<Post[]>(
    groq`*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      publishedAt
    }`
  )

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
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
    </main>
  )
}
