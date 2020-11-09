import { GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'
import { Layout } from '@/components/Layout'
import { getPageBySlug } from '@/lib/pages'
import { getPosts, Post } from '@/lib/posts'

type Props = {
  muaythai: any
  contact: any
  lastTwoPosts: Post[]
}

const MuaythaiPage: React.FC<Props> = ({ contact, lastTwoPosts, muaythai }) => {
  return (
    <Layout title={muaythai.title} contact={contact} posts={lastTwoPosts}>
      <article>
        <ReactMarkdown source={muaythai.body} />
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const lastTwoPosts = getPosts().splice(0, 2)
  const contact = getPageBySlug('contact')
  const muaythai = getPageBySlug('muaythai')

  return {
    props: {
      lastTwoPosts,
      contact,
      muaythai,
    },
  }
}

export default MuaythaiPage
