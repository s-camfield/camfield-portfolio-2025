import { promises as fs } from 'fs';
import path from 'path';
import Navigation from '../../../components/Navigation';
import { notFound } from 'next/navigation';
import PdfLightboxGallery from '../../../components/PdfLightboxGallery';

// --- Helper: read files in /public/portfolio/[project] ---
async function getProjectFiles(projectName) {
  const projectDir = path.join(process.cwd(), 'public', 'portfolio', projectName);

  try {
    const allFiles = await fs.readdir(projectDir);

    // Filter out system files + thumbnails (any extension)
    const cleaned = allFiles.filter((file) => {
      const lower = file.toLowerCase();
      if (lower.startsWith('.')) return false;
      if (lower === 'thumbnail.png' || lower === 'thumbnail.jpg' || lower === 'thumbnail.jpeg' || lower === 'thumbnail.webp') return false;
      return true;
    });

    // Separate images + PDFs
    const imageFiles = cleaned.filter((f) => /\.(png|jpg|jpeg|webp|gif)$/i.test(f));
    const pdfFiles = cleaned.filter((f) => /\.pdf$/i.test(f));

    // Keep it stable + predictable
    imageFiles.sort((a, b) => a.localeCompare(b));
    pdfFiles.sort((a, b) => a.localeCompare(b));

    return { imageFiles, pdfFiles };
  } catch (error) {
    console.error(`Could not read directory for project: ${projectName}`, error);
    return { imageFiles: [], pdfFiles: [] };
  }
}

// --- Your project display names ---
const projectDisplayNames = {
  '66': 'Enterprises 66, LLC',
  'baca': 'Baca',
  'bayshore': 'Bay Shore Equipment',
  'castle-rock': 'Castle Rock',
  'd-and-c': 'D & C',
  'f-up': 'F-Up',
  'find-your-fitness': 'Find Your Fitness',
  'general-inspection': 'General Inspection', // ✅ NEW
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

const externalLinks = {
  'solid-oak': 'https://solidoakre.com/',
  'd-and-c': 'https://donahuecobbconsulting.com/',
  'vpcs': 'https://www.veteranpcs.com/',
  'total-stone': 'https://total-stone.com/',
  'trios': 'https://www.trioscantina.com/',
};

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
    'https://www.youtube.com/embed/QEOOzjyG1Go',
  ],
  'find-your-fitness': ['https://www.youtube.com/embed/Q7dSJltZQ_k'],
  'baca': ['https://www.youtube.com/embed/q8GpyiIjMB0'],
  'sweet-roast': ['https://www.youtube.com/embed/Nt_7rNOS608', 'https://www.youtube.com/embed/jrXz6RH11H4'],
  'total-stone': ['https://www.youtube.com/embed/nzAmGCEWE9w', 'https://www.youtube.com/embed/EX4lStlaAfU'],

  // ✅ NEW: General Inspection video (watch?v=... -> embed/...)
  'general-inspection': ['https://www.youtube.com/embed/tGsO9UTvWgA'],
};

export async function generateStaticParams() {
  return Object.keys(projectDisplayNames).map((key) => ({
    project: key,
  }));
}

export default async function ProjectPage({ params }) {
  // ✅ Next.js wants params awaited in newer versions
  const { project } = await params;

  if (!project || !projectDisplayNames[project]) {
    notFound();
  }

  const displayName = projectDisplayNames[project];
  const externalLink = externalLinks[project];
  const videos = youtubeVideos[project] || [];

  const { imageFiles, pdfFiles } = await getProjectFiles(project);

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
        {imageFiles.length > 0 && (
          <div className="space-y-8">
            {imageFiles.map((imageFile) => (
              <div key={imageFile} className="relative w-full aspect-video">
                <img
                  src={`/portfolio/${project}/${imageFile}`}
                  alt={`${displayName} - ${imageFile}`}
                  className="w-full h-full object-contain rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        )}

        {/* PDFs in Lightbox */}
        <PdfLightboxGallery
          pdfFiles={pdfFiles}
          project={project}
          displayName={displayName}
        />

        {/* YouTube Videos */}
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
