module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://techruns.xyz',
        permanent: false,
        basePath: false
      },
     ]
  },
  reactStrictMode: true,
};
