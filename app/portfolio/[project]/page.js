// app/portfolio/[project]/page.js
import Navigation from '../../../components/Navigation';
import { notFound } from 'next/navigation';
import ProjectImage from '../../../components/ProjectImage';

// Define project display names
const projectDisplayNames = {
  '66': 'Enterprises 66, LLC',
  'baca': 'Baca',
  'bayshore': 'Bay Shore Equipment',
  'castle-rock': 'Castle Rock',
  'd-and-c': 'D & C',
  'f-up': 'F-Up',
  'find-your-fitness': 'Find Your Fitness',
  'ioc': 'Instrument of Change',
  'michigan': 'Michigan Litigator',
  'mike': 'Local Fire',
  'moher': "Moher's",
  'mugzle': 'Mugzles',
  'soldner': 'Soldner',
  'solid-oak': 'Solid Oak',
  'sunshine': 'Sunshine',
  'sweet-roast': 'Sweet Roast',
  'total-stone': 'Total Stone',
  'trios': 'Trios',
  'vpcs': 'VeteranPCS',
  'yale': 'Yale',
};

// Define external links
const externalLinks = {
  'solid-oak': 'https://solidoakre.com/',
  'd-and-c': 'https://donahuecobbconsulting.com/',
  'vpcs': 'https://www.veteranpcs.com/',
  'total-stone': 'https://total-stone.com/',
  'trios': 'https://www.trioscantina.com/',
};

// Define project-specific image files based on screenshots
const projectImages = {
  // Updated based on latest screenshot
  '66': ['branding-1.png', 'branding-2.png'],
  
  'baca': ['baca-1.png', 'book-4.png', 'book-5.png', 'book-6.png', 'flyer-3.png', 'folder-2.png', 'logo-sign-7.png', 'straight-8.png'],
  'bayshore': ['bay-shore-branding-01.png', 'bay-shore-branding-02.png', 'bay-shore-branding-03.png', 'bay-shore-branding-04.png', 'bay-shore-branding-05.png'],
  'castle-rock': ['castle-rock-1.png', 'castle-rock-2.png', 'castle-rock-3.png', 'castle-rock-4.png', 'castle-rock-5.png'],
  'd-and-c': ['d-c-consulting-branding-01.png', 'd-c-consulting-branding-02.png', 'd-c-consulting-branding-03.png', 'd-c-consulting-branding-04.png', 'd-c-consulting-branding-05.png', 'd-c-consulting-branding-06.png', 'd-c-web-7.png'],
  'f-up': ['f-up-logo-1.png', 'f-up-logo-2.png'],
  'find-your-fitness': ['find-your-fitness-1.png'],
  'ioc': ['ioc-web-2.png', 'ioc-1.png'],
  'michigan': ['tml-1.png'],
  'mike': ['fire-1.png', 'fire-3.png', 'troy-fire-4.png', 'warren-fire-2.png'],
  'moher': ['moher-1.png'],
  'mugzle': ['mugzle-1.png', 'mugzle-web-3.png', 'web-mug-2.png'],
  'soldner': ['branding-01.png', 'branding-02.png', 'branding-03.png', 'branding-04.png', 'branding-05.png'],
  'solid-oak': ['solid-oak-1.png', 'solid-oak-2.png', 'solid-sign-3.png', 'web-4.png'],
  'sunshine': ['sunshine-chapters-iii-2.png', 'infographic-3.png', 'infographic-4.png', 'infographic-5.png', 'infographic-6.png', 'infographic-7.png', 'sunshine-bh-1.png'],
  'sweet-roast': ['sr-logo-products-5.png', 'sr-menu-6.png', 'sr-product-7.png', 'sr-product-8.png', 'sw-website-4.png', 'sweet-roast-1.jpg', 'sweet-roast-2.png', 'sweet-roast-logo-3.png'],
  
  // Updated based on latest screenshot
  'total-stone': ['booklet-8.png', 'booklet-9.png', 'total-stone-1.png', 'total-stone-pro-cut-flyer-3.png', 'total-stone-solution-logo-2.png', 'total-stone-website-7.png', 'ts-flyer-6.png', 'ts-flyer-vision-4.png', 'ts-plate-5.png'],
  
  // Updated based on latest screenshot
  'trios': ['trios-branding-3.png', 'trios-logo-1.png', 'trios-logo-2.png', 'trios-logo-4.png', 'trios-menu-5.png', 'trios-menu-6.png', 'trios-menu-7.png'],
  
  // Updated based on latest screenshot
  'vpcs': ['booklet-6.png', 'booklet-7.png', 'booklet-8.png', 'booklet-9.png', 'booklet-10.png', 'flyer-4.png', 'flyer-5.png', 'socials-4.png', 'veteranpcs-flyer-3.png', 'vpcs-branding-2.png', 'vpcs-logo-1.png'],
  
  // Updated based on latest screenshot
  'yale': ['yale-heating-1.png', 'yale-heating-2.png', 'yale-heating-3.png', 'yale-heating-4.png'],
};

