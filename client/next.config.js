/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env:{
    NEXT_PUBLIC_ZEGO_APP_ID:1414929017,
    NEXT_PUBLIC_ZEGO_SERVER_ID:"068fdb960f7e309aa5d8e8034b3568f4",
  },
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
