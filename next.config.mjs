/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: "/gafah",
  assetPrefix: "/gafah/",
  // Let Nginx handle the routing instead
};

export default nextConfig;