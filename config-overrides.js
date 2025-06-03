const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const webpack = require("webpack");

module.exports = function override(config, env) {
  // Only apply these optimizations in production
  if (env === "production") {
    // Optimize chunks
    config.optimization = {
      ...config.optimization,
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true, // Remove console.logs in production
              drop_debugger: true,
              pure_funcs: [
                "console.log",
                "console.info",
                "console.debug",
                "console.warn",
              ],
            },
            mangle: true,
            output: {
              comments: false,
            },
          },
          extractComments: false,
        }),
      ],
      splitChunks: {
        chunks: "all",
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1];
              return `vendor.${packageName.replace("@", "")}`;
            },
          },
          images: {
            test: /\.(png|jpe?g|gif|svg|avif)$/i,
            name: "images",
            chunks: "all",
            enforce: true,
          },
          styles: {
            name: "styles",
            test: /\.css$/,
            chunks: "all",
            enforce: true,
          },
        },
      },
    };

    // Add compression plugins
    config.plugins.push(
      new CompressionPlugin({
        algorithm: "gzip",
        test: /\.(js|css|html|svg|png|jpe?g|gif|avif)$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.optimize.ModuleConcatenationPlugin()
    );

    // Configure output for better caching
    config.output = {
      ...config.output,
      filename: "static/js/[name].[contenthash:8].js",
      chunkFilename: "static/js/[name].[contenthash:8].chunk.js",
      assetModuleFilename: "static/media/[name].[hash:8][ext]",
    };

    // Configure module rules for images
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|avif)$/i,
      type: "asset",
      parser: {
        dataUrlCondition: {
          maxSize: 8 * 1024, // 8kb
        },
      },
      generator: {
        filename: "static/media/[name].[hash:8][ext]",
      },
    });

    // Add performance hints
    config.performance = {
      hints: "warning",
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    };
  }

  return config;
};
