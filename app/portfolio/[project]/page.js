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
  'mohers': "Moher's",
  'mugzle': 'Mugzles', // Note: folder is 'mugzle' not 'mugzles'
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
  const videos = youtubeVideos[project] || [];

  // Generate a range of numbers for image filenames (1-15)
  const imageNumbers = Array.from({ length: 15 }, (_, i) => i + 1);

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

        {/* Image Section - Based on your file structure */}
        <div className="space-y-8">
          {/* First show the thumbnail */}
          <ProjectImage
            src={`/portfolio/${project}/thumbnail.png`}
            alt={`${displayName} - Thumbnail`}
          />
          
          {/* Special case for total-stone based on your screenshot */}
          {project === 'total-stone' && (
            <>
              <ProjectImage src={`/portfolio/${project}/booklet-08.png`} alt="Total Stone Booklet 08" />
              <ProjectImage src={`/portfolio/${project}/booklet-09.png`} alt="Total Stone Booklet 09" />
              <ProjectImage src={`/portfolio/${project}/total-stone-1.png`} alt="Total Stone 1" />
              <ProjectImage src={`/portfolio/${project}/total-stone-pro-cut-flyer-3.png`} alt="Total Stone Pro Cut Flyer" />
              <ProjectImage src={`/portfolio/${project}/total-stone-solution-logo-2.png`} alt="Total Stone Solution Logo" />
              <ProjectImage src={`/portfolio/${project}/total-stone-website-7.png`} alt="Total Stone Website" />
              <ProjectImage src={`/portfolio/${project}/ts-flyer-6.png`} alt="TS Flyer" />
              <ProjectImage src={`/portfolio/${project}/ts-flyer-vision-4.png`} alt="TS Flyer Vision" />
              <ProjectImage src={`/portfolio/${project}/ts-plate-5.png`} alt="TS Plate" />
            </>
          )}
          
          {/* Then try numbered images (1.png, 2.png, etc.) */}
          {imageNumbers.map((num) => (
            <ProjectImage
              key={`num-${num}`}
              src={`/portfolio/${project}/${num}.png`}
              alt={`${displayName} - Image ${num}`}
            />
          ))}
          
          {/* Try JPG versions too */}
          {imageNumbers.map((num) => (
            <ProjectImage
              key={`jpg-${num}`}
              src={`/portfolio/${project}/${num}.jpg`}
              alt={`${displayName} - Image ${num}`}
            />
          ))}
          
          {/* Try project-specific naming patterns based on your screenshot */}
          {project === 'soldner' && (
            <ProjectImage
              src={`/portfolio/${project}/branding-03.png`}
              alt={`${displayName} - Branding`}
            />
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
