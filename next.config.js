/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["devjasonclarke.com", "images.pexels.com"],
  },
};

module.exports = nextConfig;
