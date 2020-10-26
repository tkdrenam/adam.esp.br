export type Author = {
  readonly name: string
}

export const getAuthors = () => {
  const resolve = require.context('../../content/authors', true, /\.md$/)
  const data = resolve.keys().map<{ attributes: Author }>(resolve)
  return data.map((item) => item.attributes)
}
