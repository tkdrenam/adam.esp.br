import { GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'
import { Layout } from '@/components/Layout'
import { getPageBySlug } from '@/lib/pages'

const BoardPage = ({ contact, board }) => {
  return (
    <Layout title="Diretoria" contact={contact}>
      <h2>{board.title}</h2>

      <article>
        <ReactMarkdown source={board.body} />
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const contact = getPageBySlug('contact')
  const board = getPageBySlug('board')

  return {
    props: {
      contact,
      board,
    },
  }
}

export default BoardPage
