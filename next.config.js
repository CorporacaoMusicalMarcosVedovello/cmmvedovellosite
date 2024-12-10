/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'images.prismic.io'
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1338',
        pathname: '/uploads/**'
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com'
      }, {
        protocol: 'https',
        hostname: 'cmmv-cms-bkt.s3.us-east-1.amazonaws.com'
      }
    ]
    // domains: ["unsplash.com"],
    // formats: ["image/webp"],
  }
}

module.exports = nextConfig
