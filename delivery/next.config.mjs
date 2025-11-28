/** @type {import('next').NextConfig} */
const nextConfig = {
  env: { BACKEND_URL: process.env.BACKEND_URL },
  images: {
    remotePatterns: [
      {
        protocol: "https",

        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
