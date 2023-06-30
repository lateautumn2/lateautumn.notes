const { withContentlayer } = require("next-contentlayer")


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ['image/avif', 'image/webp'],
  },
  swcMinify: true,
  experimental: {
    appDir: true,
  },
}

module.exports = withContentlayer(nextConfig)
