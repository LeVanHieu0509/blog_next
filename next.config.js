/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  baseUrl: ".",
  paths: {
    "~/*": ["src/*"],
  },
};

module.exports = nextConfig;
