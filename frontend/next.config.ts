module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://65.1.1.29:7070/api/:path*",
      },
    ];
  },
}