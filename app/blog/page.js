// app/blog/page.js
import Navigation from '../../components/Navigation';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <div className="container mx-auto pt-32 px-4 pb-16">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <p className="text-lg text-gray-700">
          Our blog posts will appear here soon.
        </p>
      </div>
    </main>
  );
}
