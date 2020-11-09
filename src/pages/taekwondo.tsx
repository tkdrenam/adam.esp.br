import { GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'
import { Layout } from '@/components/Layout'
import { getPageBySlug } from '@/lib/pages'
import { getPosts, Post } from '@/lib/posts'

type Props = {
  taekwondo: any
  contact: any
  lastTwoPosts: Post[]
}

const TaekwondoPage: React.FC<Props> = ({ contact, lastTwoPosts, taekwondo }) => {
  return (
    <Layout title={taekwondo.title} contact={contact} posts={lastTwoPosts}>
      <article>
        <ReactMarkdown source={taekwondo.body} />
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const lastTwoPosts = getPosts().splice(0, 2)
  const contact = getPageBySlug('contact')
  const taekwondo = getPageBySlug('taekwondo')

  return {
    props: {
      lastTwoPosts,
      contact,
      taekwondo,
    },
  }
}

export default TaekwondoPage
