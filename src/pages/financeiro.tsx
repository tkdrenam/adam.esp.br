import { GetStaticProps } from 'next'
// import ReactMarkdown from 'react-markdown'
import { Layout } from '@/components/Layout'
import { getPageBySlug } from '@/lib/pages'
import { getPosts, Post } from '@/lib/posts'

type Props = {
  financial: any
  contact: any
  lastTwoPosts: Post[]
}

const FinancialPage: React.FC<Props> = ({ contact, lastTwoPosts, financial }) => {
  return (
    <Layout title={financial.title} contact={contact} posts={lastTwoPosts}>
      <article>
        {/* <ReactMarkdown source={financial.body} /> */}
        <h2 className="mb-40">Em construção</h2>
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const lastTwoPosts = getPosts().splice(0, 2)
  const contact = getPageBySlug('contact')
  // const financial = getPageBySlug('financial')

  return {
    props: {
      lastTwoPosts,
      contact,
      // financial,
      financial: {
        title: 'Financeiro'
      },
    },
  }
}

export default FinancialPage
