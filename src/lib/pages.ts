import { getContents, mapBySlug } from '@/lib/utils'

export type Page = {
  readonly slug: string
  readonly title: string
  readonly body: string
}

export const getPages = (): Page[] => {
  const resolve = require.context('../../content/pages', true, /\.md$/)
  return getContents<Page>(resolve)
}

const pagesMap = mapBySlug(getPages())

export const getPageBySlug = (slug: string) => pagesMap[slug]
