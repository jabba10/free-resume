/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Link',
            value: '<https://www.professionalresumefree.com/>; rel="canonical"',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig