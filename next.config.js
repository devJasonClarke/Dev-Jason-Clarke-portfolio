/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public"
});

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["devjasonclarke.com", "images.pexels.com", "images.unsplash.com"]
  },
  typescript: {
    ignoreBuildErrors: true
  }
});
