import { GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'
import { Layout } from '@/components/Layout'
import { getPageBySlug } from '@/lib/pages'

const BoardPage = ({ title, body }) => {
  return (
    <Layout pageTitle="Diretoria">
      <h2>{title}</h2>

      <article>
        <ReactMarkdown source={body} />
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const page = getPageBySlug('board')

  return {
    props: {
      ...page,
    },
  }
}

export default BoardPage
