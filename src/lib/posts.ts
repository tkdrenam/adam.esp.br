export type PostContent = {
  readonly slug: string
  readonly title: string
  readonly description: string
  readonly date: string
  readonly thumbnail: string
  readonly author: string
  readonly tags: string[]
  readonly body: string
}

export const getPosts = (): PostContent[] => {
  const resolve = require.context('../../content/posts', true, /\.md$/)
  const posts = resolve.keys().map<{ attributes: PostContent }>(resolve)
  return posts.map((post) => post.attributes)
}
