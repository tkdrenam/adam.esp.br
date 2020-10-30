import { GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'
import { Layout } from '@/components/Layout'
import { getPageBySlug } from '@/lib/pages'

const HistoryPage = ({ contact, history }) => {
  return (
    <Layout title="História do Clube" contact={contact}>
      <h2>{history.title}</h2>

      <article>
        <ReactMarkdown source={history.body} />
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const contact = getPageBySlug('contact')
  const history = getPageBySlug('history')

  return {
    props: {
      contact,
      history,
    },
  }
}

export default HistoryPage
