module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  async redirects() {
    return [
      {
        source: '/resume',
        destination: '/resume/ShamazResume.pdf',
        permanent: true,
      },
    ]
  },
}
