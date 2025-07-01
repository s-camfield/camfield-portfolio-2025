// app/api/projects/route.js
import { promises as fs } from 'fs';
import path from 'path';

// Custom display names for projects
const projectDisplayNames = {
  '66': 'Enterprises 66, LLC',
  'baca': 'Baca',
  // Add more custom names as needed
};

export async function GET() {
  try {
    const portfolioDir = path.join(process.cwd(), 'public/portfolio');
    const projects = await fs.readdir(portfolioDir);
    
    const projectFolders = [];
    
    for (const project of projects) {
      try {
        const stats = await fs.stat(path.join(portfolioDir, project));
        if (stats.isDirectory()) {
          // Get display name from custom mapping or format from folder name
          const displayName = projectDisplayNames[project] || project.replace(/-/g, ' ')
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
          
          projectFolders.push({
            name: project,
            displayName: displayName,
          });
        }
      } catch (error) {
        console.error(`Error processing project ${project}:`, error);
      }
    }
    
    return Response.json(projectFolders);
  } catch (error) {
    console.error("Error reading portfolio directory:", error);
    return Response.json([], { status: 500 });
  }
}
