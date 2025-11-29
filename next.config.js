const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ hostname: "v-player1.co.uk" }],
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = withPWA(nextConfig)
