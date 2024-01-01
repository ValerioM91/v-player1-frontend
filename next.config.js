/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    domains: [process.env.NEXT_PUBLIC_WORDPRESS_URL],
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
