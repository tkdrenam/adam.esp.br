import { GetStaticProps } from 'next'
import { Layout } from '@/components/Layout'
import { getPageBySlug } from '@/lib/pages'

const ContactPage = ({ address , phone, email, facebook, instagram}) => {
  return (
    <Layout pageTitle="Contato">
      <h1>Contato</h1>

      <div><strong>Endereço:</strong> <span>{address}</span></div>
      <div><strong>Telefone:</strong> <span>{phone}</span></div>
      <div><strong>E-mail:</strong> <span>{email}</span></div>
      <div><strong>Facebook:</strong> <span>{facebook}</span></div>
      <div><strong>Instagram:</strong> <span>{instagram}</span></div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const page = getPageBySlug('contact')

  return {
    props: {
      ...page,
    },
  }
}

export default ContactPage
