import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "res.cloudinary.com" },
      { hostname: "pbs.twimg.com" },
    ],
  } /* config options here */,
};

export default nextConfig;
