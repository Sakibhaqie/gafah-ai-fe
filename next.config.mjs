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
  experimental: {
    instrumentationHook: false,
  },
  // Let Nginx handle the routing instead
};

export default nextConfig;