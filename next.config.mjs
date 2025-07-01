// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Leave empty if you don't need external image domains
  },
  eslint: {
    // This will allow the build to succeed even with ESLint warnings/errors
    ignoreDuringBuilds: true,
  },
};

// Simple export without next-transpile-modules
export default nextConfig;

