import { GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'
import { Layout } from '@/components/Layout'
import { getTags } from '@/lib/tags'
import { getPageBySlug } from '@/lib/pages'
import { getAuthors } from '@/lib/authors'


const HomePage = ({ tags = [], authors = [], title, body }) => {
  return (
    <Layout pageTitle={title}>
      <article>
        <h1>{title}</h1>

        <ReactMarkdown source={body} />

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
  const page = getPageBySlug('home')

  return {
    props: {
      ...page,
      tags,
      authors
    },
  }
}

export default HomePage
