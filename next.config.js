const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

module.exports = withMDX({
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    domains: ["i.imgur.com"],
  },
});
