// app/portfolio/page.js
'use client'; // This marks it as a client component

import Link from 'next/link';
import { useState } from 'react';
import Navigation from '../../components/Navigation';

// Hardcoded project list
const projects = [
  '66',
  'baca',
  'bayshore',
  'd-and-c',
  'find-your-fitness',
  'sweet-roast',
  'f-up',
  'ioc',
  'michigan',
  'mike',
  'moher',
  'mugzle',
  'soldner',
  'sunshine',
  'total-stone',
  'trios',
  'vpcs',
  'yale',
  'castle-rock',
  'solid-oak',
];

// Custom display names for projects
const projectDisplayNames = {
  '66': 'Enterprises 66, LLC',
  'baca': 'Baca',
  'bayshore': 'Bay Shore Equipment',
  'd-and-c': 'D & C',
  'find-your-fitness': 'Find Your Fitness',
  'sweet-roast': 'Sweet Roast',
  'f-up': 'F-Up',
  'ioc': 'IOC',
  'michigan': 'Michigan',
  'mike': 'Mike',
  'moher': 'Moher',
  'mugzle': 'Mugzle',
  'soldner': 'Soldner',
  'sunshine': 'Sunshine',
  'total-stone': 'Total Stone',
  'trios': 'Trios',
  'vpcs': 'VPCS',
  'yale': 'Yale',
  'castle-rock': 'Castle Rock',
  'solid-oak': 'Solid Oak',
};

// Project card component with hover state
function ProjectCard({ project, displayName }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link 
      href={`/portfolio/${project}`} 
      className="block relative overflow-hidden rounded-lg shadow-lg aspect-square"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image with zoom effect */}
      <div className="w-full h-full overflow-hidden">
        <img
          src={`/portfolio/${project}/thumbnail.png`}
          alt={displayName}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
          }}
        />
      </div>
      
      {/* Teal overlay with project name */}
      <div 
        className="absolute inset-0 flex items-center justify-center transition-all duration-300"
        style={{
          backgroundColor: isHovered ? 'rgba(38, 188, 171, 0.8)' : 'rgba(38, 188, 171, 0)'
        }}
      >
        <h3 
          className="text-white text-xl md:text-2xl font-bold px-4 text-center transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0
          }}
        >
          {displayName}
        </h3>
      </div>
    </Link>
  );
}

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <div className="container mx-auto pt-32 px-4 pb-16">
        <h1 className="text-4xl font-bold mb-12 text-center">Portfolio</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const displayName = projectDisplayNames[project] || project.replace(/-/g, ' ')
              .split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
              
            return (
              <ProjectCard 
                key={project} 
                project={project} 
                displayName={displayName} 
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
