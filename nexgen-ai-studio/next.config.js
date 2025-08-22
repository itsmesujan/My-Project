/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  // For static export to Netlify
  output: 'export',
  trailingSlash: true
}

module.exports = nextConfig
