import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ['image/avif','image/webp'],
    remotePatterns: [
      {
        protocol:'https',
        hostname:'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
      }
    ],
  
  },
};

export default nextConfig;
