// components/ProjectImage.js
'use client';

import { useState, useEffect } from 'react';

export default function ProjectImage({ src, alt }) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Reset error state if src changes
  useEffect(() => {
    setHasError(false);
    setIsLoaded(false);
  }, [src]);
  
  if (hasError) {
    // Return null to hide the image container completely
    return null;
  }
  
  return (
    <div className="relative w-full aspect-video">
      <img
        src={src}
        alt={alt}
        onError={() => {
          console.log(`Failed to load image: ${src}`);
          setHasError(true);
        }}
        onLoad={() => {
          console.log(`Successfully loaded image: ${src}`);
          setIsLoaded(true);
        }}
        className="w-full h-full object-contain rounded-lg shadow-md"
      />
    </div>
  );
}
