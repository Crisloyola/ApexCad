/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Mantienes la exportación estática
  images: {
    unoptimized: true, // Deshabilita la optimización de imágenes
  },
};

module.exports = nextConfig;
