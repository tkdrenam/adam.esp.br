import { GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'
import { Layout } from '@/components/Layout'
import { getPageBySlug } from '@/lib/pages'
import { getPosts, Post } from '@/lib/posts'

type Props = {
  mma: any
  contact: any
  lastTwoPosts: Post[]
}

const MMAPage: React.FC<Props> = ({ contact, lastTwoPosts, mma }) => {
  return (
    <Layout title={mma.title} contact={contact} posts={lastTwoPosts}>
      <article>
        <ReactMarkdown source={mma.body} />
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const lastTwoPosts = getPosts().splice(0, 2)
  const contact = getPageBySlug('contact')
  const mma = getPageBySlug('mma')

  return {
    props: {
      lastTwoPosts,
      contact,
      mma,
    },
  }
}

export default MMAPage
