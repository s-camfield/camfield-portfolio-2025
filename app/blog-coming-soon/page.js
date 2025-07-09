import Navigation from '../components/Navigation';

export default function BlogComingSoon() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <div className="container mx-auto pt-32 px-4 pb-16 text-center">
        <h1 className="text-4xl font-bold mb-6">Blog Coming Soon</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          We're working on some amazing blog content that will be available soon. 
          Check back later for updates, insights, and more!
        </p>
      </div>
    </main>
  );
}
