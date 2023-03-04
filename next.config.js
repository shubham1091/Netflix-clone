/** @type {import('next').NextConfig} */

const { hostname } = require('os');

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
      },
      {
        protocol:'https',
        hostname: 't.ly'
      }
    ],
  },
}