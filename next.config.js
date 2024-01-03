const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ hostname: process.env.NEXT_PUBLIC_WORDPRESS_URL }],
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = withPWA(nextConfig)
