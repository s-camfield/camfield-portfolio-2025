'use client';
import React from 'react';

export default function VpcsPage() {
  return (
    <main className="min-h-screen px-4 pt-32 pb-16 bg-white">
      <h1 className="text-4xl font-bold text-center mb-12">Veteran PCS Videos</h1>

      {/* Embedded YouTube Short */}
      <div className="flex justify-center mb-12">
        <iframe 
          width="360" 
          height="640" 
          src="https://www.youtube.com/embed/qVCfntkA5bo" 
          title="YouTube video player"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
        ></iframe>
      </div>

      {/* Your existing videos go here */}
      {/* Example video block:
      <video controls className="w-full max-w-3xl mx-auto mb-8">
        <source src="/portfolio/vpcs/some-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      */}
    </main>
  );
}