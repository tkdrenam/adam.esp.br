export type Tag = {
  readonly name: string
}

export const getTags = () => {
  const resolve = require.context('../../content/tags', true, /\.md$/)
  const data = resolve.keys().map<{ attributes: Tag }>(resolve)
  return data.map((item) => item.attributes)
}
