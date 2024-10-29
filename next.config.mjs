/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'encrypted-tbn0.gstatic.com',
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
          },
        ],

      },
};

export default nextConfig;
