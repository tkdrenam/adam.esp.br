import { GetStaticProps } from 'next'
import { Layout } from '@/components/Layout'
import { getPageBySlug } from '@/lib/pages'

const ContactPage = ({ contact }) => {
  return (
    <Layout title="Contato" contact={contact}>
      <h2>Contato</h2>

      <div><strong>Endereço:</strong> <span>{contact.address}</span></div>
      <div><strong>Telefone:</strong> <span>{contact.phone}</span></div>
      <div><strong>E-mail:</strong> <span>{contact.email}</span></div>
      <div><strong>Facebook:</strong> <span>{contact.facebook}</span></div>
      <div><strong>Instagram:</strong> <span>{contact.instagram}</span></div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const contact = getPageBySlug('contact')

  return {
    props: {
      contact,
    },
  }
}

export default ContactPage
