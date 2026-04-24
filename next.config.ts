import type { NextConfig } from "next";
import { existsSync } from 'fs';

const LOCAL_ENTRY = '/Users/itadmin/Documents/Cursor/finity-design-system/dist/index.mjs';
const hasLocal = existsSync(LOCAL_ENTRY);

const nextConfig: NextConfig = {
  turbopack: {},
  ...(hasLocal && {
    webpack: (config) => {
      config.resolve.alias['@finity/design-system'] = LOCAL_ENTRY;
      return config;
    },
  }),
};

export default nextConfig;
