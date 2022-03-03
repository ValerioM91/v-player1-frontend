const path = require("path");

module.exports = {
  reactStrictMode: true,
  images: {
    domains: [process.env.NEXT_PUBLIC_WORDPRESS_URL],
  },
  compiler: {
    styledComponents: true,
  },
};
