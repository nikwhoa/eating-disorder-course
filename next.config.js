/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_HOST: process.env.DB_HOST
  },
  output: 'export',
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
