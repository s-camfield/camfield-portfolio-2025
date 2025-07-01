// app/portfolio/[project]/page.js
import { promises as fs } from 'fs';
import path from 'path';
import Navigation from '../../../components/Navigation';
import { notFound } from 'next/navigation';

// Custom display names for projects
const projectDisplayNames = {
  '66': 'Enterprises 66, LLC',
  'baca': 'Baca',
  'bayshore': 'Bay Shore Equipment',
  'd-and-c': 'D & C',
  'find-your-fitness': 'Find Your Fitness',
  'sweet-roast': 'Sweet Roast',
  // Add more custom names as needed
};

// Function to get project files
async function getProjectFiles(projectName) {
  // Make sure projectName is defined
  if (!projectName) {
    console.error("Project name is undefined");
    return { images: [], videos: [] };
  }
  
  const projectDir = path.join(process.cwd(), 'public/portfolio', projectName);
  
  try {
    const files = await fs.readdir(projectDir);
    
    // Filter out hidden files and thumbnails
    const filteredFiles = files.filter(file => 
      !file.startsWith('.') && 
      !file.toLowerCase().includes('thumbnail')
    );
    
    // Sort files by number if they have numbers
    const sortedFiles = filteredFiles.sort((a, b) => {
      // Extract numbers from filenames (like -1, -2, etc.)
      const numA = parseInt(a.match(/[-](\d+)(?:\.\w+)?$/)?.[1] || '9999');
      const numB = parseInt(b.match(/[-](\d+)(?:\.\w+)?$/)?.[1] || '9999');
      return numA - numB;
    });
    
    // Group files by type
    const images = sortedFiles.filter(file => 
      file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png') || 
      (!path.extname(file) && !file.includes('.mp4'))
    );
    
    const videos = sortedFiles.filter(file => 
      file.endsWith('.mp4') || file.endsWith('.webm') || file.endsWith('.mov')
    );
    
    return { images, videos };
  } catch (error) {
    console.error("Error reading project directory:", error);
    return { images: [], videos: [] };
  }
}

export default async function ProjectPage({ params }) {
  // Await the params object to access its properties
  const { project } = await params;
  
  // Add safety check
  if (!project) {
    console.error("Project parameter is undefined");
    notFound();
    return null;
  }
  
  const files = await getProjectFiles(project);
  
  // Use custom display name if available, otherwise format from folder name
  const displayName = projectDisplayNames[project] || project.replace(/-/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <div className="container mx-auto pt-32 px-4 pb-16">
        <h1 className="text-4xl font-bold mb-6 text-center">{displayName}</h1>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-gray-700">
            {/* Project description - you can customize this or load from a file */}
            This is the {displayName} project. Here you can add a detailed description of the project,
            including the client, the challenge, your approach, and the results.
          </p>
        </div>
        
        {/* Image Gallery */}
        {files.images && files.images.length > 0 ? (
          <div className="space-y-8">
            {files.images.map((image, index) => {
              // Add .png extension if no extension
              const imagePath = path.extname(image) ? 
                `/portfolio/${project}/${image}` : 
                `/portfolio/${project}/${image}.png`;
                
              return (
                <div key={image} className="relative w-full aspect-video">
                  <img
                    src={imagePath}
                    alt={`${displayName} - Image ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center text-gray-500 my-8">
            No project images available
          </div>
        )}
        
        {/* Videos */}
        {files.videos && files.videos.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Videos</h2>
            <div className="space-y-8">
              {files.videos.map((video) => (
                <div key={video} className="relative w-full aspect-video">
                  <video 
                    controls 
                    className="w-full h-full"
                    src={`/portfolio/${project}/${video}`}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
