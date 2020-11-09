import { GetStaticProps } from 'next'
// import ReactMarkdown from 'react-markdown'
import { Layout } from '@/components/Layout'
import { getPageBySlug } from '@/lib/pages'
import { getPosts, Post } from '@/lib/posts'

type Props = {
  governance: any
  contact: any
  lastTwoPosts: Post[]
}

const GovernancePage: React.FC<Props> = ({ contact, lastTwoPosts, governance }) => {
  return (
    <Layout title={governance.title} contact={contact} posts={lastTwoPosts}>
      <article>
        {/* <ReactMarkdown source={governance.body} /> */}
        <h2 className="mb-40">Em construção</h2>
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const lastTwoPosts = getPosts().splice(0, 2)
  const contact = getPageBySlug('contact')
  // const governance = getPageBySlug('governance')

  return {
    props: {
      lastTwoPosts,
      contact,
      // governance,
      governance: {
        title: 'Governança'
      },
    },
  }
}

export default GovernancePage
