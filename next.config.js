/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    images: {
      remotePattern: [{ hostname: "images.unsplash.com", protocol: "https" }]
    },
    serverActions: true,
  }
}

module.exports = nextConfig
