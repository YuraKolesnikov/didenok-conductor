/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: ['./scss'],
    prependData: `@import "scss/main.scss";`
  }
}

module.exports = nextConfig
