import { GetStaticProps } from 'next'
import { Layout } from '@/components/Layout'
import { attributes, react as HomeContent } from '../../content/pages/home.md'
import { getTags } from '@/lib/tags'
import { getAuthors } from '@/lib/authors'

const HomePage = ({ tags, authors }) => {
  const { title } = attributes

  return (
    <Layout pageTitle={title}>
      <article>
        <h1>{title}</h1>

        <HomeContent />

        <div>
          <strong>Tags</strong>
          <pre>{JSON.stringify(tags, null, 2)}</pre>
        </div>

        <div>
          <strong>Authors</strong>
          <pre>{JSON.stringify(authors, null, 2)}</pre>
        </div>
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const tags = getTags()
  const authors = getAuthors()

  return {
    props: {
      tags,
      authors
    },
  }
}

export default HomePage
