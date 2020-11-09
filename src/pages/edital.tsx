import { GetStaticProps } from 'next'
// import ReactMarkdown from 'react-markdown'
import { Layout } from '@/components/Layout'
import { getPageBySlug } from '@/lib/pages'
import { getPosts, Post } from '@/lib/posts'

type Props = {
  notice: any
  contact: any
  lastTwoPosts: Post[]
}

const NoticePage: React.FC<Props> = ({ contact, lastTwoPosts, notice }) => {
  return (
    <Layout title={notice.title} contact={contact} posts={lastTwoPosts}>
      <article>
        {/* <ReactMarkdown source={notice.body} /> */}
        <h2 className="mb-40">Em construção</h2>
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const lastTwoPosts = getPosts().splice(0, 2)
  const contact = getPageBySlug('contact')
  // const notice = getPageBySlug('notice')

  return {
    props: {
      lastTwoPosts,
      contact,
      // notice,
      notice: {
        title: 'Edital'
      },
    },
  }
}

export default NoticePage
