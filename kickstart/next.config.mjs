/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  swcMinify: false,
  compiler: {
    removeConsole: false,
    styledComponents: true,
  },
  optimizeFonts: false,
};

export default nextConfig;
