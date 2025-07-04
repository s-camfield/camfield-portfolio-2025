'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/' || pathname === '/about' || pathname === '/contact') {
      const script = document.createElement('script');
      script.src = 'https://snapwidget.com/js/snapwidget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, [pathname]);

  const showInstagram = pathname === '/' || pathname === '/about' || pathname === '/contact';

  return (
    <footer className="bg-white border-t mt-16 text-gray-800">
      {/* Instagram Feed (only on homepage, about, and contact) */}
      {showInstagram && (
        <div className="overflow-hidden">
          <iframe
            src="https://snapwidget.com/embed/1101382"
            className="snapwidget-widget w-full h-[280px]"
            frameBorder="0"
            scrolling="no"
            style={{ border: 'none', overflow: 'hidden', width: '100%', height: '280px' }}
            title="Instagram Feed"
          ></iframe>
        </div>
      )}

      {/* Footer Content */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="font-semibold uppercase mb-4">Camfield Designs</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/portfolio" className="hover:underline">Portfolio</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold uppercase mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/steph_field12"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <Image
                src="/icons/youtube.svg"
                alt="YouTube"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold uppercase mb-4">Hours</h3>
          <p>Monday – Friday</p>
          <p>9:00 AM – 5:00 PM</p>
        </div>

        <div className="flex items-center justify-center md:justify-end">
          <Image
            src="/logo-footer.svg"
            alt="Camfield Designs Logo"
            width={100}
            height={48}
            className="opacity-60"
          />
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 pb-6">
        &copy; {new Date().getFullYear()} Camfield Designs. All rights reserved.
      </div>
    </footer>
  );
}