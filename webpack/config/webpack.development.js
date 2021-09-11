module.exports = () => ({
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: true, importLoaders: 1 },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env', 'autoprefixer']],
              },
            },
          },
        ],
      },
      {
        test: /\.(scss|sass)/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  // plugins: [
  //   new ESLintPlugin({
  //     extensions: ['js', 'ts', 'tsx', 'jsx'],
  //     fix: true,
  //     failOnError: true,
  //     failOnWarning: true,
  //   }),
  // ],
  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 3000,
    client: {
      logging: 'warn',
      progress: true,
    },
    open: true,
    hot: true,
  },
});
