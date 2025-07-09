// app/portfolio/[project]/page.js
import Navigation from '../../../components/Navigation';
import { notFound } from 'next/navigation';

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
  'mohers': "Moher's",
  'mugzles': 'Mugzles',
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

// Define project images statically to avoid filesystem operations
const projectImages = {
  '66': ['66-1.png', '66-2.png'],
  'baca': ['baca-1.png', 'baca-2.png'],
  'bayshore': ['bayshore-1.png', 'bayshore-2.png'],
  'castle-rock': ['castle-rock-1.png'],
  'd-and-c': ['d-and-c-1.png', 'd-and-c-2.png'],
  'f-up': ['f-up-1.png'],
  'find-your-fitness': ['find-your-fitness-1.png'],
  'ioc': ['ioc-1.png'],
  'michigan': ['michigan-1.png'],
  'mike': ['mike-1.png'],
  'mohers': ['mohers-1.png'],
  'mugzles': ['mugzles-1.png'],
  'soldner': ['soldner-1.png'],
  'solid-oak': ['solid-oak-1.png', 'solid-oak-2.png'],
  'sunshine': ['sunshine-1.png'],
  'sweet-roast': ['sweet-roast-1.png'],
  'total-stone': ['total-stone-1.png', 'total-stone-2.png'],
  'trios': ['trios-1.png'],
  'vpcs': ['vpcs-1.png', 'vpcs-2.png'],
  'yale': ['yale-1.png'],
};

// Define YouTube videos
const youtubeVideos = {
  'vpcs': ['https://www.youtube.com/embed/qVCfntkA5bo']
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

  const images = projectImages[project] || [];
  const videos = youtubeVideos[project] || [];
  const displayName = projectDisplayNames[project];
  const externalLink = externalLinks[project];

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

        {/* Image Section */}
        {images.length > 0 ? (
          <div className="space-y-8">
            {images.map((image, index) => (
              <div key={image} className="relative w-full aspect-video">
                <img
                  src={`/portfolio/${project}/${image}`}
                  alt={`${displayName} - Image ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 my-8">
            No project images available
          </div>
        )}

        {/* Videos Section - YouTube Only */}
        {videos.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Videos</h2>
            <div className="space-y-8">
              {videos.map((videoUrl, index) => (
                <div key={index} className="relative w-full aspect-video mb-8">
                  <iframe
                    className="w-full h-full rounded"
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
