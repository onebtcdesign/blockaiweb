/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'standalone',
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: ['images.unsplash.com'],
  },
  eslint: {
    // 为部署时忽略 ESLint 错误
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 为部署时忽略 TypeScript 错误
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
