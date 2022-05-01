const path = require("path");

module.exports = {
  reactStrictMode: true,
  images: {
    domains: [process.env.NEXT_PUBLIC_WORDPRESS_URL],
  },
  compiler: {
    styledComponents: true,
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|wepb|gif)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=9999999999, must-revalidate",
          },
        ],
      },
    ];
  },
};
