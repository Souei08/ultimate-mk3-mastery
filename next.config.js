/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add loaders for mp3 files
    config.module.rules.push({
      test: /\.(mp3)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 8192, // You can adjust the limit as needed
          name: "static/media/[name].[hash].[ext]",
          publicPath: "/_next",
          outputPath: "static/media",
          emitFile: !isServer,
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
