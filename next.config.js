/** @type {import('next').NextConfig} */
const API_SERVER_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080"
    : process.env.API_SERVER_URL;

const nextConfig = {
  compress: true,
  images: {
    domains: ["files.limc.dev"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: API_SERVER_URL + "/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
