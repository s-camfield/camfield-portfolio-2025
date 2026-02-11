import { promises as fs } from 'fs';
import path from 'path';
import Navigation from '../../../components/Navigation';
import { notFound } from 'next/navigation';
import PdfLightboxGallery from '../../../components/PdfLightboxGallery';

// --- Your project display names ---
const projectDisplayNames = {
  '66': 'Enterprises 66, LLC',
  'baca': 'Baca',
  'bayshore': 'Bay Shore Equipment',
  'castle-rock': 'Castle Rock',
  'd-and-c': 'D & C',
  'f-up': 'F-Up',
  'find-your-fitness': 'Find Your Fitness',
  'general-inspection': 'General Inspection',
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
  'troy-fire': 'Troy Fire',
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
  'sweet-roast': [
    'https://www.youtube.com/embed/Nt_7rNOS608',
    'https://www.youtube.com/embed/jrXz6RH11H4',
  ],
  'total-stone': [
    'https://www.youtube.com/embed/nzAmGCEWE9w',
    'https://www.youtube.com/embed/EX4lStlaAfU',
  ],
  'general-inspection': ['https://www.youtube.com/embed/tGsO9UTvWgA'],
};

// --- Project-specific PDF cover overrides (when name doesn’t match convention) ---
const pdfCoverOverrides = {
  'solid-oak': {
    // Example: bro-sore.pdf uses bro-sore-cover.png
    'bro-sore.pdf': 'bro-sore-cover.png',
  },
  'troy-fire': {
    // You said: troy-fire-brand-idenity.pdf + brand-identity-cover.png
    'troy-fire-brand-idenity.pdf': 'brand-identity-cover.png',
  },
};

// --- Optional: project-specific image excludes (if you accidentally leave extra PNG pages in folder) ---
const imageExcludePatterns = {
  'solid-oak': [
    /^bro-sore-\d+\.png$/i, // bro-sore-01.png ... bro-sore-08.png (if any remain)
  ],
  'vpcs': [
    /^booklet-(7|8|9|10)\.png$/i, // keep booklet-6.png, hide 7-10 if present
  ],
};

function prettifyLabel(filename = '') {
  const base = filename.replace(/\.[^/.]+$/, '');
  return base
    .replace(/[-_]+/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function stripExt(filename = '') {
  return filename.replace(/\.[^/.]+$/, '');
}

function isThumbnail(file) {
  const lower = file.toLowerCase();
  return (
    lower === 'thumbnail.png' ||
    lower === 'thumbnail.jpg' ||
    lower === 'thumbnail.jpeg' ||
    lower === 'thumbnail.webp'
  );
}

function isCoverImage(file) {
  return /-cover\.(png|jpg|jpeg|webp)$/i.test(file);
}

function shouldExcludeImage(project, file) {
  const patterns = imageExcludePatterns[project] || [];
  return patterns.some((rx) => rx.test(file));
}

// --- Helper: read files in /public/portfolio/[project] ---
async function getProjectFiles(projectName) {
  const projectDir = path.join(process.cwd(), 'public', 'portfolio', projectName);

  try {
    const allFiles = await fs.readdir(projectDir);

    const cleaned = allFiles.filter((file) => {
      const lower = file.toLowerCase();
      if (lower.startsWith('.')) return false;
      if (isThumbnail(file)) return false;
      return true;
    });

    const imageFilesRaw = cleaned.filter((f) => /\.(png|jpg|jpeg|webp|gif)$/i.test(f));
    const pdfFiles = cleaned.filter((f) => /\.pdf$/i.test(f));

    // build pdfItems = [{file, cover, label}]
    const pdfItems = pdfFiles
      .sort((a, b) => a.localeCompare(b))
      .map((pdfFile) => {
        // 1) override cover mapping if provided
        const override = pdfCoverOverrides?.[projectName]?.[pdfFile] || null;

        // 2) otherwise use convention: <pdf-base>-cover.png (or jpg/jpeg/webp)
        const base = stripExt(pdfFile);
        const candidates = [
          `${base}-cover.png`,
          `${base}-cover.jpg`,
          `${base}-cover.jpeg`,
          `${base}-cover.webp`,
        ];

        const cover =
          override ||
          candidates.find((c) => imageFilesRaw.some((img) => img.toLowerCase() === c.toLowerCase())) ||
          null;

        return {
          file: pdfFile,
          cover,
          label: prettifyLabel(pdfFile),
        };
      });

    // hide cover images (they will appear on the PDF cards instead)
    const coverImagesToHide = new Set(
      pdfItems
        .map((p) => p.cover)
        .filter(Boolean)
        .map((c) => c.toLowerCase())
    );

    const imageFiles = imageFilesRaw
      .filter((img) => {
        if (coverImagesToHide.has(img.toLowerCase())) return false;
        if (isCoverImage(img)) return false; // hide any -cover images even if they aren’t matched
        if (shouldExcludeImage(projectName, img)) return false;
        return true;
      })
      .sort((a, b) => a.localeCompare(b));

    return { imageFiles, pdfItems };
  } catch (error) {
    console.error(`Could not read directory for project: ${projectName}`, error);
    return { imageFiles: [], pdfItems: [] };
  }
}

export async function generateStaticParams() {
  return Object.keys(projectDisplayNames).map((key) => ({ project: key }));
}

export default async function ProjectPage({ params }) {
  const { project } = await params;

  if (!project || !projectDisplayNames[project]) {
    notFound();
  }

  const displayName = projectDisplayNames[project];
  const externalLink = externalLinks[project];
  const videos = youtubeVideos[project] || [];

  const { imageFiles, pdfItems } = await getProjectFiles(project);

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
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}

        {/* PDFs in Lightbox (new cover-card UI) */}
        <PdfLightboxGallery pdfItems={pdfItems} project={project} displayName={displayName} />

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
