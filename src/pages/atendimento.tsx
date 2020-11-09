import { GetStaticProps } from 'next'
// import ReactMarkdown from 'react-markdown'
import { Layout } from '@/components/Layout'
import { getPageBySlug } from '@/lib/pages'
import { getPosts, Post } from '@/lib/posts'

type Props = {
  attendance: any
  contact: any
  lastTwoPosts: Post[]
}

const AttendancePage: React.FC<Props> = ({ contact, lastTwoPosts, attendance }) => {
  return (
    <Layout title={attendance.title} contact={contact} posts={lastTwoPosts}>
      <article>
        {/* <ReactMarkdown source={attendance.body} /> */}
        <h2 className="mb-40">Em construção</h2>
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const lastTwoPosts = getPosts().splice(0, 2)
  const contact = getPageBySlug('contact')
  // const attendance = getPageBySlug('attendance')

  return {
    props: {
      lastTwoPosts,
      contact,
      // attendance,
      attendance: {
        title: 'Atendimento'
      },
    },
  }
}

export default AttendancePage
