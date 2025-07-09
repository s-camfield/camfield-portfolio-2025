// app/portfolio/[project]/page.js
import Navigation from '../../../components/Navigation';
import { notFound } from 'next/navigation';
import PortfolioImage from '../../../components/PortfolioImage'; // We'll create this component

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

  // For VeteranPCS, use a specific YouTube video
  const hasYoutubeVideo = project === 'vpcs';
  const youtubeUrl = 'https://www.youtube.com/embed/qVCfntkA5bo';

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

        {/* Image Section - Use our Client Component */}
        <div className="space-y-8">
          {[1, 2, 3, 4, 5].map((num) => (
            <PortfolioImage
              key={num}
              project={project}
              imageNumber={num}
              alt={`${displayName} - Image ${num}`}
            />
          ))}
        </div>

        {/* Videos Section - YouTube Only */}
        {hasYoutubeVideo && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Videos</h2>
            <div className="relative w-full aspect-video mb-8">
              <iframe
                className="w-full h-full rounded"
                src={youtubeUrl}
                title={`${displayName} YouTube Video`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
