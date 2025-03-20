/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['raw.githubusercontent.com'],
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  // GitHub Pages uses this as the base path
  basePath: '',
  // Changed to always use absolute path for assets
  assetPrefix: '/',
  // Use a temporary build directory
  distDir: '.next-temp',
  // Ensure proper static asset handling
  poweredByHeader: false,
  generateEtags: false,
}

module.exports = nextConfig 