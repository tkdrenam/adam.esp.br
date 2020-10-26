export type Post = {
  readonly slug: string
  readonly title: string
  readonly description: string
  readonly date: string
  readonly thumbnail: string
  readonly author: string
  readonly tags: string[]
  readonly body: string
}

export const getPosts = () => {
  const resolve = require.context('../../content/posts', true, /\.md$/)
  const data = resolve.keys().map<{ attributes: Post }>(resolve)
  return data.map((item) => item.attributes)
}
