const path = require('path')
const Mode = require('frontmatter-markdown-loader/mode')

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      include: path.resolve(__dirname, 'content'),
      options: {
        mode: [
          Mode.REACT,
        ],
        react: {
          root: 'content',
        },
      },
    })
    config.module.rules.push({
      test: /\.yml$/,
      type: "json",
      use: "yaml-loader",
    })
    return config
  },
}
