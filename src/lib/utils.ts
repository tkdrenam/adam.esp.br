import matter from 'gray-matter'

export const getContents = <T>(
  resolve: __WebpackModuleApi.RequireContext,
  mapper: (data: any) => T = (data) => data as T
): T[] =>
  resolve.keys().map<T>((key) => {
    const slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
    const rawContent = resolve(key)
    const { data, content } = matter(rawContent.default)
    return mapper({
      slug,
      body: content,
      ...data,
    } as any)
  })

type Slugable = { slug: string }

export const mapBySlug = <T extends Slugable>(data: T[]): { [key: string]: T } =>
  data.reduce(
    (acc, page) => ({
      ...acc,
      [page.slug]: page,
    }),
    {}
  )

export const formatDate = (date: string) => date.split('-').reverse().join('/')
