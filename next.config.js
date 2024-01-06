/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "export",
  basePath: '',
  // assetPrefix: "./",
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    DB_HOST: process.env.DB_HOST
  },
  compiler: {
    styledComponents: true
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/test',
  //       permanent: false
  //     }
  //   ];
  // }
};
export default nextConfig;
// module.exports = nextConfig;
