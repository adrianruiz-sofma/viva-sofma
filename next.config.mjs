/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/viva-sofma', // 👈 nombre exacto de tu repo
};

export default nextConfig;
