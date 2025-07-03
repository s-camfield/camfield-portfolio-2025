import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src="/field-hero-bk.png"
            alt="Camfield Designs Hero"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </section>

      {/* Scrolling Text Section */}
      <section className="bg-[#26bcab] py-8 overflow-hidden">
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap py-2">
            {[
              "Graphic Designer", "Branding", "Web Designer", "Videography", "Animation", "Video Editing", "Content Creation", "Developer", "Photography"
            ].flatMap((text, i, arr) => (
              [<span key={i} className="text-white text-xl md:text-2xl font-medium mx-4">{text}</span>, i < arr.length - 1 && <span key={`dot-${i}`} className="text-white text-xl md:text-2xl mx-4">•</span>]
            ))}
          </div>
          <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-2">
            {[
              "Graphic Designer", "Branding", "Web Designer", "Videography", "Animation", "Video Editing", "Content Creation", "Developer", "Photography"
            ].flatMap((text, i, arr) => (
              [<span key={i} className="text-white text-xl md:text-2xl font-medium mx-4">{text}</span>, i < arr.length - 1 && <span key={`dot-${i}`} className="text-white text-xl md:text-2xl mx-4">•</span>]
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/photography/photo-20.png"
            alt="Photography background"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
          <div className="max-w-xl md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              READY FOR <span className="block mt-2">
                <span className="text-5xl md:text-6xl font-normal font-dancing-script">STUNNING</span> DESIGN?
              </span>
            </h2>
            <p className="text-white text-lg md:text-xl mb-8 mt-4">
              Elevate your brand with professional design that captures your vision. 
              From logos to complete brand identities, I create custom designs 
              that make your business stand out in a competitive market.
            </p>
            <Link 
              href="/portfolio" 
              className="inline-block bg-[#26bcab] hover:bg-[#1e9d90] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 text-lg"
            >
              EXPLORE MY WORK →
            </Link>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <Image
                src="/flyers.png"
                alt="Design flyers"
                width={400}
                height={500}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

          {/* Portfolio Scrolling Section */}
      <section className="py-16 bg-[#26bcab] relative overflow-hidden">
        <h2 className="text-4xl font-bold text-center text-white mb-12 drop-shadow-lg">Portfolio</h2>
        <div className="relative w-full overflow-x-hidden">
          <div className="flex animate-scrollPortfolio w-max">
            {[
              { src: "/portfolio/66/thumbnail.png", link: "https://www.camfielddesigns.com/portfolio/66" },
              { src: "/portfolio/find-your-fitness/thumbnail.png", link: "https://www.camfielddesigns.com/portfolio/find-your-fitness" },
              { src: "/portfolio/mugzle/thumbnail.png", link: "https://www.camfielddesigns.com/portfolio/mugzle" },
              { src: "/portfolio/soldner/branding-03.png", link: "https://www.camfielddesigns.com/portfolio/soldner" },
              { src: "/portfolio/total-stone/booklet-08.png", link: "https://www.camfielddesigns.com/portfolio/total-stone" },
              // Duplicate to create seamless loop
              { src: "/portfolio/66/thumbnail.png", link: "https://www.camfielddesigns.com/portfolio/66" },
              { src: "/portfolio/find-your-fitness/thumbnail.png", link: "https://www.camfielddesigns.com/portfolio/find-your-fitness" },
              { src: "/portfolio/mugzle/thumbnail.png", link: "https://www.camfielddesigns.com/portfolio/mugzle" },
              { src: "/portfolio/soldner/branding-03.png", link: "https://www.camfielddesigns.com/portfolio/soldner" },
              { src: "/portfolio/total-stone/booklet-08.png", link: "https://www.camfielddesigns.com/portfolio/total-stone" }
            ].map(({ src, link }, idx) => (
              <a href={link} key={idx} target="_blank" rel="noopener noreferrer" className="mx-2">
                <img
                  src={src}
                  alt={`Portfolio item ${idx + 1}`}
                  className="h-64 rounded-xl transition-transform duration-300 hover:scale-105 object-cover"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Grid */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-r from-[#26bcab] to-[#134e48]">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Creating a business that flows <span className="italic" style={{ fontFamily: 'cursive' }}>effortlessly</span>
              </h2>
              <p className="text-white text-lg md:text-xl mb-8">
                For ambitious, passionate entrepreneur&apos;s ready to elevate their brand and website to the next level
              </p>
              <div className="flex space-x-4 mt-8">
                {[
                  { href: "https://www.trioscantina.com/", src: "/trios-logos-04.png" },
                  { href: "https://total-stone.com/", src: "/ts-logos-03.png" },
                  { href: "https://www.veteranpcs.com/", src: "/vpcs-logos-02.png" }
                ].map(({ href, src }, i) => (
                  <div key={i} className="relative w-24 h-24 transition-transform duration-300 hover:scale-110 cursor-pointer">
                    <Image src="/starburst.png" alt="Starburst" fill className="object-contain" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Link href={href} target="_blank">
                        <Image src={src} alt="Client Logo" width={60} height={60} className="object-contain" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center md:justify-end">
              <Image
                src="/laptop.png"
                alt="website design graphic"
                width={500}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}