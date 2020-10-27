import { getContents, mapBySlug } from '@/lib/utils'

export type Tag = {
  readonly slug: string
  readonly name: string
}

export const getTags = (): Tag[] => {
  const resolve = require.context('../../content/tags', true, /\.md$/)
  return getContents<Tag>(resolve, ({ slug, name }) => ({
    slug,
    name,
  }))
}

const tagsMap = mapBySlug(getTags())

export const getTagBySlug = (slug: string) => tagsMap[slug]
