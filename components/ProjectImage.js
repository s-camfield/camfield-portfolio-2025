'use client';

import { useState } from 'react';

export default function ProjectImage({ src, alt }) {
  const [hasError, setHasError] = useState(false);
  
  if (hasError) {
    return null;
  }
  
  return (
    <div className="relative w-full aspect-video">
      <img
        src={src}
        alt={alt}
        onError={() => setHasError(true)}
        className="w-full h-full object-contain rounded-lg shadow-md"
      />
    </div>
  );
}
