import { GetStaticProps } from 'next'
// import ReactMarkdown from 'react-markdown'
import { Layout } from '@/components/Layout'
import { getPageBySlug } from '@/lib/pages'
import { getPosts, Post } from '@/lib/posts'

type Props = {
  legislationOrdinancesResolutions: any
  contact: any
  lastTwoPosts: Post[]
}

const LegislationOrdinancesResolutionsPage: React.FC<Props> = ({ contact, lastTwoPosts, legislationOrdinancesResolutions }) => {
  return (
    <Layout title={legislationOrdinancesResolutions.title} contact={contact} posts={lastTwoPosts}>
      <article>
        {/* <ReactMarkdown source={legislationOrdinancesResolutions.body} /> */}
        <h2 className="mb-40">Em construção</h2>
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const lastTwoPosts = getPosts().splice(0, 2)
  const contact = getPageBySlug('contact')
  // const legislationOrdinancesResolutions = getPageBySlug('legislationOrdinancesResolutions')

  return {
    props: {
      lastTwoPosts,
      contact,
      // legislationOrdinancesResolutions,
      legislationOrdinancesResolutions: {
        title: 'Legislação, Portarias e Resoluções'
      },
    },
  }
}

export default LegislationOrdinancesResolutionsPage
