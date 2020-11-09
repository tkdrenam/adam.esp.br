import { GetStaticProps } from 'next'
// import ReactMarkdown from 'react-markdown'
import { Layout } from '@/components/Layout'
import { getPageBySlug } from '@/lib/pages'
import { getPosts, Post } from '@/lib/posts'

type Props = {
  assemblies: any
  contact: any
  lastTwoPosts: Post[]
}

const AssembliesPage: React.FC<Props> = ({ contact, lastTwoPosts, assemblies }) => {
  return (
    <Layout title={assemblies.title} contact={contact} posts={lastTwoPosts}>
      <article>
        {/* <ReactMarkdown source={assemblies.body} /> */}
        <h2 className="mb-40">Em construção</h2>
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const lastTwoPosts = getPosts().splice(0, 2)
  const contact = getPageBySlug('contact')
  // const assemblies = getPageBySlug('assemblies')

  return {
    props: {
      lastTwoPosts,
      contact,
      // assemblies,
      assemblies: {
        title: 'Assembleias'
      },
    },
  }
}

export default AssembliesPage
