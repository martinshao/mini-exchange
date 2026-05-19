import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: [
    '@mini-exchange/ui',
    '@mini-exchange/layout',
    '@mini-exchange/config',
    '@mini-exchange/trading-types',
    '@mini-exchange/api-client',
    '@mini-exchange/mock-data',
    '@mini-exchange/mock-stream',
    '@mini-exchange/domain-spot',
    '@mini-exchange/domain-futures',
    '@mini-exchange/domain-market',
    '@mini-exchange/domain-wallet',
    '@mini-exchange/domain-account',
    '@mini-exchange/domain-risk'
  ]
};

export default nextConfig;
