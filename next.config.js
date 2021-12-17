/**
 * @type {import('next').NextConfig}
 */

const rehypePrism = require("@mapbox/rehype-prism");

const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypePrism],
  },
});

module.exports = withMDX({
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    domains: ["i.imgur.com"],
  },
  swcMinify: true,
});
