/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const path = require("path");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    disable: process.env.NODE_ENV === "development"
  },
  reactStrictMode: true,
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  },
  images: {
    domains: [
      "fakestoreapi.com",
      "api.lorem.space",
      "picsum.photos",
      "placeimg.com",
      "encrypted-tbn0.gstatic.com",
      "climate-disclosure.dedicateddevelopers.us",
      "staging-review.manifestclimate.com/climatedisclosures"
    ]
  },
  swcMinify: false,
  compress: true,
  optimizeFonts: true,
  devIndicators: {
    autoPrerender: false,
    buildActivityPosition: "bottom-right"
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production"
  },
  env: {
    NEXT_APP_BASE_URL: process.env.NEXT_APP_BASE_URL,
    NEXT_API_BASE_URL: process.env.NEXT_API_BASE_URL,
    NEXT_API_PASSWORD: process.env.NEXT_API_PASSWORD
  },
  eslint: {
    ignoreDuringBuilds: true
  }
});
