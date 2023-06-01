/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["fakestoreapi.com", "api.lorem.space", "media.idkids.fr"],
  },
};

module.exports = nextConfig;
