/** @type {import('next').NextConfig} */
const nextBuildId = require("next-build-id")

const nextConfig = {
  generateBuildId: async () => {
    const buildId = await nextBuildId({ dir: __dirname })
    return buildId
  },
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    })
    return config
  },
}

module.exports = nextConfig
