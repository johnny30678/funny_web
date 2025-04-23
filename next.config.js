/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
  },
  output: 'standalone',
  experimental: {
    appDir: true
  }
};

module.exports = nextConfig; 