/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.NEXT_PUBLIC_WORDPRESS_URL],
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
