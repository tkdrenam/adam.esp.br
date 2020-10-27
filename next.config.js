const path = require('path')

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      include: path.resolve(__dirname, 'content'),
      use: 'raw-loader',
    })
    return config
  },
}
