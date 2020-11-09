import { GetStaticProps } from 'next'
// import ReactMarkdown from 'react-markdown'
import { Layout } from '@/components/Layout'
import { getPageBySlug } from '@/lib/pages'
import { getPosts, Post } from '@/lib/posts'

type Props = {
  managementReportAndBudgetExecution: any
  contact: any
  lastTwoPosts: Post[]
}

const ManagementReportAndBudgetExecutionPage: React.FC<Props> = ({ contact, lastTwoPosts, managementReportAndBudgetExecution }) => {
  return (
    <Layout title={managementReportAndBudgetExecution.title} contact={contact} posts={lastTwoPosts}>
      <article>
        {/* <ReactMarkdown source={managementReportAndBudgetExecution.body} /> */}
        <h2 className="mb-40">Em construção</h2>
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const lastTwoPosts = getPosts().splice(0, 2)
  const contact = getPageBySlug('contact')
  // const managementReportAndBudgetExecution = getPageBySlug('managementReportAndBudgetExecution')

  return {
    props: {
      lastTwoPosts,
      contact,
      // managementReportAndBudgetExecution,
      managementReportAndBudgetExecution: {
        title: 'Relatório de Gestão e Execução Orçamentária'
      },
    },
  }
}

export default ManagementReportAndBudgetExecutionPage
