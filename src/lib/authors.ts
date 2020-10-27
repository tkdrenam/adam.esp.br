import { getContents, mapBySlug } from '@/lib/utils'

export type Author = {
  readonly slug: string
  readonly name: string
}

export const getAuthors = (): Author[] => {
  const resolve = require.context('../../content/authors', true, /\.md$/)
  return getContents<Author>(resolve)
}

const authorsMap = mapBySlug(getAuthors())

export const getAuthorBySlug = (slug: string) => authorsMap[slug]
