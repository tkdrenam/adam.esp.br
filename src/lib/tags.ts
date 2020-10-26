import tags from '../../content/config/tags.yml'

export type TagContent = {
  readonly slug: string
  readonly name: string
}

export const getTags = (): TagContent[] => tags.tags

const generateTagMap = (): { [key: string]: TagContent } =>
  getTags().reduce(
    (acc, tag) => ({
      ...acc,
      [tag.slug]: tag,
    }),
    {}
  )

const tagMap: { [key: string]: TagContent } = generateTagMap()

export const getTag = (slug: string) => tagMap[slug]
