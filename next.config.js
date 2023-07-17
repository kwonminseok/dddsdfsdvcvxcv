/** @type {import('next').NextConfig} */
const nextBuildId = require("next-build-id")
const { redirect } = require("next/dist/server/api-utils")
const { i18n } = require("./next-i18next.config")

const nextConfig = {
  generateBuildId: async () => {
    const buildId = await nextBuildId({ dir: __dirname })
    return buildId
  },
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  i18n,

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
