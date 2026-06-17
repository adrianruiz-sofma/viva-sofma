/** @type {import('next').NextConfig} */
const nextConfig = {
  // Le dice a Next.js que el sitio vive dentro de la carpeta /viva-sofma
  basePath: "/viva-sofma",
  
  // Apaga la optimización de imágenes (GitHub Pages no lo soporta)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;