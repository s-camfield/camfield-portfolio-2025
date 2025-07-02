'use client';

import Image from 'next/image';

export default function VpcsPortfolioPage() {
  return (
    <main className="min-h-screen pt-32 px-4 pb-16 bg-white">
      <h1 className="text-4xl font-bold text-center mb-12">Veteran PCS</h1>

      {/* Embedded YouTube Short */}
      <div className="max-w-3xl mx-auto mb-12 aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/qVCfntkA5bo"
          title="Veteran PCS Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Local Videos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <video controls className="w-full rounded-lg shadow">
          <source src="/portfolio/vpcs/home coming 2023_v2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video controls className="w-full rounded-lg shadow">
          <source src="/portfolio/vpcs/vetPCS 4th of july 2023_1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Add any additional videos here */}
      </div>
    </main>
  );
}