import { getContents, mapBySlug } from './utils'

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

export const getPosts = (): Post[] => {
  const resolve = require.context('../../content/posts', true, /\.md$/)
  return getContents<Post>(resolve)
}

const postsMap = mapBySlug(getPosts())

export const getPostBySlug = (slug: string) => postsMap[slug]
