/** @type {import('next').NextConfig} */
const nextConfig = {
  
  reactStrictMode: true,
};

module.exports = nextConfig;

const path = require("path");

module.exports = {
  images: {
    domains: ['img.freepik.com'],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname),
    };

    return config;
  },
};
