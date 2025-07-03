'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      e.target.reset();
    }, 1000);
  };

  return (
    <main className="bg-white min-h-screen text-gray-800">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <div className="relative w-full h-full">
          <Image
            src="/photography/photo-8.png"
            alt="Hero background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
              Let me grab a pen!
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#f8f8f8] py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#27bdab]">For commissions or project inquiries:</h2>
            <p className="text-lg">Please email me directly at:</p>
            <a
              href="mailto:Stephanie@camfielddesigns.com"
              className="text-[#27bdab] text-xl font-semibold underline break-words"
            >
              Stephanie@camfielddesigns.com
            </a>
            <p className="text-sm text-gray-500">— or send me a message using this form:</p>
          </div>

          {/* Right Column: Form or Confirmation */}
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 w-full bg-white p-6 rounded-xl shadow-md"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-medium">First Name</label>
                  <input
                    type="text"
                    name="First Name"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#27bdab]"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Last Name</label>
                  <input
                    type="text"
                    name="Last Name"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#27bdab]"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 font-medium">Email *</label>
                <input
                  type="email"
                  name="Email"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#27bdab]"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Message</label>
                <textarea
                  name="Message"
                  rows="5"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#27bdab]"
                />
              </div>

              <button
                type="submit"
                className="bg-[#27bdab] hover:bg-[#1ca595] text-white font-bold py-3 px-8 rounded-full transition duration-300"
              >
                Submit
              </button>
            </form>
          ) : (
            <div className="p-8 bg-white rounded-xl shadow-md text-center space-y-4">
              <h3 className="text-2xl font-bold text-[#27bdab]">Thanks for reaching out!</h3>
              <p className="text-gray-700 text-lg">I’ll get back to you as soon as I can.</p>
              <Link
                href="/"
                className="inline-block mt-4 bg-[#27bdab] hover:bg-[#1ca595] text-white font-bold py-3 px-6 rounded-full transition duration-300"
              >
                Back to Home
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}