module.exports = {
  trailingSlash: true,
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