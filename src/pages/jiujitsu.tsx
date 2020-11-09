import { GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'
import { Layout } from '@/components/Layout'
import { getPageBySlug } from '@/lib/pages'
import { getPosts, Post } from '@/lib/posts'

type Props = {
  jiujitsu: any
  contact: any
  lastTwoPosts: Post[]
}

const JiujitsuPage: React.FC<Props> = ({ contact, lastTwoPosts, jiujitsu }) => {
  return (
    <Layout title={jiujitsu.title} contact={contact} posts={lastTwoPosts}>
      <article>
        <ReactMarkdown source={jiujitsu.body} />
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const lastTwoPosts = getPosts().splice(0, 2)
  const contact = getPageBySlug('contact')
  const jiujitsu = getPageBySlug('jiujitsu')

  return {
    props: {
      lastTwoPosts,
      contact,
      jiujitsu,
    },
  }
}

export default JiujitsuPage
