import { GetStaticProps } from 'next'
// import ReactMarkdown from 'react-markdown'
import { Layout } from '@/components/Layout'
import { getPageBySlug } from '@/lib/pages'
import { getPosts, Post } from '@/lib/posts'

type Props = {
  shopping: any
  contact: any
  lastTwoPosts: Post[]
}

const ShoppingPage: React.FC<Props> = ({ contact, lastTwoPosts, shopping }) => {
  return (
    <Layout title={shopping.title} contact={contact} posts={lastTwoPosts}>
      <article>
        {/* <ReactMarkdown source={shopping.body} /> */}
        <h2 className="mb-40">Em construção</h2>
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const lastTwoPosts = getPosts().splice(0, 2)
  const contact = getPageBySlug('contact')
  // const shopping = getPageBySlug('shopping')

  return {
    props: {
      lastTwoPosts,
      contact,
      // shopping,
      shopping: {
        title: 'Compras'
      },
    },
  }
}

export default ShoppingPage
