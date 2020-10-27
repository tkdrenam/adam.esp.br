import { GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'
import { Layout } from '@/components/Layout'
import { getPageBySlug } from '@/lib/pages'

const HistoryPage = ({ title, body }) => {
  return (
    <Layout pageTitle="História do Clube">
      <h1>{title}</h1>

      <article>
        <ReactMarkdown source={body} />
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const page = getPageBySlug('history')

  return {
    props: {
      ...page,
    },
  }
}

export default HistoryPage
