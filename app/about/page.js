import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

export default function About() {
  return (
    <main className="bg-white min-h-screen">
      <Navigation />

      <section className="pt-24 px-4 pb-16 max-w-5xl mx-auto text-gray-800">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative w-full h-auto">
            <Image
              src="/about-steph.png"
              alt="Stephanie Camfield"
              width={600}
              height={800}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* Text Content */}
          <div>
            <h1 className="text-4xl font-bold mb-6 text-[#27bdab]">Meet Stephanie</h1>
            <p className="text-lg mb-4 leading-relaxed">
              I'm a creative professional who's passionate about the artistic side of business.
              Whether it's designing a brand identity, capturing the perfect image, or building an
              interactive website, I love figuring out how to tell each project's unique story.
            </p>

            <p className="text-lg mb-4 leading-relaxed">
              When I'm not designing, I'm either traveling, hiking a new trail, or spending time with
              my two boys. My work is driven by a love of storytelling, clean aesthetics, and helping
              others bring their visions to life.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              I take pride in delivering designs that not only look amazing, but also solve real
              problems, connect with audiences, and elevate brands.
            </p>

            <Link
              href="/contact"
              className="inline-block bg-[#27bdab] hover:bg-[#1ca595] text-white font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Work With Me →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 
