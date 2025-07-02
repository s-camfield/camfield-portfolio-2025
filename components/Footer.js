// components/Footer.js
import { useEffect } from 'react';
import Image from 'next/image';

export default function Footer() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://snapwidget.com/js/snapwidget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <footer className="bg-white border-t mt-16 text-gray-800">
      {/* Instagram Feed */}
      <div className="overflow-hidden">
        <iframe
          src="https://snapwidget.com/embed/1101382"
          className="snapwidget-widget w-full h-[280px]"
          allowTransparency="true"
          frameBorder="0"
          scrolling="no"
          style={{ border: 'none', overflow: 'hidden', width: '100%', height: '280px' }}
          title="Instagram Feed"
        ></iframe>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Column 1: Company Info */}
        <div>
          <h3 className="font-semibold uppercase mb-4">Camfield Designs</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/portfolio" className="hover:underline">Portfolio</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Column 2: Follow Us */}
        <div>
          <h3 className="font-semibold uppercase mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/steph_field12" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="/icons/instagram.svg" alt="Instagram" className="h-6 w-6" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <img src="/icons/youtube.svg" alt="YouTube" className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Column 3: Hours */}
        <div>
          <h3 className="font-semibold uppercase mb-4">Hours</h3>
          <p>Monday – Friday</p>
          <p>9:00 AM – 5:00 PM</p>
        </div>

        {/* Column 4: Logo */}
        <div className="flex items-center justify-center md:justify-end">
          <img src="/logo-footer.svg" alt="Camfield Designs Logo" className="h-12 opacity-60" />
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-xs text-gray-400 pb-6">
        &copy; {new Date().getFullYear()} Camfield Designs. All rights reserved.
      </div>
    </footer>
  );
}