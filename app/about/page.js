import Navigation from '../../components/Navigation';

export default function About() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navigation />
      <div className="container mx-auto pt-24 px-4">
        <h1 className="text-4xl font-bold mb-8">About</h1>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6">
            I am a graphic designer with experience since 2014. My expertise spans across various 
            design disciplines including branding, logo design, redesign, content creation, 
            photography, videography, animation, web design and web development.
          </p>
          
          <p className="text-lg mb-6">
            I believe in creating designs that not only look beautiful but also effectively 
            communicate your message and connect with your audience. My approach combines 
            creativity with strategic thinking to deliver results that exceed expectations.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">Services</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Branding & Identity Design</li>
            <li>Logo Design & Redesign</li>
            <li>Content Creation</li>
            <li>Photography</li>
            <li>Videography</li>
            <li>Animation</li>
            <li>Web Design</li>
            <li>Web Development</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
