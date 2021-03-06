import { GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'
import { Layout } from '@/components/Layout'
import { getPageBySlug } from '@/lib/pages'
import { getPosts, Post } from '@/lib/posts'

type Props = {
  board: any
  contact: any
  lastTwoPosts: Post[]
}

const BoardPage: React.FC<Props> = ({ contact, lastTwoPosts, board }) => {
  return (
    <Layout title={board.title} contact={contact} posts={lastTwoPosts}>
      <article>
        <ReactMarkdown source={board.body} />
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const lastTwoPosts = getPosts().splice(0, 2)
  const contact = getPageBySlug('contact')
  const board = getPageBySlug('board')

  return {
    props: {
      lastTwoPosts,
      contact,
      board,
    },
  }
}

export default BoardPage
