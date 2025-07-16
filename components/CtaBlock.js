// components/CtaBlock.js
import Image from 'next/image';
import Link from 'next/link';

export default function CtaBlock() {
  return (
    <div className="relative my-16 p-8 md:p-12 rounded-lg overflow-hidden bg-gradient-to-r from-[#26bcab] to-[#134e48] text-white">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Creating a business that flows <span className="italic font-serif">effortlessly</span>
          </h2>
          <p className="text-lg opacity-90 mb-6">
            Elevate your brand with professional design that captures your vision.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white hover:bg-gray-200 text-[#26bcab] font-bold py-3 px-8 rounded-full transition-colors duration-300"
          >
            Contact now
          </Link>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center z-10">
          <div className="relative w-full max-w-sm h-64 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/portfolio/soldner/branding-03.png"
              alt="Soldner branding mockup"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
