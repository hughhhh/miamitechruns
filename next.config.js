module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://techruns.xyz',
        permanent: false,
        basePath: false
      },
      {
        source: '/guests',
        destination: 'https://concentric-piranha-k2bfs72v0xzwp1pr9j0tlpux.herokudns.com',
        permanent: false,
      },
     ]
  },
  reactStrictMode: true,
};
