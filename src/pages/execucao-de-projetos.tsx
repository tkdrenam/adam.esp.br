import { GetStaticProps } from 'next'
// import ReactMarkdown from 'react-markdown'
import { Layout } from '@/components/Layout'
import { getPageBySlug } from '@/lib/pages'
import { getPosts, Post } from '@/lib/posts'

type Props = {
  projectImplementation: any
  contact: any
  lastTwoPosts: Post[]
}

const ProjectImplementationPage: React.FC<Props> = ({ contact, lastTwoPosts, projectImplementation }) => {
  return (
    <Layout title={projectImplementation.title} contact={contact} posts={lastTwoPosts}>
      <article>
        {/* <ReactMarkdown source={projectImplementation.body} /> */}
        <h2 className="mb-40">Em construção</h2>
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const lastTwoPosts = getPosts().splice(0, 2)
  const contact = getPageBySlug('contact')
  // const projectImplementation = getPageBySlug('projectImplementation')

  return {
    props: {
      lastTwoPosts,
      contact,
      // projectImplementation,
      projectImplementation: {
        title: 'Execução de Projetos'
      },
    },
  }
}

export default ProjectImplementationPage
