import authors from '../../content/config/authors.yml'

export type AuthorContent = {
  readonly slug: string
  readonly name: string
}

export const getAuthors = (): AuthorContent[] => authors.authors

const generateAuthorMap = (): { [key: string]: AuthorContent } =>
  getAuthors().reduce(
    (acc, author) => ({
      ...acc,
      [author.slug]: author,
    }),
    {}
  )

const authorMap: { [key: string]: AuthorContent } = generateAuthorMap()

export const getAuthor = (slug: string) => authorMap[slug]
