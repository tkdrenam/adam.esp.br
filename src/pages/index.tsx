import { GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'
import { Layout } from '@/components/Layout'
import { getTags } from '@/lib/tags'
import { getPageBySlug } from '@/lib/pages'
import { getAuthors } from '@/lib/authors'

const HomePage = ({ contact, home, tags = [], authors = [] }) => {
  return (
    <Layout title={home.title} contact={contact}>
      <article>
        <h2>{home.title}</h2>

        <ReactMarkdown source={home.body} />

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
  const contact = getPageBySlug('contact')
  const home = getPageBySlug('home')
  const tags = getTags()
  const authors = getAuthors()

  return {
    props: {
      contact,
      home,
      tags,
      authors,
    },
  }
}

export default HomePage
