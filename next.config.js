/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/admin/about",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
