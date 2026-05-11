import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
    allowedDevOrigins: ['192.168.2.74'],
    compress: true,
    images: {
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
};

const analyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default analyzer(nextConfig);
