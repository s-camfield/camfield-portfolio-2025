import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer'; // ✅ import Footer

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
            {/* scrolling content */}
            <span className="text-white text-xl md:text-2xl font-medium mx-4">Graphic Designer</span>
            <span className="text-white text-xl md:text-2xl mx-4">•</span>
            <span className="text-white text-xl md:text-2xl font-medium mx-4">Branding</span>
            <span className="text-white text-xl md:text-2xl mx-4">•</span>
            <span className="text-white text-xl md:text-2xl font-medium mx-4">Web Designer</span>
            <span className="text-white text-xl md:text-2xl mx-4">•</span>
            <span className="text-white text-xl md:text-2xl font-medium mx-4">Videography</span>
            <span className="text-white text-xl md:text-2xl mx-4">•</span>
            <span className="text-white text-xl md:text-2xl font-medium mx-4">Animation</span>
            <span className="text-white text-xl md:text-2xl mx-4">•</span>
            <span className="text-white text-xl md:text-2xl font-medium mx-4">Video Editing</span>
            <span className="text-white text-xl md:text-2xl mx-4">•</span>
            <span className="text-white text-xl md:text-2xl font-medium mx-4">Content Creation</span>
            <span className="text-white text-xl md:text-2xl mx-4">•</span>
            <span className="text-white text-xl md:text-2xl font-medium mx-4">Developer</span>
            <span className="text-white text-xl md:text-2xl mx-4">•</span>
            <span className="text-white text-xl md:text-2xl font-medium mx-4">Photography</span>
          </div>

          <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-2">
            {/* duplicate for seamless scroll */}
            <span className="text-white text-xl md:text-2xl font-medium mx-4">Graphic Designer</span>
            <span className="text-white text-xl md:text-2xl mx-4">•</span>
            <span className="text-white text-xl md:text-2xl font-medium mx-4">Branding</span>
            <span className="text-white text-xl md:text-2xl mx-4">•</span>
            <span className="text-white text-xl md:text-2xl font-medium mx-4">Web Designer</span>
            <span className="text-white text-xl md:text-2xl mx-4">•</span>
            <span className="text-white text-xl md:text-2xl font-medium mx-4">Videography</span>
            <span className="text-white text-xl md:text-2xl mx-4">•</span>
            <span className="text-white text-xl md:text-2xl font-medium mx-4">Animation</span>
            <span className="text-white text-xl md:text-2xl mx-4">•</span>
            <span className="text-white text-xl md:text-2xl font-medium mx-4">Video Editing</span>
            <span className="text-white text-xl md:text-2xl mx-4">•</span>
            <span className="text-white text-xl md:text-2xl font-medium mx-4">Content Creation</span>
            <span className="text-white text-xl md:text-2xl mx-4">•</span>
            <span className="text-white text-xl md:text-2xl font-medium mx-4">Developer</span>
            <span className="text-white text-xl md:text-2xl mx-4">•</span>
            <span className="text-white text-xl md:text-2xl font-medium mx-4">Photography</span>
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

      {/* Gradient Section with Logos */}
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

              {/* Starbursts */}
              <div className="flex space-x-4 mt-8">
                {/* Trios */}
                <div className="relative">
                  <div className="relative w-24 h-24 transition-transform duration-300 hover:scale-110 cursor-pointer">
                    <Image src="/starburst.png" alt="Starburst" fill className="object-contain" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Link href="https://www.trioscantina.com/" target="_blank">
                        <Image src="/trios-logos-04.png" alt="Trios" width={60} height={60} className="object-contain" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Total Stone */}
                <div className="relative">
                  <div className="relative w-24 h-24 transition-transform duration-300 hover:scale-110 cursor-pointer">
                    <Image src="/starburst.png" alt="Starburst" fill className="object-contain" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Link href="https://total-stone.com/" target="_blank">
                        <Image src="/ts-logos-03.png" alt="Total Stone" width={60} height={60} className="object-contain" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Veteran PCS */}
                <div className="relative">
                  <div className="relative w-24 h-24 transition-transform duration-300 hover:scale-110 cursor-pointer">
                    <Image src="/starburst.png" alt="Starburst" fill className="object-contain" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Link href="https://www.veteranpcs.com/" target="_blank">
                        <Image src="/vpcs-logos-02.png" alt="Veteran PCS" width={60} height={60} className="object-contain" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="relative">
                <Image
                  src="/steph-dress.png"
                  alt="Designer in red dress"
                  width={400}
                  height={600}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer /> {/* ✅ Footer added here */}

    </main>
  );
}
