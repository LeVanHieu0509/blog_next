/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  baseUrl: ".",
  paths: {
    "~/*": ["src/*"],
    "@/components/*": ["./components/*"],
  },
};

module.exports = nextConfig;
