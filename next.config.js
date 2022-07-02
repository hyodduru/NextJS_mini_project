/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["s3.ap-northeast-2.amazonaws.com"],
  },
};

module.exports = nextConfig;

// const withLess = require("@zeit/next-less");

// // fix: prevents error when .less files are required by node
// if (typeof require !== "undefined") {
//   require.extensions[".less"] = (file) => {};
// }

// module.exports = withLess({
//   lessLoaderOptions: {
//     javascriptEnabled: true,
//   },
// });
