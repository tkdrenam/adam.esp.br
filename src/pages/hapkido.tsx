import { GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'
import { Layout } from '@/components/Layout'
import { getPageBySlug } from '@/lib/pages'
import { getPosts, Post } from '@/lib/posts'

type Props = {
  hapkido: any
  contact: any
  lastTwoPosts: Post[]
}

const HapkidoPage: React.FC<Props> = ({ contact, lastTwoPosts, hapkido }) => {
  return (
    <Layout title={hapkido.title} contact={contact} posts={lastTwoPosts}>
      <article>
        <ReactMarkdown source={hapkido.body} />
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const lastTwoPosts = getPosts().splice(0, 2)
  const contact = getPageBySlug('contact')
  const hapkido = getPageBySlug('hapkido')

  return {
    props: {
      lastTwoPosts,
      contact,
      hapkido,
    },
  }
}

export default HapkidoPage
