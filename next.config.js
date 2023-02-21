/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    domains: [
      "setlinn.s3.us-east-1.amazonaws.com",
      "lh3.googleusercontent.com",
      "setlinn.com",
      "i.giphy.com",
      "awoyama.com"
    ]
  }
};

module.exports = nextConfig;
