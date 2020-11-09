import { GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'
import { Layout } from '@/components/Layout'
import { getPageBySlug } from '@/lib/pages'
import { getPosts, Post } from '@/lib/posts'

type Props = {
  kickboxing: any
  contact: any
  lastTwoPosts: Post[]
}

const KickboxingPage: React.FC<Props> = ({ contact, lastTwoPosts, kickboxing }) => {
  return (
    <Layout title={kickboxing.title} contact={contact} posts={lastTwoPosts}>
      <article>
        <ReactMarkdown source={kickboxing.body} />
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const lastTwoPosts = getPosts().splice(0, 2)
  const contact = getPageBySlug('contact')
  const kickboxing = getPageBySlug('kickboxing')

  return {
    props: {
      lastTwoPosts,
      contact,
      kickboxing,
    },
  }
}

export default KickboxingPage
