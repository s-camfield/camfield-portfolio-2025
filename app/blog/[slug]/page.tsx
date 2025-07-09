import { client } from '../../../sanity/lib/client'
import { groq } from 'next-sanity'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '../../../sanity/lib/image'
import { notFound } from 'next/navigation'

// Types
interface Post {
  _id: string
  title: string
  publishedAt: string
  mainImage?: { asset: { _ref: string } }
  body: any[]
}

// Update the Props interface to make params a Promise
interface Props {
  params: Promise<{ slug: string }>
}

export const revalidate = 60 // Revalidate this page every 60 seconds

export default async function BlogPostPage({ params }: Props) {
  // Await the params to get the slug
  const { slug } = await params
  
  const post = await client.fetch<Post | null>(
    groq`*[_type == "post" && slug.current == $slug][0]`,
    { slug }
  )

  if (!post) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl">
      <article>
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
        
        <div className="prose max-w-none">
          <PortableText value={post.body} />
        </div>
      </article>
    </main>
  )
}
