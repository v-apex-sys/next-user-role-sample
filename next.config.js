const deploymentEnv = process.env.APP_ENV || 'development';

// 変数での出しわけができなかったのでこのようにしてます（気になったら変更いただいても）
import localEnvFile from './.env/local.js';
import devEnvFile from './.env/development.js';
import prodEnvFile from './.env/production.js';

const environment =
  deploymentEnv === 'local'
    ? localEnvFile
    : deploymentEnv === 'development'
    ? devEnvFile
    : prodEnvFile;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: { APP_ENV: process.env.APP_ENV, ...environment },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${environment.API_URL}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
