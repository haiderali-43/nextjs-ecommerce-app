/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:8000/api/:path*",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindui.com",
        pathname: "/**/*",
      },
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        pathname: "/**/*",
      }
    ],
  },
};

export default nextConfig;
