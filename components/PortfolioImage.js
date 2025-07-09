// components/PortfolioImage.js
'use client';

import { useState, useEffect } from 'react';

export default function PortfolioImage({ project, imageNumber, alt }) {
  const [imageSrc, setImageSrc] = useState(`/portfolio/${project}/${project}-${imageNumber}.png`);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Try different image formats if the initial one fails
  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImageSrc(`/portfolio/${project}/${project}-${imageNumber}.jpg`);
    } else {
      // If both PNG and JPG fail, hide the image
      setIsLoaded(false);
    }
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Check if the image exists on component mount
  useEffect(() => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = handleLoad;
    img.onerror = handleError;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [imageSrc]);

  if (!isLoaded && hasError) {
    return null; // Don't render anything if both image formats failed
  }

  return (
    <div className="relative w-full aspect-video">
      <img
        src={imageSrc}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        className="w-full h-full object-contain rounded-lg shadow-md"
      />
    </div>
  );
}
