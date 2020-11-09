import { GetStaticProps } from 'next'
// import ReactMarkdown from 'react-markdown'
import { Layout } from '@/components/Layout'
import { getPageBySlug } from '@/lib/pages'
import { getPosts, Post } from '@/lib/posts'

type Props = {
  faq: any
  contact: any
  lastTwoPosts: Post[]
}

const FAQPage: React.FC<Props> = ({ contact, lastTwoPosts, faq }) => {
  return (
    <Layout title={faq.title} contact={contact} posts={lastTwoPosts}>
      <article>
        {/* <ReactMarkdown source={faq.body} /> */}
        <h2 className="mb-40">Em construção</h2>
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const lastTwoPosts = getPosts().splice(0, 2)
  const contact = getPageBySlug('contact')
  // const faq = getPageBySlug('faq')

  return {
    props: {
      lastTwoPosts,
      contact,
      // faq,
      faq: {
        title: 'Perguntas e Respostas Frequentes'
      },
    },
  }
}

export default FAQPage
