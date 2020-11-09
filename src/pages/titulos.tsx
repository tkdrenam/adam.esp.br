import { GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'
import { Layout } from '@/components/Layout'
import { getPageBySlug } from '@/lib/pages'
import { getPosts, Post } from '@/lib/posts'

type Props = {
  championships: any
  contact: any
  lastTwoPosts: Post[]
}

const ChampionshipsPage: React.FC<Props> = ({ contact, lastTwoPosts, championships }) => {
  return (
    <Layout title={championships.title} contact={contact} posts={lastTwoPosts}>
      <article>
        <ReactMarkdown source={championships.body} />
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const lastTwoPosts = getPosts().splice(0, 2)
  const contact = getPageBySlug('contact')
  const championships = getPageBySlug('championships')

  return {
    props: {
      lastTwoPosts,
      contact,
      championships,
    },
  }
}

export default ChampionshipsPage
