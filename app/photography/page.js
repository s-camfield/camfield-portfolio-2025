// app/photography/page.js
'use client';
import Image from 'next/image';

export default function PhotographyPage() {
  const photos = Array.from({ length: 20 }, (_, i) => `/photography/photo-${i + 1}.png`);

  return (
    <main className="min-h-screen bg-white px-4 pt-32 pb-16">
      <h1 className="text-4xl font-bold text-center mb-12">Photography</h1>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {photos.map((src, index) => (
          <div key={index} className="break-inside-avoid overflow-hidden rounded-lg shadow">
            <Image
              src={src}
              alt={`Photography ${index + 1}`}
              width={800}
              height={600}
              layout="responsive"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        ))}
      </div>
    </main>
  );
}