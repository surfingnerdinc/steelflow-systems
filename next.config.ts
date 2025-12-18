import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Ensure trailing slashes are handled consistently
  trailingSlash: false,
  // Skip trailing slash redirect for better SEO
  skipTrailingSlashRedirect: false,
};

export default withNextIntl(nextConfig);
