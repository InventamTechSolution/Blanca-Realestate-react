import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.2.74'],
  compress: true,
  images: {
    minimumCacheTTL: 31536000,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 414, 640, 768, 1024, 1200, 1440],
    imageSizes: [64, 96, 128, 256, 384],
    qualities: [60, 75, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'be.blanca.co.in',
        pathname: '/uploads/**',
      },
    ],
  },
  // Ensure production builds are optimized
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async headers() {
    return [
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
      {
        source: '/videos/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800',
          },
        ],
      },
    ];
  },
};

const analyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default analyzer(nextConfig);
