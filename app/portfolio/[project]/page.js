// app/portfolio/[project]/page.js
import { promises as fs } from 'fs';
import path from 'path';
import Navigation from '../../../components/Navigation';
import { notFound } from 'next/navigation';

// --- Helper Function to Get Project Files ---
// Reads images from /public/portfolio/{projectName} at runtime/build time (server-only).
async function getProjectFiles(projectName) {
  const projectDir = path.join(process.cwd(), 'public/portfolio', projectName);

  try {
    const allFiles = await fs.readdir(projectDir);

    // Keep only image files (no thumbnail, no hidden files, no weird system files)
    const imageFiles = allFiles
      .filter((file) => !file.startsWith('.'))
      .filter((file) => file.toLowerCase() !== 'thumbnail.png')
      .filter((file) => /\.(png|jpe?g|webp|gif|svg)$/i.test(file));

    // Optional: sort so the order is consistent (especially for 01,02,03 naming)
    imageFiles.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

    return imageFiles;
  } catch (error) {
    // Directory doesn't exist (or other FS error)
    return null;
  }
}

// --- Display Names ---
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

  // ✅ NEW
  'troy-fire': 'Troy Fire',
};

const externalLinks = {
  'solid-oak': 'https://solidoakre.com/',
  'd-and-c': 'https://donahuecobbconsulting.com/',
  'vpcs': 'https://www.veteranpcs.com/',
  'total-stone': 'https://total-stone.com/',
  'trios': 'https://www.trioscantina.com/',
};

const youtubeVideos = {
  vpcs: [
    'https://www.youtube.com/embed/qVCfntkA5bo',
    'https://www.youtube.com/embed/jsBZWp-OIIU',
    'https://www.youtube.com/embed/o72b7Fd7f6Q',
    'https://www.youtube.com/embed/aMYEUo-zaE0',
    'https://www.youtube.com/embed/CYie5dXUk3M',
    'https://www.youtube.com/embed/f3AzcceIFPo',
    'https://www.youtube.com/embed/6KLz8AVCF3E',
    'https://www.youtube.com/embed/w3dTTHgsnME',
    'https://www.youtube.com/embed/LyT7VNzYndg',
    'https://www.youtube.com/embed/QEOOzjyG1Go',
  ],
  'find-your-fitness': ['https://www.youtube.com/embed/Q7dSJltZQ_k'],
  baca: ['https://www.youtube.com/embed/q8GpyiIjMB0'],
  'sweet-roast': [
    'https://www.youtube.com/embed/Nt_7rNOS608',
    'https://www.youtube.com/embed/jrXz6RH11H4',
  ],
  'total-stone': [
    'https://www.youtube.com/embed/nzAmGCEWE9w',
    'https://www.youtube.com/embed/EX4lStlaAfU',
  ],
};

// --- Static Generation ---
export async function generateStaticParams() {
  return Object.keys(projectDisplayNames).map((key) => ({ project: key }));
}

// --- The Page Component ---
export default async function ProjectPage({ params }) {
  const { project } = await params;

  // Validate project slug
  if (!project || !projectDisplayNames[project]) {
    notFound();
  }

  const displayName = projectDisplayNames[project];
  const externalLink = externalLinks[project];
  const videos = youtubeVideos[project] || [];

  const images = await getProjectFiles(project);

  // If folder doesn't exist (or no images), treat as 404
  if (!images || images.length === 0) {
    notFound();
  }

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

        {/* Images */}
        <div className="space-y-8">
          {images.map((imageFile) => (
            <div key={imageFile} className="relative w-full">
              <img
                src={`/portfolio/${project}/${imageFile}`}
                alt={`${displayName} - ${imageFile}`}
                className="w-full h-auto object-contain rounded-lg shadow-md"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Videos */}
        {videos.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((videoUrl, index) => (
                <div key={videoUrl} className="relative aspect-video">
                  <iframe
                    className="w-full h-full rounded-lg shadow-md"
                    src={videoUrl}
                    title={`${displayName} Video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
