/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
  },
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
  experimental: {
    esmExternals: false,
  },
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
