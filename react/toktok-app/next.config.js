/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'www.australiangeographic.com.au',
    ],
  },
};

module.exports = nextConfig;