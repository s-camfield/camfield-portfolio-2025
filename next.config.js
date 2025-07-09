/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  // Add transpilation for Sanity packages if needed
  transpilePackages: ['sanity'],
};

module.exports = nextConfig;
