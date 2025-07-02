// components/Navigation.js
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Semi-transparent teal background overlay */}
      <div className="absolute inset-0 bg-[#26bcab] bg-opacity-80 backdrop-blur-sm"></div>
      
      <div className="container mx-auto relative z-10 p-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="z-50">
            <Image 
              src="/camfield-logo-horiz-white.svg" 
              alt="Camfield Designs" 
              width={180} 
              height={90} 
              className="ml-4" 
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 text-white">
            <Link href="/portfolio" className="hover:opacity-80 transition-opacity">
              PORTFOLIO
            </Link>
            <Link href="/photography" className="hover:opacity-80 transition-opacity">
              PHOTOGRAPHY
            </Link>
            <Link href="/about" className="hover:opacity-80 transition-opacity">
              ABOUT
            </Link>
            <Link href="/contact" className="hover:opacity-80 transition-opacity">
              CONTACT
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Image 
              src="/hamburger-icon.png" 
              alt="Menu" 
              width={24} 
              height={24} 
            />
          </button>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-[#26bcab] bg-opacity-95 flex flex-col items-center justify-center md:hidden">
              <div className="flex flex-col items-center space-y-8 text-white text-xl">
                <Link 
                  href="/portfolio" 
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:opacity-80 transition-opacity"
                >
                  PORTFOLIO
                </Link>
                <Link 
                  href="/photography" 
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:opacity-80 transition-opacity"
                >
                  PHOTOGRAPHY
                </Link>
                <Link 
                  href="/about" 
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:opacity-80 transition-opacity"
                >
                  ABOUT
                </Link>
                <Link 
                  href="/contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:opacity-80 transition-opacity"
                >
                  CONTACT
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}