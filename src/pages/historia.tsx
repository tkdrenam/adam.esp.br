import { GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'
import { Layout } from '@/components/Layout'
import { getPageBySlug } from '@/lib/pages'
import { getPosts, Post } from '@/lib/posts'

type Props = {
  history: any
  contact: any
  lastTwoPosts: Post[]
}

const HistoryPage: React.FC<Props> = ({ contact, lastTwoPosts, history }) => {
  return (
    <Layout title={history.title} contact={contact} posts={lastTwoPosts}>
      <article>
        <ReactMarkdown source={history.body} />
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const lastTwoPosts = getPosts().splice(0, 2)
  const contact = getPageBySlug('contact')
  const history = getPageBySlug('history')

  return {
    props: {
      lastTwoPosts,
      contact,
      history,
    },
  }
}

export default HistoryPage
