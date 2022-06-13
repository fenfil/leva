/* eslint-disable no-param-reassign */
import 'dotenv/config';

import { NextConfig } from 'next';
import withNextCircularDeps from 'next-circular-dependency';
import withFonts from 'next-fonts';
import withOffline from 'next-offline';

const nextConfig: Partial<NextConfig> = {
  exclude: /node_modules/,
  reactStrictMode: true,
  inlineImageLimit: 0,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    UI_URL: process.env.UI_URL,
    API_EXTERNAL_URL: process.env.API_EXTERNAL_URL,
  },
};

// eslint-disable-next-line import/no-default-export
export default withNextCircularDeps(withFonts(withOffline(nextConfig)));
