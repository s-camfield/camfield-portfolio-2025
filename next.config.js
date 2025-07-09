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
  // Add this configuration to reduce function size
  output: 'standalone',
  experimental: {
    // Configure output file tracing to exclude large directories
    outputFileTracingExcludes: {
      '*': [
        'node_modules/@swc/core-linux-x64-gnu',
        'node_modules/@swc/core-linux-x64-musl',
        'node_modules/@esbuild/linux-x64',
        'node_modules/sharp/vendor',
        '.git',
        '.next/cache',
        'sanity/node_modules',
      ],
    },
  },
};

module.exports = nextConfig;
