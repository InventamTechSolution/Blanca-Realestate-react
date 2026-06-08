import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
    allowedDevOrigins: ['192.168.2.74'],
    compress: true,
    images: {
      minimumCacheTTL: 86400,
      formats: ['image/avif', 'image/webp'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
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
