/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'api.chulabook.com',
          },  
          {
            hostname: 'utfs.io',
          },
        ],
      },
};

export default nextConfig;
