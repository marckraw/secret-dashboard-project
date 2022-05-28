/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins')
const bundleAnalyzer = require('@next/bundle-analyzer')
const { withSentryConfig } = require('@sentry/nextjs');

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withSentryConfig(withPlugins([
  [withBundleAnalyzer],
], {
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
  reactStrictMode: true,
}), {silent: true, dryRun: process.env.VERCEL !== '1'})