// Define YouTube videos for each project
const youtubeVideos = {
  'vpcs': [
    'https://www.youtube.com/embed/qVCfntkA5bo',
    'https://www.youtube.com/embed/jsBZWp-OIIU',
    'https://www.youtube.com/embed/o72b7Fd7f6Q',
    'https://www.youtube.com/embed/aMYEUo-zaE0',
    'https://www.youtube.com/embed/CYie5dXUk3M',
    'https://www.youtube.com/embed/f3AzcceIFPo',
    'https://www.youtube.com/embed/6KLz8AVCF3E',
    'https://www.youtube.com/embed/w3dTTHgsnME',
    'https://www.youtube.com/embed/LyT7VNzYndg',
    'https://www.youtube.com/embed/QEOOzjyG1Go'
  ],
  'find-your-fitness': [
    'https://www.youtube.com/embed/Q7dSJltZQ_k'
  ],
  'baca': [
    'https://www.youtube.com/embed/q8GpyiIjMB0'
  ],
  'sweet-roast': [
    'https://www.youtube.com/embed/Nt_7rNOS608',
    'https://www.youtube.com/embed/jrXz6RH11H4'
  ],
  'total-stone': [
    'https://www.youtube.com/embed/nzAmGCEWE9w',
    'https://www.youtube.com/embed/EX4lStlaAfU'
  ]
};

export async function generateStaticParams() {
  return Object.keys(projectDisplayNames).map((key) => ({
    project: key,
  }));
}

export default async function ProjectPage({ params }) {
  const { project } = await params;

  if (!project || !projectDisplayNames[project]) {
    notFound();
    return null;
  }

  const displayName = projectDisplayNames[project];
  const externalLink = externalLinks[project];
  const images = projectImages[project] || [];
  const videos = youtubeVideos[project] || [];

  // For debugging - log the project and available images
  console.log(`Project: ${project}, Images: ${images.length}`);

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <div className="container mx-auto pt-32 px-4 pb-16">
        <h1 className="text-4xl font-bold mb-6 text-center">{displayName}</h1>

        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-gray-700">
            This is the {displayName} project. Here you can add a detailed description of the project,
            including the client, the challenge, your approach, and the results.
          </p>

          {externalLink && (
            <a
              href={externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-600 underline hover:text-blue-800 transition"
            >
              View Site →
            </a>
          )}
        </div>

        {/* Image Section - Using the client component */}
        <div className="space-y-8">
          {/* Try all possible image patterns for this project */}
          {images.map((image, index) => (
            <ProjectImage
              key={index}
              src={`/portfolio/${project}/${image}`}
              alt={`${displayName} - ${image}`}
            />
          ))}
          
          {/* If no specific images are found, try some common patterns */}
          {images.length === 0 && (
            <>
              <ProjectImage
                src={`/portfolio/${project}/${project}-1.png`}
                alt={`${displayName} - Image 1`}
              />
              <ProjectImage
                src={`/portfolio/${project}/1.png`}
                alt={`${displayName} - Image 1`}
              />
            </>
          )}
        </div>

        {/* Videos Section - YouTube Only */}
        {videos.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((videoUrl, index) => (
                <div key={index} className="relative aspect-video">
                  <iframe
                    className="w-full h-full rounded-lg shadow-md"
                    src={videoUrl}
                    title={`${displayName} Video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
